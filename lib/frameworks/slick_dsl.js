

var SubtleSlickParse = (function(){
	
	function SubtleSlickParse(CSS3_Selectors){
		var selector = ''+CSS3_Selectors;
		if(!SubtleSlickParse.nocache && cache[selector]) return cache[selector];
		parsedSelectors = [];
		parsedSelectors.type=[];
		
		while (selector != (selector = selector.replace(parseregexp, parser)));
		
		// parsedSelectors.type=parsedSelectors.type.join('');
		return cache[''+CSS3_Selectors] = parsedSelectors;
	};
	
	var parseregexp = new RegExp("(?x)\
		^(?:\n\
		         \\s+ (?=[>+~] | $)       # Meaningless Whitespace \n\
		|      ( ,                 ) \\s* # Separator              \n\
		|      ( \\s     (?=[^>+~]))      # CombinatorChildren     \n\
		|      ( [>+~]             ) \\s* # Combinator             \n\
		|      ( [a-z0-9_-]+ | \\* )      # Tag                    \n\
		| \\#  ( [a-z0-9_-]+       )      # ID                     \n\
		| \\.  ( [a-z0-9_-]+       )      # ClassName              \n\
		| \\[  ( [a-z0-9_-]+       )(?: ([*^$!~|]?=) (?: \"([^\"]*)\" | '([^']*)' | ([^\\]]*) )     )?  \\](?!\\]) # Attribute \n\
		|   :+ ( [a-z0-9_-]+       )(            \\( (?: \"([^\"]*)\" | '([^']*)' | ([^\\)]*) ) \\) )?             # Pseudo    \n\
		)".replace(/\(\?x\)|\s+#.*$|\s+/gim,''),'i');
	
	var map = {
		rawMatch : 0,
		offset   : -2,
		string   : -1,
		
		separator  : 1,
		combinator : 2,
		combinatorChildren : 3,
		
		tagName   : 4,
		id        : 5,
		className : 6,
		
		attributeKey         : 7,
		attributeOperator    : 8,
		attributeValueDouble : 9,
		attributeValueSingle : 10,
		attributeValue       : 11,
		
		pseudoClass            : 12,
		pseudoClassArgs        : 13,
		pseudoClassValueDouble : 14,
		pseudoClassValueSingle : 15,
		pseudoClassValue       : 16
	};
	var MAP = (function(){
		var obj = {};
		for (var property in map) {
			var value = map[property];
			if (value<1) continue;
			obj[value] = property;
		}
		return obj;
	})();
	var cache = SubtleSlickParse.cache = {};
	
	var parsedSelectors;
	var these_simpleSelectors;
	var this_simpleSelector;
	
	function parser(){
		var a = arguments;
		var selectorBitMap;
		var selectorBitName;
		
		for (var aN=1; aN < a.length; aN++) {
			if (a[aN]) {
				SubtleSlickParse.debug && console.log(a[aN]);
				selectorBitMap = aN;
				selectorBitName = MAP[selectorBitMap];
				break;
			}
		}
		
		SubtleSlickParse.debug && console.log((function(){
			var o = {};
			o[selectorBitName] = a[selectorBitMap];
			return o;
		})());
		
		if (!parsedSelectors.length || a[map.separator]) {
			parsedSelectors.push([]);
			these_simpleSelectors = parsedSelectors[parsedSelectors.length-1];
			if (parsedSelectors.length-1) return '';
		}
		
		if (!these_simpleSelectors.length || a[map.combinatorChildren] || a[map.combinator]) {
			this_simpleSelector && (this_simpleSelector.reverseCombinator = a[map.combinatorChildren] || a[map.combinator]);
			these_simpleSelectors.push({
				combinator: a[map.combinatorChildren] || a[map.combinator]
			});
			this_simpleSelector = these_simpleSelectors[these_simpleSelectors.length-1];
			parsedSelectors.type.push(this_simpleSelector.combinator);
			if (these_simpleSelectors.length-1) return '';
		}
		
		switch(selectorBitMap){
			
		case map.tagName:
			this_simpleSelector.tag = a[map.tagName];
			break;
			
		case map.id:
			this_simpleSelector.id  = a[map.id];
			break;
			
		case map.className:
			if(!this_simpleSelector.classes)
				this_simpleSelector.classes = [];
			this_simpleSelector.classes.push(a[map.className]);
			break;
			
		case map.attributeKey:
			if(!this_simpleSelector.attributes)
				this_simpleSelector.attributes = [];
			this_simpleSelector.attributes.push({
				name     : a[map.attributeKey],
				operator : a[map.attributeOperator],
				value    : a[map.attributeValue] || a[map.attributeValueDouble] || a[map.attributeValueSingle],
				regexp   : SubtleSlickParse.attribValueToRegex(a[map.attributeOperator], a[map.attributeValue] || a[map.attributeValueDouble] || a[map.attributeValueSingle] || '')
			});
			break;
			
		case map.pseudoClass:
			if(!this_simpleSelector.pseudos)
				this_simpleSelector.pseudos = [];
			var pseudoClassValue = a[map.pseudoClassValue] || a[map.pseudoClassValueDouble] || a[map.pseudoClassValueSingle];
			if (pseudoClassValue == 'odd') pseudoClassValue = '2n+1';
			if (pseudoClassValue == 'even') pseudoClassValue = '2n';
			
			pseudoClassValue = pseudoClassValue || (a[map.pseudoClassArgs] ? "" : null);
			
			this_simpleSelector.pseudos.push({
				name     : a[map.pseudoClass],
				argument : pseudoClassValue
			});
			break;
		}
		
		parsedSelectors.type.push(selectorBitName + (a[map.attributeOperator]||''));
		return '';
	};
	
	SubtleSlickParse.attribValueToRegex = function attribValueToRegex(operator, value){
		if (!operator) return null;
		var val = XRegExp_escape(value);
		switch(operator){
		case  '=': return new RegExp('^'      +val+ '$'     );
		case '!=': return new RegExp('^(?!'   +val+ '$)'    );
		case '*=': return new RegExp(          val          );
		case '^=': return new RegExp('^'      +val          );
		case '$=': return new RegExp(          val+ '$'     );
		case '~=': return new RegExp('(^|\\s)'+val+'(\\s|$)');
		case '|=': return new RegExp('(^|\\|)'+val+'(\\||$)');
		default  : return null;
		}
	};
	
	/*
	    XRegExp_escape taken from
	    XRegExp 0.6.1
	    (c) 2007-2008 Steven Levithan
	    <http://stevenlevithan.com/regex/xregexp/>
	    MIT License
	*/
	/*** XRegExp.escape
	    accepts a string; returns the string with regex metacharacters escaped.
	    the returned string can safely be used within a regex to match a literal
	    string. escaped characters are [, ], {, }, (, ), -, *, +, ?, ., \, ^, $,
	    |, #, [comma], and whitespace.
	*/
	var XRegExp_escape = function (str) {
	    return String(str).replace(/[-[\]{}()*+?.\\^$|,#\s]/g, "\\$&");
	};
	
	return SubtleSlickParse;
})();


var Matcher = (function(M){
	
	function Build(M){
		
		M.matcher = [];
		
		// GET
		M.matcher.push(
			M.getByAll(M) ||
			M.getById(M) ||
			M.getByClass(M) ||
			M.getByTag(M)
		);
		
		// PREPARE TO LOOP
		M.prepFilterByAll(M);
		M.prepFilterById(M);
		M.prepFilterByClass(M);
		M.prepFilterByTag(M);
		M.prepFilterByParents(M);
		
		// FILTER
		var filters = [
			M.filterByAll(M),
			M.filterById(M),
			M.filterByClass(M),
			M.filterByTag(M),
			M.filterByParents(M),
		];
		
		var filter = []
		for (var i=0; i < filters.length; i++) {
			if (!filters[i]) continue;
			filter.push("(" + filters[i] + ")");
		}
		filter = filter.join(' && \n        ');
		if (filter) M.matcher.push(M.eachStart(M) + M.filterBy(filter) + M.eachEnd(M));
		
		return M.matcher.join("\n");
	};
	
	function Matcher(context, selectorObj){
		if (typeof selectorObj == 'string') selectorObj = SubtleSlickParse(selectorObj)[0][0];
		
		M.selectorObj = M.selectorObj || selectorObj;
		M.context = M.context || context;
		var build = Build(M);
		if (Matcher.debug) console.log(build);
		try{
			eval(build);
		}catch(e){
			console.error(e);
		};
		
		delete M.selectorObj;
		delete M.context;
		return M.nodes;
	};
	
	return Matcher;
})
({
	nodes:[],
	getByAll: function(M){ return ''; },
	getById: function(M){
		var id = M.selectorObj.id;
		if (!M.context.getElementById) return '';
		if (!id) return '';
		M.selectorObj.id = null;
		return "M.nodes = [M.context.getElementById('" + id + "')];";
	},
	getByTag: function(M){
		var tag = M.selectorObj.tag || '*';
		M.selectorObj.tag = null;
		var code = ["M.nodes = M.context.getElementsByTagName('", tag, "');"];
		if (M.canSliceNodeList)
			code.push("M.nodes = Array.prototype.slice.call(M.nodes);\n");
		return code.join('');
	},
	getByClass: function(M){
		if (!M.context.getElementsByClassName && !document.evaluate) return '';
		var classes = M.selectorObj.classes;
		if (!classes) return '';
		M.selectorObj.classes = null;
		var code = [];
		
		if (M.context.getElementsByClassName) code.push("M.nodes = M.context.getElementsByClassName('", classes.join(' '), "');\n");
		else if (document.evaluate) {
			var XPATH_Selector = ['//*'];
			for (var i=0; i < classes.length; i++) {
				XPATH_Selector.push('[contains(concat(" ", @class, " "), " ', String(classes[i]).replace(/(?=["\\])/g,'\\'), ' ")]');
			}
			code.push("\
				M.nodes = [];\
				var xpathResult = document.evaluate('"+ String(XPATH_Selector.join('')).replace(/(?=['\\])/g,'\\') +"', M.context, null, "+XPathResult.ORDERED_NODE_SNAPSHOT_TYPE+", null);\
				for (var i = 0, length = xpathResult.snapshotLength; i < length; i++){\
					M.nodes.push(xpathResult.snapshotItem(i));\
				}\
			");
		}
		
		if (M.canSliceNodeList)
			code.push("M.nodes = Array.prototype.slice.call(M.nodes);\n");
		
		return code.join('');
	},
	
	eachStart: function(M){
		var code = []
		code.push("each: if (M.nodes) { for (var i=0, node, parsedNodes = []; node = M.nodes[i++];) {\n");
		return code.join('');
	},
	eachEnd: function(){
		return "\nparsedNodes.push(node); } M.nodes = parsedNodes; };";
	},
	
	filterBy : function(filterBy){
		return ['    if (!(', filterBy, ')) continue;'].join('');
	},
	filterByAll: function(M){ },
	filterByClass: function(M) {
		if (!M.selectorObj.classes) return '';
		var code = [];
		for (var i=0; i < M.selectorObj.classes.length; i++) {
			code.push('M.selectorObj.classNameRegex[' + i + '].test(node.className)');
		}
		return code.join(' && \n           ');
	},
	filterById: function(M){
		if (!M.selectorObj.id) return '';
		return "node.id === '" + M.selectorObj.id + "'";
	},
	filterByTag: function(M){
		if (!M.selectorObj.tag) return '';
		return "node.tagName.toLowerCase() === '" + M.selectorObj.tag + "'";
	},
	filterByParents: function(M){ },
	
	prepFilterByAll: function(M){},
	prepFilterById: function(M){},
	prepFilterByClass: function(M) {
		if (!M.selectorObj.classes) return '';
		M.selectorObj.classNameRegex = {};
		for (var i=0; i < M.selectorObj.classes.length; i++) {
			M.selectorObj.classNameRegex[i] = SubtleSlickParse.attribValueToRegex('~=', M.selectorObj.classes[i]);
		}
	},
	prepFilterByTag: function(M){},
	prepFilterByParents: function(M){},
	
	canSliceNodeList:(function(){
		try{
			Array.prototype.slice.call(document.getElementsByTagName('*'));
			return true;
		}catch(e){
			return false;
		};
	})(),
	
	0:0
});

document.search = function(selector){
	return Matcher(document, selector)
};









// =========
// = Tests =
// =========
// @require 'tm-file:///Users/taylott/Projects/MooTools/SubtleSlickSpeed/tests/selectors/template.js'
if (Matcher.debug){
	
var m = Matcher(document, { tag:'div' });
console.assert(m.length == 60, 'Should get div');
console.log(m);
console.log('');

var m = Matcher(document, { tag:'h1', id:'title' });
console.assert(m[0] == document.getElementById('title'), 'Should get tag & id');
console.log(m);
console.log('');

var m = Matcher(document, { id:'title' });
console.assert(m.length == 1, 'Should get id');
console.log(m);
console.log('');

var m = Matcher(document, { classes:['vcard'] });
console.assert(m.length == 5, 'Should get classes');
console.log(m);
console.log('');

var m = Matcher(document, { classes:['url', 'fn'] });
console.assert(m.length == 2, 'Should get 2 classes');
console.log(m);
console.log('');

var m = Matcher(document, { id:'title', classes:['url', 'fn'] });
console.assert(m.length == 0, 'Should get 2 classes and id');
console.log(m);
console.log('');

// ----

var m = Matcher(document, 'div');
console.assert(m.length == 60, 'Should get div');
console.log(m);
console.log('');

var m = Matcher(document, 'h1#title');
console.assert(m[0] == document.getElementById('title'), 'Should get tag & id');
console.log(m);
console.log('');

var m = Matcher(document, '#title');
console.assert(m.length == 1, 'Should get id');
console.log(m);
console.log('');

var m = Matcher(document, '.vcard');
console.assert(m.length == 5, 'Should get classes');
console.log(m);
console.log('');

var m = Matcher(document, '.url.fn');
console.assert(m.length == 2, 'Should get 2 classes');
console.log(m);
console.log('');

var m = Matcher(document, '#title.url.fn');
console.assert(m.length == 0, 'Should get 2 classes and id');
console.log(m);
console.log('');

}


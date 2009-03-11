/*
new SubtleSlickSpeed.Test('CSS Selectors',{
	
	template:'template.html',
	default_tests:{
		selectElements:[
			'div',
			'p',
			'.example',
		]
	}
	tests:{
		'jQuery 1.2.3':{
			framework:'jq-123',
			functions:{
				selectElements:'$'
			}
		},
		'jQuery 1.3.2':{
			framework:'jq-132',
			functions:{
				selectElements:'$'
			}
		},
		'Dojo 1.3':{
			framework:'dojo',
			functions:{
				selectElements:'dojo.query'
			}
		},
		'Prototype 1.6.0.3':{
			framework:'proto-1603',
			functions:{
				selectElements:'$$'
			}
		},
		'MooTools 1.2.1':{
			framework:'moo-121',
			functions:{
				selectElements:'$$'
			}
		}
	}
	
});
*/


var selectors = '\
#title\n\
h1#title\n\
div#title\n\
.company\n\
.copyright\n\
.described\n\
.dtd-example\n\
.example\n\
.figure\n\
.fn\n\
.head\n\
.index-inst\n\
.inner\n\
.meaning\n\
.note\n\
.origin\n\
.pattern\n\
.profile\n\
.refs\n\
.selectorsReview\n\
.subtoc\n\
.title\n\
.toc\n\
.tocline2\n\
.tocline3\n\
.tocline4\n\
.tprofile\n\
.url\n\
.vcard\n\
.wrapper\n\
a\n\
a.inner\n\
.url.fn\n\
a.url.fn\n\
abbr\n\
acronym\n\
b\n\
br\n\
cite\n\
code\n\
dd\n\
dd.vcard\n\
dfn\n\
div\n\
div.example\n\
div.figure\n\
div.head\n\
div.note\n\
div.profile\n\
div.subtoc\n\
div.wrapper\n\
dl\n\
dl.refs\n\
dt\n\
em\n\
h1#title\n\
h2\n\
h3\n\
h4\n\
h5\n\
hr\n\
img\n\
li\n\
li.tocline2\n\
li.tocline3\n\
li.tocline4\n\
ol\n\
p\n\
p.copyright\n\
p.note\n\
pre\n\
pre.dtd-example\n\
span\n\
span.company\n\
span.fn\n\
span.index-inst\n\
span.note\n\
strong\n\
sup\n\
table\n\
table.selectorsReview\n\
table.tprofile\n\
tbody\n\
td\n\
td.described\n\
td.meaning\n\
td.origin\n\
td.pattern\n\
th\n\
th.described\n\
th.meaning\n\
th.origin\n\
th.pattern\n\
th.title\n\
thead\n\
tr\n\
ul\n\
ul.toc\n\
var\n\
'.split('\n');

function loadFrameworkTests(framework){
	var url = 'lib/frameworks/'+framework.js+'.js';
	var win = SubtleSlickSpeed.Test.Sandboxed(framework.name, ["tests/selectors/template.js", url]);
	WindowEvents.addEvent('load:'+url, function(){
		Array.each(selectors, function(selector){
			if (!selector) return;
			win.eval("new SubtleSlickSpeed.Test('"+selector+";;;"+String.escapeSingle(framework.name)+"', function(){ return "+framework.queryFn+"('"+String.escapeSingle(selector)+"') })");
		});
	});
}


var Frameworks = {
	'jQuery 1.2.6':{
		js:'jq-126',
		queryFn:'$'
	},
	'jQuery 1.3.2':{
		js:'jq-132',
		queryFn:'$'
	},
	'Dojo 1.3':{
		js:'dojo',
		queryFn:'dojo.query'
	},
	'Prototype 1.6.0.3':{
		js:'proto-1603',
		queryFn:'$$'
	},
	'MooTools 1.2.1':{
		js:'moo-121',
		queryFn:'$$'
	},
	'Slick (pre-alpha)':{
		js:'slick',
		queryFn:'document.search'
	}
};

Object.each(Frameworks, function(framework, frameworkName){
	framework.name = frameworkName;
	loadFrameworkTests(framework);
});



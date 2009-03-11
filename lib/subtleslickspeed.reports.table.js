/*
	SubtleSlickSpeed.Report.Table
	Copyright 2009 Thomas Aylott (subtleGradient.com)
	LICENSE: MIT
*/

// if (typeof SubtleSlickSpeed == 'undefined') document.write('<scr'+'ipt src="file:///Users/taylott/Projects/MooTools/SubtleSlickSpeed/lib/jslib.js"><\/script>');
// if (typeof SubtleSlickSpeed == 'undefined') SubtleSlickSpeed={};
// if (SubtleSlickSpeed.Report == null) SubtleSlickSpeed.Report={};
SubtleSlickSpeed.Report.Table = (function(){
	
	function Table(options){
		this.options = $pick(options, {});
		this.element = document.createElement('div');
		this.element.setAttribute('id', this.options.id || uid++);
		
		this.rows = {};
	};
	Table.prototype = {
		
		toElement: function(){
			this.rebuild();
			return this.element;
		},
		
		rebuild: function(){
			this.element.innerHTML = Build.tag('table', this.options, this.rows);
		},
		
		getRow: function(rowId){
			return this.rows[rowId] || (this.rows[rowId] = {});
		},
		
		setCell: function(rowId, colId, value){
			this.getRow(rowId)[colId] = value;
			return this;
		},
		
		getCell: function(rowId, colId){
			return this.getRow(rowId)[colId];
		},
		
		set: function(row, col, value){
			var id = UID.uidOf(row + col);
			var rowId = UID.uidOf(row);
			var colId = UID.uidOf(col);
			// console.log('set', row, col, value);
			// console.log('set', rowId, colId, id);
			
			this.setCell(rowId, colId, value);
			var self = this;
			if (this.buildTimeout) clearTimeout(this.buildTimeout);
			this.buildTimeout = setTimeout(function(){
				self.rebuild();
			}, 25);
		},
		
		get: function(row, col){
			var id = UID.uidOf(row + col);
			var rowId = UID.uidOf(row);
			var colId = UID.uidOf(col);
		}
	};
	
	var uid = 0;
	
	return Table;
})();

var Build = (function(){
	
	function buildTag(tag, attrs, html){
		if (tag=='table'){
			html = buildTags('tr', attrs.tr||{td:attrs.td||{}}, html);
			delete attrs.tr;
		}
		if (tag=='tr'){
			html = buildTags('td', attrs.td||{}, html);
			delete attrs.td;
		}
		if (tag=='ul' || tag=='ol'){
			html = buildTags('li', attrs.li||{}, html);
			delete attrs.li;
		}
		var t = [];
		t.push('<');
		t.push(tag);
		t.push(buildAttrs(attrs));
		t.push('>');

		t.push(html);

		t.push('</');
		t.push(tag);
		t.push('>');
		return t.join('');
	}
	function buildTags(tag, attrs, htmls){
		var h = [];
		Object.each(htmls,function(html){
			h.push( buildTag(tag, attrs, html) );
		});
		return h.join('\n');
	}
	function buildAttr(key,value){
		if (value == null) return '';
		return ' '+key+'="'+String.escapeDouble(value)+'"';
	}
	function buildAttrs(attrs){
		var builtAttrs = [];
		Object.each(attrs,function(value, key){
			builtAttrs.push( buildAttr(key, value) );
		});
		return builtAttrs;
	}
	
	return {
		tag:buildTag,
		tags:buildTags,
		attr:buildAttr,
		attrs:buildAttrs
	};
})();

SubtleSlickSpeed.Report.prototype.buildWrapperElement = function(){
	this.table = this.table || new SubtleSlickSpeed.Report.Table();
	return this.table.toElement();
};
SubtleSlickSpeed.Report.prototype.buildOne = function(test){
	var d = test.getData();
	d.id = test.id.split(';;;');
	d.framework = d.id[1];
	d.selector  = d.id[0];
	
	document.getElementById('log').innerHTML += (Build.tag('u',{}, Math.round(d.iterations.time.average *1000)/1000 + 'ms average after running '+ d.iterations.count +' iterations' ) +' — '+ d.id.join(" : ") +'\n');
	
	// console.log(d);
	this.table.set('header', 'header', 'SELECTORS');
	this.table.set('header', d.framework, d.framework);
	this.table.set(d.selector, 'header', d.selector);
	this.table.set(d.selector, d.framework, 
		
		Build.tag('strong', 
			{
				title:
					'min:'+ Math.round(d.iterations.time.min     *1000)/1000 +',\n'+
					'avg:'+ Math.round(d.iterations.time.average *1000)/1000 +',\n'+
					'max:'+ Math.round(d.iterations.time.max     *1000)/1000
			},
			Math.round(d.iterations.time.average *1000)/1000
		) +
		Build.tag('em', {}, 'ms each') +
		'<br />' +
		
		Build.tag('strong', {}, Math.round(d.iterations.time.averageCountPerSecond)) +
		Build.tag('em', {}, ' every second ') +
		
		Build.tag('a', {
				onclick: "var t=SubtleSlickSpeed.Tests['"+String.escapeSingle(test.id)+"'];t.run(t, 10);",
				href: 'javascript:void(0)'
			}, '[rerun]'
		) +
		
		((/debug/).test(document.location.hash) ? Build.tag('pre', {}, pp(d)) : '')
		
	);
	// var tr = document.createElement('tr');
	// var td = document.createElement('td');
	// td.appendChild(document.createTextNode(d.selector));
	// tr.appendChild(td);
};


// document.write('hi')
// 
// var fred = new SubtleSlickSpeed.Report.Table('fred');
// document.body.appendChild( fred.toElement() );
// 
// cols = ['Selectors', 'frame 1', 'frame 2', 'frame 3', 'frame 4', 'frame 5', 'frame 6', 'frame 7'];
// for (var c=0; c < cols.length; c++) {
// 	UID.uidOf(cols[c]);
// }
// 
// fred.set('row0','col0', 'Selectors');
// fred.set('row1','col0', 'selector 1');
// fred.set('row2','col0', 'selector 2');
// fred.set('row3','col0', 'selector 3');
// fred.set('row4','col0', 'selector 4');
// fred.set('row5','col0', 'selector 5');
// fred.set('row6','col0', 'selector 6');
// fred.set('row7','col0', 'selector 7');
// 
// 
// 
// fred.set('row1','col1', 'c1 selector 1');
// fred.set('row1','col2', 'selector 1');
// fred.set('row1','col3', 'selector 1');
// fred.set('row2','col1', 'c1 selector 2');
// fred.set('row2','col2', 'selector 2');
// fred.set('row2','col3', 'selector 2');
// fred.set('row3','col1', 'c1 selector 3');
// fred.set('row3','col2', 'selector 3');
// fred.set('row3','col3', 'selector 3');
// fred.set('row4','col1', 'c1 selector 4');
// fred.set('row4','col2', 'selector 4');
// fred.set('row4','col3', 'selector 4');
// fred.set('row5','col1', 'c1 selector 5');
// fred.set('row5','col2', 'selector 5');
// fred.set('row5','col3', 'selector 5');
// fred.set('row6','col1', 'c1 selector 6');
// fred.set('row6','col2', 'selector 6');
// fred.set('row6','col3', 'selector 6');
// fred.set('row7','col1', 'c1 selector 7');
// fred.set('row7','col2', 'selector 7');
// fred.set('row7','col3', 'selector 7');
// fred.set('row0','col1', 'c1 Selectors');
// fred.set('row0','col2', 'Selectors');
// fred.set('row0','col3', 'Selectors');
// 
// fred.set('row0','col1', 'frame 1');
// fred.set('row0','col2', 'frame 2');
// fred.set('row0','col3', 'frame 3');
// fred.set('row0','col4', 'frame 4');
// 
// fred.set('row1','col1', '1');
// fred.set('row1','col2', '2');
// fred.set('row1','col3', '3');
// fred.set('row1','col4', '4');
// 
// fred.set('row2','col1', '5');
// fred.set('row2','col2', '6');
// fred.set('row2','col3', '7');
// fred.set('row2','col4', '8');
// 
// 

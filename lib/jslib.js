// -*- Mode: JavaScript; tab-width: 4; -*-
// ======================
// = Javascript Library =
// ======================
// Based on MooTools 1.3pA
Object.each = function(object, fn, self){
	for (var property in object) {
		fn.call(self||object[property], object[property], property, object);
	}
};

Array.each = function(array, fn, self){
	for (var i=0; i < array.length; i++) {
		fn.call(self||array[i], array[i], i, array);
	}
};

Object.merge = function(){
	var mix = {};
	for (var i = 0, l = arguments.length; i < l; i++){
		var object = arguments[i];
		if (Object.type(object) != 'object') continue;
		for (var key in object){
			var op = object[key], mp = mix[key];
			mix[key] = (mp && Object.type(op) == 'object' && Object.type(mp) == 'object') ? Object.merge(mp, op) : $unlink(op);
		}
	}
	return mix;
};
Object.type = function(obj){
	if (obj == undefined) return false;
	if (Object.prototype.toString.call(obj) === '[object Array]') return 'array';
	if (Object.prototype.toString.call(obj) === '[object Date]') return 'date';
	if (obj.nodeName){
		switch (obj.nodeType){
		case 1: return 'element';
		case 3: return (/\S/).test(obj.nodeValue) ? 'textnode' : 'whitespace';
		}
	} else if (typeof obj.length == 'number'){
		if (obj.callee) return 'arguments';
		else if (obj.item) return 'collection';
	}
	return typeof obj;
};
function $pick(){
	for (var i = 0, l = arguments.length; i < l; i++){
		if (arguments[i] != undefined) return arguments[i];
	}
	return null;
};
function $unlink(object){
	var unlinked;
	switch (Object.type(object)){
		case 'object':
			unlinked = {};
			for (var p in object) unlinked[p] = $unlink(object[p]);
		break;
		case 'array':
			unlinked = [];
			for (var i = 0, l = object.length; i < l; i++) unlinked[i] = $unlink(object[i]);
		break;
		default: return object;
	}
	return unlinked;
};
function $splat(obj){
	var type = Object.type(obj);
	return (type) ? ((type != 'array' && type != 'arguments') ? [obj] : obj) : [];
};

Array.indexOf = function(array, item, from){
	var len = array.length;
	for (var i = (from < 0) ? Math.max(0, len + from) : from || 0; i < len; i++){
		if (array[i] === item) return i;
	}
	return -1;
};

var Events = {
	
	addEvents: function(eventsObject){
		if (!eventsObject) return this;
		for (var name in eventsObject) {
			this.addEvent(name, eventsObject[name]);
		}
		return this;
	},
	
	addEvent: function(name, method){
		/* console.log('fireEvent', {name:name, method:method}); */
		if (!this.events) this.events = {};
		if (!this.events[name]) this.events[name] = [];
		// this.events[name].include(method);
		if (!Array.indexOf(this.events[name], method) != -1) this.events[name].push(method);
		
		return this;
	},
	
	removeEvent: function(name, method){
		// if (!this.events || !this.events[name]) return this;
		// this.events[name].erase(method);
		for (var i = this.events[name].length; i--; i){
			if (this.events[name][i] === method) this.events[name].splice(i, 1);
		}
		return this;
	},
	
	fireEvent: function(name, args){
		/* console.log('fireEvent', {name:name, args:args}); */
		try{/* console.log( "fireEvent:" + name ); */}catch(e){};
		if (!this.events || !this.events[name]) return this;
		args = $splat(args);
		for (var i=0, fn; fn = this.events[name][i]; i++){
			fn.apply(this, args);
		}
		return this;
	}
	
};

// Custom
Object.fromQueryString = function(queryString){
	queryString = String(queryString);
	if (!queryString) return {};
	queryString = queryString.split('?');
	if (queryString.length > 1) queryString = queryString.slice(1);
	queryString = queryString.join('?');
	var object = {};
	var vars = queryString.split('&');
	if (vars.length) for (var i=0, this_var; this_var = vars[i]; i++){
		this_var = this_var.split('=');
		var key = decodeURIComponent(this_var[0]);
		var val = decodeURIComponent(this_var.slice(1).join('='));
		
		if (object[key] != undefined){
			if (!object[key].push) object[key] = [object[key]];
			object[key].push(val);
		}else{
			object[key] = val;
		}
	}
	return object;
};
Object.toQueryString = function(object){
	var queryString = [];
	for (var key in object) {
		// try{/* console.log( "key: "+key ); */}catch(e){};
		var value = object[key];
		// try{/* console.log( "value: "+String(value)+Object.type(value) ); */}catch(e){};
		var result;
		switch (Object.type(value)){
			case 'object': result = Object.toQueryString(value, key); break;
			case 'array':
				result = [];
				for (var i=0, val; val = value[i]; i++){
					var o = {};
					o[key]=val;
					result.push(Object.toQueryString(o));
				}
				// try{/* console.log( "result: "+String(result) ); */}catch(e){};
				result = result.join('&');
			break;
			default: result = key + '=' + encodeURIComponent(value||'');
		}
		// try{/* console.log( "result: "+String(result) ); */}catch(e){};
		if (result) queryString.push(result);
	}
	// try{/* console.log( "queryString: "+String(queryString) ); */}catch(e){};
	return queryString.join('&');
};
Object.toArray=function(object){
	var arr = [];
	for (var property in object) {
		arr.push(property);
		arr.push(object[property]);
	}
	return arr;
};
Object.fromKeyValue = function(key, value){
	key = (''+key).split('.');
	var obj={};
	var object = obj;
	for (var i=0; i < key.length; i++) {
		obj = (obj[key[i]] = key[i+1] ? {} : value);
	}
	return object;
};

Object.toXMLSimple=function(object, tagName){
	var xml = [];
	switch (Object.type(object)){
	case 'object':
		if (tagName) { xml.push('<'); xml.push(tagName); xml.push('>'); }
		for (var property in object) {
			var o = object[property];
			if (property.indexOf(':')+1){
				o = Object.fromKeyValue(property, object[property]);
				object[property] = o;
				property=null;
			}
			
			xml.push(Object.toXMLSimple( o, property ));
		}
		if (tagName) { xml.push('</'); xml.push(tagName); xml.push('>'); }
		break;
	case 'array':
		for (var i=0; i < object.length; i++) {
			xml.push(Object.toXMLSimple( object[i], tagName ));
		}
		break;
	default:
		if (tagName) { xml.push('<'); xml.push(tagName); xml.push('>'); }
		object = String(object);
		if (/[<]/.test(object)){
			xml.push('<![CDATA[');
			object+=']]>';
		}
		xml.push(object);
		if (tagName) { xml.push('</'); xml.push(tagName); xml.push('>'); }
	}
	return xml.join('');
};
/* console.log( Object.toXMLSimple({1:1,2:2,3:{val:[1,2,3]},html:'<b>bold! & stuff</b>'}, 'settings') ); */
/* console.log( Object.toXMLSimple(Object.merge(Object.fromQueryString('plot_area:margins:left=123'),Object.fromQueryString('plot_area:background:alpha=100')), 'settings') ); */
// 
// document.write(pp(Object.fromKeyValue('plot_area:margins:left', 500)));
// document.write(pp(Object.fromKeyValue('left', 500)));

String.escapeHTML=function(html){
	return (''+html).replace('&','&amp;').replace('<','&lt;')
};
function pp(object){
	switch (Object.type(object)){
	case 'object':
		var h = '<table class="object"><tr><th>KEY</th><th>VALUE</th></tr>';
		for (var key in object) {
			var value = object[key];
			h += '<tr><th> '+key+' </th><td> '+pp(value)+' </td></tr>';
		}
		h += '</table>';
		return h;
		
		break;
	case 'array':
		var h = '<ol class="array" start="0">';
		for (var key in object) {
			var value = object[key];
			h += '<li>'+pp(value)+'</li>';
		}
		h += '</ol>';
		return h;
		
		break;
	case false: return 'false'; break;
	case 'string':
		return '<span class="string">'+String.escapeHTML(object).replace(/^(http.*)$/,'<a href="$1">$1</a>')+'</span>';
		break;
	case 'number':  return '<span class="number">'  + String.escapeHTML(object)+'</span>'; break;
	case 'boolean': return '<span class="boolean">' + String.escapeHTML(object)+'</span>'; break;
	case 'date':    return '<span class="date">'    + String.escapeHTML(object)+'</span>'; break;
	default: return '<span>'                        + String.escapeHTML(object)+'</span>';
	}
};

// Basic dom events
SubtleEventsJr = {
	add: function(element, eventType, fn){
		/* console.log('<<< SubtleEventsJr.add', eventType); */
		if (element.addEventListener) element.addEventListener(eventType, fn, false);
		else element.attachEvent('on' + eventType, fn);
	},
	remove: function(element, eventType, fn) {
		/* console.log('>>> SubtleEventsJr.remove', eventType); */
		if (element.removeEventListener) element.removeEventListener(eventType, fn, false);
		else element.detachEvent('on' + eventType, fn);
	}
};


// Basic multi function onload runner
WindowEvents = function(){};
WindowEvents.prototype = Events;
WindowEvents = new WindowEvents();
window.onload = function(){
	WindowEvents.fireEvent('load');
};

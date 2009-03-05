/*
    SubtleSandbox
    Copyright 2009 Thomas Aylott (subtleGradient.com)
    MIT License
	
	Some code taken from/inspired by MooTools
*/
var SubtleSandbox = (function(){
	
	function SubtleSandbox(name){
		this.window = SubtleSandbox.makeIframe.call(this, name);
		this.registeredScripts = {};
	};
	SubtleSandbox.prototype = Object.merge(
		Events,
		{
			loadScript: function(url){
				SubtleSandbox.loadScript(url, this.window);
				return this;
			},
			registerScript: function(scriptName, object){
				if (scriptName=='eval' && object.eval) {
					this.eval = object.eval.eval;
					return this;
				}
				this.registeredScripts[scriptName] = object;
				this.fireEvent('load:'+scriptName);
				return this;
			}
		}
	);
	
	SubtleSandbox.sandboxes = {};
	
	SubtleSandbox.makeIframe = 
	function makeIframe(name){
		// console.log('makeIframe');
		var thisSandbox = SubtleSandbox.sandboxes[name] = this;
		
		var iframe = document.createElement("iframe");
		iframe.style.display = "none";
		document.body.appendChild(iframe);
		
		thisSandbox.iframe = iframe;
		thisSandbox.window = frames[frames.length - 1];
		thisSandbox.window.document.write(
			"<scr"+"ipt>\
			var MSIE/*@cc_on =1@*/;\
			Sandboxed = function(scriptName,object){\
				var Sandboxed = window.eval('parent.SubtleSandbox.sandboxes[\""+name+"\"]');\
				Sandboxed.registerScript.call(Sandboxed, scriptName, object);\
				Sandboxed = null;\
			};\
			Sandboxed('eval',{ 'eval': MSIE ? this : { eval:function(s){return eval(s)} } });\
			<\/script>"
		);
		thisSandbox.window.document.close();
		return thisSandbox.window;
	};
	
	SubtleSandbox.loadScript =
	function loadScript(urls, win){
		if (!urls) return;
		console.log('< SubtleSandbox.loadScript', urls);
		
		urls = $splat(urls);
		var url = urls[0];
		urls = urls.slice(1);
		
		win = win || window;
		
		// FIXME: This won't support Safari 2 without checking for load manually
		var events = {
			load: function() {
				console.log('load', url);
				SubtleEventsJr.remove(script, 'load', events.load);
				SubtleEventsJr.remove(script, 'readystatechange', events.readystatechange);
				SubtleSandbox.fireEvent('load:'+ url);
				if (urls.length) SubtleSandbox.loadScript(urls, win);
			},
			readystatechange: function() {
				console.log('readystatechange', url, script.readyState);
				if (ScriptLoadStates[script.readyState]) events.load();
			}
		};
		
		var script = win.document.createElement('script');
		script.src = url;
		script.onload = events.load;
		SubtleEventsJr.add(script, 'load', events.load);
		SubtleEventsJr.add(script, 'readystatechange', events.readystatechange);
		win.document.body.appendChild(script);
		
		console.log('> SubtleSandbox.loadScript', url);
	};
	var ScriptLoadStates = { 'loaded':1, 'complete':1 };
	
	Object.each(Events,function(fn, key){ SubtleSandbox[key] = function(){ return fn.apply(SubtleSandbox, Array.prototype.slice.call(arguments)); }; });
	return SubtleSandbox;
})();

/*	INFO:

* loadScript is asynchronous
	you can't be sure yours loadScripts have fired
	unless you write defensive code in your evals or
	use `Sandboxed()` in your scripts to register them your sandbox

The original goal of this thing was to make it easy to create a custom slickspeed.
Load each jslib into its own iframe with its own tests. Then let the tests inform the main js runner that it's ready to go.

*/

/*	USAGE:

	var mySandbox = new SubtleSandbox('mySandbox');
	mySandbox.loadScript('url_to_file.js');
	mySandbox.eval('doSomething();');
	
	// In `url_to_file.js`
	
	Sandboxed({
		'test1': function(){}
	});
	
*/

/*	TODO:
	TODO: flesh out the registerScript functionality
	TODO: allow some sort of delayedEval that fires once the registerScript has loaded and fires a callback?
	TODO: integrate jslib Events?

*/

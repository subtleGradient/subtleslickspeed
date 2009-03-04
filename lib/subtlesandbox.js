/*
    SubtleSandbox
    Copyright 2009 Thomas Aylott (subtleGradient.com)
    MIT License
*/
var SubtleSandbox = (function(){
	
	// public
	function Sandbox(name){
		this.window = makeIframe.call(this, name);
		this.registeredScripts = {};
	};
	Sandbox.prototype = Object.merge(
		Events,
		{
			loadScript: function(url){
				loadScript(url, this.window);
				return this;
			},
			registerScript: function(scriptName, object){
				if (scriptName=='eval' && object.eval) {
					this.eval = object.eval.eval;
					return this;
				}
				this.registeredScripts[scriptName] = object;
				this.fireEvent('load');
				return this;
			}
		}
	);
	
	Sandbox.sandboxes = {};
	
	// private
	function makeIframe(name){
		// console.log('makeIframe');
		var thisSandbox = Sandbox.sandboxes[name] = this;
		
		var iframe = document.createElement("iframe");
		iframe.style.display = "none";
		document.body.appendChild(iframe);
		
		thisSandbox.iframe = iframe;
		thisSandbox.window = frames[frames.length - 1];
		thisSandbox.window.document.write(
			"<script>\
			var MSIE/*@cc_on =1@*/;\
			window.Sandboxed = function(scriptName,object){\
				var Sandboxed = window.eval('parent.SubtleSandbox.sandboxes[\""+name+"\"]');\
				Sandboxed.registerScript.call(Sandboxed, scriptName, object);\
				Sandboxed = null;\
			};\
			window.Sandboxed('eval',{ 'eval': MSIE ? this : { eval:function(s){return eval(s)} } });\
			<\/script>"
		);
		thisSandbox.window.document.close();
		return thisSandbox.window;
	};
	
	function loadScript(url, win){
		// console.log('loadInto');
		win = win || window;
		var script = win.document.createElement('script');
		script.src = url;
		win.document.body.appendChild(script);
	};
	
	return Sandbox;
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

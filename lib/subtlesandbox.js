/*
    SubtleSandbox
    Copyright 2009 Thomas Aylott (subtleGradient.com)
    MIT License
	
	Some code taken from/inspired by MooTools
*/
var SubtleSandbox = (function(){
	
	function SubtleSandbox(name,mode){
		this.name = name;
		this.window = SubtleSandbox.makeIframe.call(this, name, mode);
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
					this.fireEventStatic('load');
					return this;
				}
				this.registeredScripts[scriptName] = object;
				this.fireEventStatic('load');
				this.fireEventStatic('load:'+scriptName);
				WindowEvents.fireEvent('load:'+scriptName);
				return this;
			}
		}
	);
	
	SubtleSandbox.sandboxes = {};
	
	SubtleSandbox.makeIframe = 
	function makeIframe(name,mode){
		/* console.log('makeIframe'); */
		var thisSandbox = SubtleSandbox.sandboxes[name] = this;
		mode = mode || 'quirks';
		
		var iframe = document.createElement("iframe");
		iframe.style.display = "none";
		iframe.src = getSrc(mode) + '?' + name;
		
		document.body.appendChild(iframe);
		
		thisSandbox.iframe = iframe;
		thisSandbox.window = frames[frames.length - 1];
		
		if (mode === 'quirks') thisSandbox.window.document.write(
			"<scr"+"ipt>\
			var MSIE/*@cc_on =1@*/;\
			SubtleSandboxed = function(scriptName,object){\
				parent.SubtleSandbox.sandboxes[\""+ name +"\"].registerScript(scriptName, object);\
			};\
			SubtleSandboxed('eval',{ 'eval': MSIE ? this : { eval:function(s){return eval(s)} } });\
			<\/script>")
		;
		thisSandbox.window.document.close();
		return thisSandbox.window;
	};
	function getSrc(mode){
		if (mode == 'quirks') return 'javascript:false;';
		
		var scripts = document.getElementsByTagName('script');
		var scriptBaseURL;
		for (var i = scripts.length - 1, re=/subtlesandbox/; i >= 0; i--){
			if (re.test(scripts[i].src)){
				scriptBaseURL = scripts[i].src.split(re)[0];
				break;
			}
			if (i === 0) scriptBaseURL = scripts[i].src.split(/\w+\.js/)[0];
		}
		return scriptBaseURL + "subtlesandbox_"+mode+".html";
	};
	
	
	SubtleSandbox.loadScript =
	function loadScript(urls, win){
		if (!urls) return;
		 // console.log('< SubtleSandbox.loadScript', urls); 
		
		urls = $splat(urls);
		Array.each(urls, function(url,urlKey){
			urls[urlKey] = url + '?' + Math.random();
		});
		var url = urls[0];
		urls = urls.slice(1);
		
		win = win || window;
		
		// FIXME: This won't support Safari 2 without checking for load manually
		var events = {
			load: function() {
				/* console.log('load', url); */
				SubtleEventsJr.remove(script, 'load', events.load);
				SubtleEventsJr.remove(script, 'readystatechange', events.readystatechange);
				WindowEvents.fireEvent('load:'+ url.replace(/\?.*$/,''));
				if (urls.length) SubtleSandbox.loadScript(urls, win);
			},
			readystatechange: function() {
				/* console.log('readystatechange', url, script.readyState); */
				if (ScriptLoadStates[script.readyState]) events.load();
			}
		};
		
		var script = win.document.createElement('script');
		script.src = url;
		script.onload = events.load;
		SubtleEventsJr.add(script, 'load', events.load);
		SubtleEventsJr.add(script, 'readystatechange', events.readystatechange);
		win.document.body.appendChild(script);
		
		/* console.log('> SubtleSandbox.loadScript', url); */
	};
	var ScriptLoadStates = { 'loaded':1, 'complete':1 };
	
	Object.each(Events,function(fn, key){ SubtleSandbox[key] = function(){ return fn.apply(SubtleSandbox, Array.prototype.slice.call(arguments)); }; });
	
	window.SubtleSandboxed = function(scriptName,object){
		SubtleSandbox.registeredScripts = SubtleSandbox.registeredScripts || {};
		SubtleSandbox.registeredScripts[scriptName] = object;
		WindowEvents.fireEvent('load:'+scriptName);
	};
	
	return SubtleSandbox;
})();

/*	INFO:

* loadScript is asynchronous
	you can't be sure yours loadScripts have fired
	unless you write defensive code in your evals or
	use `SubtleSandboxed()` in your scripts to register them your sandbox

The original goal of this thing was to make it easy to create a custom slickspeed.
Load each jslib into its own iframe with its own tests. Then let the tests inform the main js runner that it's ready to go.

*/

/*	USAGE:

	var mySandbox = new SubtleSandbox('mySandbox');
	mySandbox.loadScript('url_to_file.js');
	mySandbox.eval('doSomething();');
	
	// In `url_to_file.js`
	
	SubtleSandboxed({
		'test1': function(){}
	});
	
*/

/*	TODO:
	TODO: flesh out the registerScript functionality
	TODO: allow some sort of delayedEval that fires once the registerScript has loaded and fires a callback?
	TODO: integrate jslib Events?

*/

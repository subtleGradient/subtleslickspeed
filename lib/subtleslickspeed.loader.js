(function(){
	console.log('loader');
	var scriptsrc = '';
	var hash = Object.fromQueryString((document.location.hash || '').replace('#','')) || {};
	scriptsrc = hash.tests;
	if (scriptsrc)
		document.write('<scr'+'ipt type="text/javascript" charset="utf-8" src="'+ scriptsrc +'"></scr'+'ipt>');
})();

/*
forEach(document.getElementsByTagName('iframe'), function(iframe){
    frameworks[iframe.name] = {
        'test': window.frames[iframe.name].test,
        'selectors': []
    };
});
*/





function moveToIframe(){
    var iframe = document.createElement('iframe');
    iframe.style.display = "none";
    iframe.setAttribute('name',name);
    iframeParent.appendChild(iframe);
    iframe = window.frames[name];
    
    // write a script into the <iframe> and create the sandbox
    frames[frames.length - 1].document.write(
        "<script>"+
        "var MSIE/*@cc_on =1@*/;"+ // sniff
        "parent.sandbox=MSIE?this:{eval:function(s){return eval(s)}}"+
        "<\/script>"
    );
    
    return iframe;
};

function registerNewIframe(iframeWindow){
    registerNewIframe.iframes = registerNewIframe.iframes || [];
    registerNewIframe.iframes.push(iframeWindow);
};

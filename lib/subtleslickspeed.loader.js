(function(){
	var scriptsrc = '';
	var hash = Object.fromQueryString((document.location.hash || '').replace('#','')) || {};
	scriptsrc = hash.tests;
	if (scriptsrc)
		document.write('<scr'+'ipt type="text/javascript" charset="utf-8" src="tests/'+ scriptsrc +'"></scr'+'ipt>');
})();

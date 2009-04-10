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
body\n\
div\n\
body div\n\
div p\n\
div > p\n\
div + p\n\
div ~ p\n\
div[class^=exa][class$=mple]\n\
div p a\n\
div, p, a\n\
.note\n\
div.example\n\
ul .tocline2\n\
div.example, div.note\n\
#title\n\
h1#title\n\
div #title\n\
ul.toc li.tocline2\n\
ul.toc > li.tocline2\n\
h1#title + div > p\n\
h1[id]:contains(Selectors)\n\
a[href][lang][class]\n\
div[class]\n\
div[class=example]\n\
div[class^=exa]\n\
div[class$=mple]\n\
div[class*=e]\n\
div[class|=dialog]\n\
div[class!=made_up]\n\
div[class~=example]\n\
div:not(.example)\n\
p:contains(selectors)\n\
p:nth-child(even)\n\
p:nth-child(2n)\n\
p:nth-child(odd)\n\
p:nth-child(2n+1)\n\
p:nth-child(n)\n\
p:only-child\n\
p:last-child\n\
p:first-child\n\
'.split('\n');

function loadFrameworkTests(framework){
	var url = 'lib/frameworks/'+framework.js+'.js';
	var win = SubtleSlickSpeed.Test.SubtleSandboxed(framework.name, ["tests/selectors/template.js", url]);
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



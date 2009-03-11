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


var selectors = [
	'div',
	'.example',
	'[id]',
];

WindowEvents.addEvent('load:'+"load:lib/frameworks/moo-121.js", function(){
	console.log("LOAD:LIB/FRAMEWORKS/MOO-121.JS")
});

function loadFrameworkTests(framework){
	var url = 'lib/frameworks/'+framework.js+'.js';
	var win = SubtleSlickSpeed.Test.Sandboxed(framework.name, ["tests/selectors/template.js", url]);
	WindowEvents.addEvent('load:'+url, function(){
		Array.each(selectors, function(selector){
			win.eval("new SubtleSlickSpeed.Test('"+String.escapeSingle(framework.name)+";;;"+selector+"', function(){ return "+framework.queryFn+"('"+String.escapeSingle(selector)+"') })");
		});
	});
}


loadFrameworkTests({
	name: 'MooTools 1.2.1',
	js:'moo-121',
	queryFn:'$$'
});

loadFrameworkTests({
	name: 'jQuery 1.2.6',
	js:'jq-126',
	queryFn:'$'
});





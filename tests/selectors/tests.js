// SubtleSlickSpeed.load('jq-tests','dojo-tests','moo-tests','proto-tests');
new SubtleSlickSpeed.ABTest('CSS Selectors',{
	
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

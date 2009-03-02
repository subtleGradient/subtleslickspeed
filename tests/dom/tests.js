// SubtleSlickSpeed.load('jq-tests','dojo-tests','moo-tests','proto-tests');
new SubtleSlickSpeed.ABTest('DOM',{
	
	template:'dom/template.html',
	tests:{
		'jQuery 1.2.3':{
			framework:'jq-123',
			tests:{ load:'dom/jq-tests' }
		},
		'jQuery 1.3.2':{
			framework:'jq-132',
			tests:{ load:'dom/jq-tests' }
		},
		'Dojo 1.3':{
			framework:'dojo',
			tests:{ load:'dom/dojo-tests' }
		},
		'Prototype 1.6.0.3':{
			framework:'proto-1603',
			tests:{ load:'dom/proto-tests' }
		},
		'MooTools 1.2.1':{
			framework:'moo-121',
			tests:{ load:'dom/moo-test' }
		}
	}
	
});

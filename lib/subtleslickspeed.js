/*
	SubtleSlickSpeed
	Copyright 2009 Thomas Aylott (subtleGradient.com)
	LICENSE: MIT
*/
var SubtleSlickSpeed = parent.SubtleSlickSpeed || (function(){
	
	// Main
	var SubtleSlickSpeed = {
		Tests  : [],
		Test   : function(){},
		Runner : function(){},
		Report : function(){}
	};
	
	
	// Runner
	function Runner(tests){
		/* console.log('Runner()'); */
		this.tests = tests;
		this.results = {};
	};
	Runner.prototype = {
		
		run: function(){
			/* console.log('Runner#run'); */
			Object.each(this.tests, function(test){
				/* console.log(test); */
				test.run();
			});
			return this;
		}
	};
	
	
	// Test
	var Tests = {};
	function Test(id, fn, binding){
		
		// Support passing in a nested object instead of a Function
		var EACH;
		switch(Object.type(fn)){
		case 'array':
			EACH = Array.each;
		case 'object':
			EACH = Object.each;
			
			var tests = [];
			EACH(fn, function(testFn, testName){ tests.push(new Test(testName+'.'+id, testFn, binding)); });
			
			return tests;
		}
		
		/* console.log('Test', {id:id, fn:fn}); */
		this.id = id;
		this.fn = fn;
		this.runs = [];
		this.binding = binding||{};
		
		clearTimeout(Test._loadTimer);
		Test._loadTimer = setTimeout(function(){
			WindowEvents.fireEvent('load:tests');
		}, 10);
		
		Tests[id] = this;
	};
	Test.MINIMUM_ITERATIONS = 1;
	Test.MINIMUM_TIME = 1;
	Test.prototype = Object.merge(
		Events,
		{
			run: function(i){
				var run = {iterations:[]};
				this.runs.push(run);
				try{
					if (!(i && i <  Test.MINIMUM_ITERATIONS)) i = Test.MINIMUM_ITERATIONS;
					i++; // Up the iterations by 1 to make sure it's indexed by 1 and not 0
					run.start = new Date();
					while (--i) {
						run.iterations.push(this.fn.call(this.binding,i));
						run.end = new Date();
						if (i && (run.end - run.start < Test.MINIMUM_TIME)) i++;
					}
				}catch(err){
					run.error = {
						raw: err,
						message:err.message
					};
					run.end = new Date();
				};
				run.time = run.end - run.start;
				this.fireEvent('complete', this);
				return this;
			}
		}
	);
	
	
	// FUN TIMES!!1!
	SubtleSlickSpeed.Test = Test;
	SubtleSlickSpeed.Tests = Tests;
	SubtleSlickSpeed.Runner = Runner;
	return SubtleSlickSpeed;
})();

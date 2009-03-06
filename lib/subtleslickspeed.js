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
		this.tests = tests; // Linked to original object!
	};
	Runner.prototype = {
		
		run: function(){
			/* console.log('Runner#run'); */
			var tests = [];
			Object.each(this.tests, function(test){
				tests.push(test);
			});
			
			var runNextTest = function runNextTest(){
				tests.pop().run();
				if (tests.length) setTimeout(runNextTest, 0);
			};
			runNextTest();
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
		this.data = {};
		this.binding = binding||{};
		
		var self = this;
		var run = this.run;
		this.run = function(){
			return run.apply(self, Array.prototype.slice.call(arguments));
		};
		
		clearTimeout(Test._loadTimer);
		Test._loadTimer = setTimeout(function(){
			WindowEvents.fireEvent('load:tests');
		}, 10);
		
		Tests[id] = this;
	};
	Test.MINIMUM_ITERATIONS = 1;
	Test.MAXIMUM_ITERATIONS = 9999;
	Test.MINIMUM_TIME = 10;
	Test.MAXIMUM_TIME = 100;
	Test.prototype = Object.merge(
		Events,
		{
			run: function(i){
				var run = {iterations:[]};
				var runTime = 0;
				this.runs.push(run);
				if (!(i && i <  Test.MINIMUM_ITERATIONS)) i = Test.MINIMUM_ITERATIONS;
				try {
					if (this.fnBefore) this.fnBefore(i);
					try {
						run.start = run.end = new Date();
						do {--i;
							run.iterations.push(this.fn.call(this.binding,i));
							run.end = new Date();
							if (this.fnAfterEach) this.fnAfterEach(i);
							run.runTime = run.end - run.start;
						} while (
							(
								 ( run.runTime < Test.MINIMUM_TIME )||
								!( run.runTime > Test.MAXIMUM_TIME )
							)&&(
								 ( run.iterations.length < Test.MINIMUM_ITERATIONS )||
								!( run.iterations.length > Test.MAXIMUM_ITERATIONS )
							)
						)
					}catch(err){
						run.end = new Date();
						throw(err);
					};
					if (this.fnAfter) this.fnAfter(i);
					
				}catch(err){
					run.error = {
						raw: err,
						message:err.message
					};
				};
				this.fireEvent('complete', this);
				return this;
			},
			
			calc: function(){
				var averageTime = 0;
				var countIterations = 0;
				var iterationTimes = [];
				Array.each(this.runs, function(run){
					run.iterationTime = (run.end - run.start) / run.iterations.length;
					averageTime += run.iterationTime;
					iterationTimes.push(run.iterationTime);
					countIterations += run.iterations.length;
				});
				
				averageTime /= this.runs.length;
				iterationTimes = iterationTimes.sort();
				
				this.data = Object.merge(this.data, {
					maxTime: iterationTimes[iterationTimes.length-1],
					minTime: iterationTimes[0],
					averageTime: averageTime,
					countIterations: countIterations,
					iterationsPerSecond: 1000 / averageTime
				});
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

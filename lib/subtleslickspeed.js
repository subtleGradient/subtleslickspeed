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
	Test.MIN_RUNS     = 2;
	Test.MAX_RUNS     = 4;
	Test.MIN_RUN_TIME = 10;
	Test.MAX_RUN_TIME = 200;
	
	Test.MIN_ITERS   = 1;
	Test.MAX_ITERS   = 9999;
	Test.MIN_ITER_TIME = 1;
	Test.MAX_ITER_TIME = 100;
	Test.prototype = Object.merge(
		Events,
		{
			run: function(MIN_RUNS){
				// var MIN_RUNS      = Test.MIN_RUNS;
				MIN_RUNS = MIN_RUNS || Test.MIN_RUNS;
				var MAX_RUNS      = Test.MAX_RUNS;
				var MIN_RUN_TIME  = Test.MIN_RUN_TIME;
				var MAX_RUN_TIME  = Test.MAX_RUN_TIME;
				var MIN_ITERS     = Test.MIN_ITERS;
				var MAX_ITERS     = Test.MAX_ITERS;
				var MIN_ITER_TIME = Test.MIN_ITER_TIME;
				var MAX_ITER_TIME = Test.MAX_ITER_TIME;
				var runs = [];
				var run;
				var iteration;
				var runTime = 0;
				var countRuns = 0;
				var countIterations = 0;
				var iterationTime = 0;
				this.data.countRuns = this.data.countRuns || 0;
				this.data.countIterations = this.data.countIterations || 0;
				// try {
					if (this.fnBefore) this.fnBefore(i);
					
					do {countRuns++;
						this.data.countRuns++;
						run = {iterations:[]}; this.runs.push(run);
						run.start = run.end = new Date();
						// try {
							do {countIterations++;
								this.data.countIterations++;
								iteration = {}; run.iterations.push(iteration);
								
								iteration.start = iteration.end = new Date();
								iteration.results = this.fn.call(this.binding, this.data.countIterations);
								iteration.end = run.end = new Date();
								
								iteration.time = iteration.end - iteration.start;
								run.time = run.end - run.start;
								
								if (this.fnAfterEach) this.fnAfterEach(iteration);
							} while (
								(iteration.time < MIN_ITER_TIME)
								// false &&
								// (!MIN_ITER_TIME || iteration.time        > MIN_ITER_TIME ) &&
								// (!MAX_ITER_TIME || iteration.time        < MAX_ITER_TIME ) &&
								// (!MIN_ITERS     || run.iterations.length > MIN_ITERS     ) &&
								// (!MAX_ITERS     || run.iterations.length < MAX_ITERS     ) 
								
								// (
								// 	 ( iteration.time < MIN_ITER_TIME )||
								// 	!( iteration.time > MAX_ITER_TIME )
								// )&&(
								// 	 ( run.iterations.length < MIN_ITERS )||
								// 	!( run.iterations.length > MAX_ITERS )
								// )
							)
						// }catch(err){
						// 	run.end = new Date();
						// 	throw(err);
						// };
					} while (
						(run.time < MIN_RUN_TIME)
						// (!MIN_RUN_TIME || run.time    > MIN_RUN_TIME ) &&
						// (!MAX_RUN_TIME || run.time    < MAX_RUN_TIME ) &&
						// (!MIN_RUNS     || runs.length > MIN_RUNS     ) &&
						// (!MAX_RUNS     || runs.length < MAX_RUNS     ) 
						// ( // FIXME: Updated logic from Ibolmo: http://pastie.org/private/on0adlwfajelkrolcbktg
						// 	 ( run.time < MIN_RUN_TIME )||
						// 	!( run.time > MAX_RUN_TIME )
						// )&&(
						// 	 ( runs.length < MIN_RUNS )||
						// 	!( runs.length > MAX_RUNS )
						// )
					);
					
					if (this.fnAfter) this.fnAfter(i);
				// }catch(err){
				// 	run.error = {
				// 		raw: err,
				// 		message:err.message
				// 	};
				// };
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
	Test.Sandboxed = function(sandboxName, urls){
		urls = $splat(urls);
		var sandbox = new SubtleSandbox(sandboxName);
		SubtleSandbox.addEvent('load:'+urls[urls.length-1], SubtleSlickSpeed.registerTests);
		sandbox.window.SubtleSlickSpeed = window.SubtleSlickSpeed;
		if (!sandbox.window.console) sandbox.window.console = window.console;
		sandbox.loadScript(urls);
		return sandbox;
	};
	
	// FUN TIMES!!1!
	SubtleSlickSpeed.Test = Test;
	SubtleSlickSpeed.Tests = Tests;
	SubtleSlickSpeed.Runner = Runner;
	return SubtleSlickSpeed;
})();

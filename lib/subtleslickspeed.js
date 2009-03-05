/*
	SubtleSlickSpeed
	Copyright 2009 Thomas Aylott (subtleGradient.com)
	LICENSE: MIT
*/
var SubtleSlickSpeed = top.SubtleSlickSpeed || (function(){
	
	// Main
	var SubtleSlickSpeed = {
		Tests  : [],
		Test   : function(){},
		Runner : function(){},
		Report : function(){}
	};
	
	
	// Runner
	function Runner(tests){
		// console.log('Runner()');
		this.tests = tests;
		this.results = {};
	};
	Runner.prototype = {
		
		run: function(){
			// console.log('Runner#run');
			Object.each(this.tests, function(test){
				// console.log(test);
				test.run();
			});
		}
	};
	
	
	// Test
	var Tests = {};
	function Test(id, fn, binding){
		console.log('Test', {id:id, fn:fn});
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
	Test.prototype = Object.merge(
		Events,
		{
			run: function(i){
				var run = {iterations:[]};
				this.runs.push(run);
				try{
					run.start = new Date();
					i = i || 1;
					while (--i) {
						run.iterations.push( this.fn.call(binding,i) );
					}
					run.end = new Date();
				}catch(err){
					run.error = {
						raw: err,
						message:err.message
					};
					run.end = new Date();
				};
				this.fireEvent('complete', this);
			}
		}
	);
	
	
	// FUN TIMES!!1!
	SubtleSlickSpeed.Test = Test;
	SubtleSlickSpeed.Tests = Tests;
	SubtleSlickSpeed.Runner = Runner;
	return SubtleSlickSpeed;
})();

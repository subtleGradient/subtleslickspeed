
var SubtleSlickSpeed = (function(){
	
	// Main
	function SubtleSlickSpeed(){
		console.log('SubtleSlickSpeed');
		return new SubtleSlickSpeed.Runner();
	};
	
	
	// Runner
	SubtleSlickSpeed.Runner = function(){
		console.log('SubtleSlickSpeed.Runner');
		this.run();
	};
	SubtleSlickSpeed.Runner.prototype = {
		
		run: function(){
			console.log('run');
			Array.each(SubtleSlickSpeed.Tests, function(test){
				console.log(test);
			});
		},
		
		'':''
	};
	
	
	// Test
	SubtleSlickSpeed.Tests = [];
	SubtleSlickSpeed.Test = function Test(testName, tests){
		console.log('Test');
		this.testName = testName;
		this.tests = tests;
		
		SubtleSlickSpeed.Tests.push(this);
	};
	SubtleSlickSpeed.Test.prototype = {
		
	};
	SubtleSlickSpeed.Test.prototype.prototype = Events;
	
	
	// FUN TIMES!!1!
	return SubtleSlickSpeed;
})();

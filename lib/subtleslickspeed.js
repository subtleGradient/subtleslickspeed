
var SubtleSlickSpeed = top.SubtleSlickSpeed || (function(){
	
	// Main
	// function SubtleSlickSpeed(){
	// 	console.log('SubtleSlickSpeed()');
	// 	// return new SubtleSlickSpeed.Runner();
	// };
	var SubtleSlickSpeed = {};
	
	
	// Runner
	SubtleSlickSpeed.Runner = function(){
		console.log('SubtleSlickSpeed.Runner()');
		this.run();
	};
	SubtleSlickSpeed.Runner.prototype = {
		
		run: function(){
			console.log('SubtleSlickSpeed.Runner#run');
			Array.each(SubtleSlickSpeed.Tests, function(test){
				console.log(test);
			});
		},
		
		'':''
	};
	
	
	// Test
	SubtleSlickSpeed.Tests = [];
	SubtleSlickSpeed.Test = function Test(testName, tests){
		console.log('SubtleSlickSpeed.Test', {testName:testName, tests:tests});
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


// 
// WindowOnload.addEvent('load', function(){
// 	console.log('window.onload');
// 	SubtleSlickSpeed.register(this);
// });

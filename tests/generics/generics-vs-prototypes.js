// http://home.subtlegradient.com:4002/runner.html?#tests=tests/generics/generics-vs-prototypes.js

// ================
// = Code To Test =
// ================
Array.prototype.indexOf = function Array_prototype_indexOf(item, from){
	var self = this;
	for (var l = self.length, i = (from < 0) ? Math.max(0, l + from) : from || 0; i < l; i++){
		if (self[i] === item) return i;
	}
	return -1;
};
Array.indexOf = function Array_indexOf(self, item, from){
	// var self = this;
	for (var l = self.length, i = (from < 0) ? Math.max(0, l + from) : from || 0; i < l; i++){
		if (self[i] === item) return i;
	}
	return -1;
};

Array.indexOfCall = function Array_indexOfCall(self, item, from){
	return Array.prototype.indexOf.call(self, item, from);
};

Array.prototype.indexOfCall = function Array_prototype_indexOfCall(item, from){
	return Array.indexOf.call(this, item, from);
};


// =========
// = Tests =
// =========
var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var loremArray = lorem.split(' ');


new SubtleSlickSpeed.Test("indexOf;;;prototype", function Array_prototype_indexOf_TEST(){
	return loremArray.indexOf('eiusmod');
});

new SubtleSlickSpeed.Test("indexOf;;;generic", function Array_indexOf_TEST(){
	return Array.indexOf(loremArray, 'eiusmod');
});

new SubtleSlickSpeed.Test("indexOf;;;generic call prototype", function Array_indexOfCall_TEST(){
	return Array.indexOfCall(loremArray, 'eiusmod');
});

new SubtleSlickSpeed.Test("indexOf;;;prototype call generic", function Array_prototype_indexOfCall_TEST(){
	return loremArray.indexOfCall('eiusmod');
});


// ============
// = Defaults =
// ============
SubtleSlickSpeed.Test.MIN_ITERS     = 0;
SubtleSlickSpeed.Test.MIN_ITER_TIME = 1;
SubtleSlickSpeed.Test.MIN_RUNS      = 1;
SubtleSlickSpeed.Test.MIN_RUN_TIME  = 50;


// ==========
// = Report =
// ==========
// SubtleSlickSpeed.Report.TIMEOUT  = 1000;
SubtleSlickSpeed.Report.prototype.buildOne = function(test){
	// console.log('Report#buildOne');
	var one = document.createElement('li');
	var data = test.getData();
	one.innerHTML = [
		"id",
		test.id+'<br>',
		"ops/ms",
		Math.round(data.iterations.time.averageCountPerSecond/1000),
		"Performance",
		Math.round( 
			Number.setCompare('Runs Per Second', test.id, data.iterations.time.averageCountPerSecond).percent.avg
		*1000)/1000 + 'x',
	].join(': ');
	// one.innerHTML = pp({
	// 	id   : test.id,
	// 	'Runs Per Second' : Number.setCompare('Runs Per Second', test.id, data.iterations.time.averageCountPerSecond).percent.avg
	// });
	return one;
};

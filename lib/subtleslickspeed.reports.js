/*

tests = {
	'test 1': { addEvent: function(eventName, fn){} }
}

OR

tests = [
	{ id:'test 1', addEvent: function(eventName, fn){} }
]

var myReport = new SubtleSlickSpeed.Report(tests);
document.body.appendChild(myReport.toElement());

*/
SubtleSlickSpeed.Report = (function(){
	
	function Report(tests){
		console.log('Report()', {tests:tests});
		this.tests = {};
		var self = this;
		this.updateOneBound = function(test, id){
			return self.updateOne.call(self, test, id);
		};
		Object.each(tests, connectTest, this);
	};
	Report.prototype = {
		
		// element,
		
		// tests:{},
		
		buildWrapperElement: function(){
			console.log('Report#buildWrapperElement');
			return document.createElement('ul');
		},
		
		buildOne: function(test){
			console.log('Report#buildOne');
			var one = document.createElement('li');
			one.innerHTML = pp(test);
			return one;
		},
		
		toElement: function(){
			console.log('Report#toElement');
			if (this.element) return this.element;
			return this.element = this.buildWrapperElement();
		},
		
		// Update all tests actively
		// manually loop through all tests and get their data
		update: function(tests){
			console.log('Report#update', { tests:tests });
			tests = tests || this.tests;
			Object.each(tests, this.updateOne, this);
			return this;
		},
		
		// Update a single test passively
		updateOne: function(test, id){
			console.log('Report#updateOne', { test:test });
			test.id = test.id || id;
			this.toElement().appendChild(this.buildOne(test));
			return this;
		}
	};
	
	
	function connectTest(test, id){
		console.log('Report##connectTest', { test:test });
		test.id = test.id || id;
		this.tests[test.id] = test;
		
		if (!test || !test.addEvent) return;
		test.addEvent('complete', this.updateOneBound);
	};
	
	return Report;
})();


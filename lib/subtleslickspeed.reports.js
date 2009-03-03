/*
	SubtleSlickSpeed.Report
	Copyright 2009 Thomas Aylott (subtleGradient.com)
	LICENSE: MIT
*/
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
		// console.log('Report()', {tests:tests});
		this.tests = {};
		var self = this;
		this.updateOneBound = function(test){
			return self.updateOne.call(self, test);
		};
		Object.each(tests, connectTest, this);
	};
	Report.prototype = {
		
		// element,
		
		// tests:{},
		
		buildWrapperElement: function(){
			// console.log('Report#buildWrapperElement');
			var dad = document.createElement('ul');
			document.body.appendChild(dad);
			return dad
		},
		
		buildOne: function(test){
			// console.log('Report#buildOne');
			var one = document.createElement('li');
			one.innerHTML = pp(test);
			return one;
		},
		
		toElement: function(){
			// console.log('Report#toElement');
			if (this.element) return this.element;
			return this.element = this.buildWrapperElement();
		},
		
		// Update a single test passively
		updateOne: function(test){
			// console.log('Report#updateOne', { test:test });
			var dad = this.toElement();
			var elNew = this.buildOne(test);
			var el = elements[test.id];
			if (el && el.parentNode) {
				el.parentNode.replaceChild(elNew, el);
			} else {
				dad.appendChild(elNew);
			}
			elements[test.id] = elNew;
			return this;
		}
	};
	
	var elements = {};
	function connectTest(test, id){
		// console.log('Report##connectTest', { test:test });
		test.id = test.id || id;
		this.tests[test.id] = test;
		
		if (!test || !test.addEvent) return;
		test.addEvent('complete', this.updateOneBound);
	};
	
	return Report;
})();


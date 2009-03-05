console.log('LOADED: sample-sandboxed/tests');

new SubtleSlickSpeed.Test("getByTag0", function(){
	return document.getElementsByTagName('*');
});

function handleSandboxLoad(){
	console.log('mySandbox onload');
	// console.log(this.registeredScripts);
	for (var scriptName in this.registeredScripts) {
		console.log('	'+scriptName);
		if (typeof this.registeredScripts[scriptName] == 'function') {
			// console.log( this.registeredScripts[scriptName] );
			// console.log('scriptName');
			new SubtleSlickSpeed.Test(scriptName, this.registeredScripts[scriptName]);
			continue;
		}
		
		for (var functionName in this.registeredScripts[scriptName]) {
			console.log('		'+functionName);
			if (typeof this.registeredScripts[scriptName][functionName] == 'function') {
				// console.log( this.registeredScripts[scriptName][functionName] );
				// console.log(functionName);
				new SubtleSlickSpeed.Test(scriptName +'.'+ functionName, this.registeredScripts[scriptName][functionName]);
			}
		}
		
	}
}

var mySandbox = new SubtleSandbox('mySandbox').addEvent('load:MooTools Tests', handleSandboxLoad);
mySandbox.loadScript(['lib/frameworks/moo-121.js', 'tests/dom/moo-tests.js']);

console.log('/LOADED: sample-sandboxed/tests');

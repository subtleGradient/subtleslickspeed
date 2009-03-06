// Add a test directly
new SubtleSlickSpeed.Test("getByTag0", function(){ return document.getElementsByTagName('*'); });

// Add tests into an iframe from another file
var mySandbox = new SubtleSandbox('mySandbox');
SubtleSandbox.addEvent('load:'+'tests/dom/moo-tests.js', SubtleSlickSpeed.registerTests);
mySandbox.window.SubtleSlickSpeed = window.SubtleSlickSpeed;
mySandbox.window.console = window.console;
mySandbox.loadScript(['lib/frameworks/moo-121.js', 'tests/dom/moo-tests.js']);

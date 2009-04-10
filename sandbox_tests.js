SubtleSandboxed('SubtleSandboxed Tests',{
    test1: function(){
        return document.getElementsByTagName('*').length;
    },
    test2: function(){
		return $$('*').length;
    }
});

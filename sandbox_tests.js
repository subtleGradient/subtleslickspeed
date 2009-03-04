Sandboxed('Sandboxed Tests',{
    test1: function(){
        return document.getElementsByTagName('*').length;
    },
    test2: function(){
		return $$('*').length;
    }
});

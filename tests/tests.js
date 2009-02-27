new SubtleSlickSpeed.Test('Default Tests',
	{
		'All Elements': function(i){
			
			console.log('All Elements');
			return document.getElementsByTagName('*');
			
		}
		
	},
	{
		'All Elements:before': function(i){console.log('All Elements:before');},
		'All Elements:after': function(i){console.log('All Elements:after');}
	}
);

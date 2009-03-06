new SubtleSlickSpeed.Test('MooTools',{
	
	"make": function(i){
		new Element('ul', { id:'setid'+i, 'class':'fromcode'})
			.inject(document.body)
			.adopt(
				new Element('li', { html:'one' }),
				new Element('li', { html:'two' }),
				new Element('li', { html:'three' })
			)
		;
		return $$('ul.fromcode').length;
	},
	
	"indexof": function(i){
		var id,ul,index;
		id = $('setid150');
		index = $$('ul').indexOf(id);
		return index;
	},
	
	"bind": function(i){
		return $$('ul > li').addEvent('click', $empty).length;
	},
	
	"attr": function(i){
		return $$('ul').get('id').length;
	},
	
	"bindattr": function(i){
		return $$('ul > li').map(function(el){
			return el.addEvent('mouseover', $empty).set('rel','touched').removeEvent('mouseover', $empty);
		}).length;
	},
	
	"table": function(i){
		
		new Element('table',{ 'class':'madetable' })
			.inject(document.body)
			.grab(
				new Element('tr')
				.grab( new Element('td',{ html:'first' }) )
				.grab( new Element('td'), 'top')
			)
		;
		return $$('tr td').length;
	},
	
	"addanchor": function(i){
		return $$('ul.fromcode > li').map(function(el){
			return el.grab(new Element('a',{ html:'link', href:'http://example.com' }));
		}).length;
	},
	
	"alt-add": function(i){
		return $$('ul.fromcode > li').map(function(el){
			return el.grab(new Element('a',{ html:'link', href:'http://example.com' }));
		}).length;
	},
	
	"create": function(i){
		$(document.body).grab(new Element('div', {rel: 'foo', html: 'test'}));
		return $$("[rel^='foo']").length;
	},
	
	"append": function(i){
		$(document.body).grab(new Element('div', {rel: 'foo2'}));
		return $$('div[rel^="foo2"]').length;
	},
	
	"addclass-odd": function(i){
		return $$('div').filter(function(d, i){
			d.addClass('added');
			if (i % 2) return d.addClass('odd');
		}).length;
	},
	
	"style": function(i){
		return $$('div.added').setStyles({ 'background-color':'#ededed', color:'#fff' }).length;
	},
	
	"confirm-added": function(i){
		return $$('div.added').length;
	},
	
	"removeclass": function(i){
		return $$('div.added').removeClass('added').length;
	},
	
	"sethtml": function(i){
		return $$('div').set('html', "<p>new content</p>").length;
	},
	
	"sethtml-alt": function(i){
		return $$('div.odd').filter(function(div,i){
			if (i % 50 === 1) return div.set('html', "<p>alt content</p>");
		}).length;
	},
	
	"insertbefore": function(i){
		return $$('ul.fromcode a').map(function(a){
			new Element('p', {html: 'A Link'}).injectBefore(a);
		}).length;
	},
	
	"insertafter": function(i){
		return $$('ul.fromcode a').map(function(a){
			new Element('p', {html: 'A Link'}).injectAfter(a);
		}).length;
	},
	
	destroy: function(i){ 
		return $$('ul.fromcode').dispose().length;
	},
	
	finale: function(i){
		$$('body *').dispose();
		return $$('body *').length;
	}
	
});

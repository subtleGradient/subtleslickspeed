new SubtleSlickSpeed.Test('jQuery',{
	
	"make": function(i){
		$("<ul id='setid" + i + "' class='fromcode'></ul>")
			.appendTo("body")
			.append("<li>one</li><li>two</li><li>three</li>");
		return $("ul.fromcode").length;
	},
	
	"indexof" : function(i){
		var n, id;
		id = $("#setid150");
		n = $("ul").index(id)
		return n;
	},
	
	"bind" : function(i){
		return $("ul > li").bind("click", function(i){ }).length;
	},
	
	"attr" : function(i){
		return $("ul").map(function(i){ return $(this).attr("id") }).length;
	},
	
	"bindattr" : function(i){
		return $("ul > li")
			.bind("mouseover", function(i){ })
			.attr("rel", "jq")
			.unbind("mouseover")
			.length;
	},
	
	"addanchor" : function(i){
		return $(".fromcode > li").append("<a href='http://example.com'>link</a>").length;
	},
	
	"alt-add" : function(i){
		return $(".fromcode > li").each(function(i){
			$("<a href='http://example.com'>link2</a>").appendTo(this);
		}).length;
	},
	
	"create": function(i){
		$("body").append("<div rel='foo'>test</div>");
		return $("[rel^='foo']").length;
	},
	
	"append" : function(i){
		$("<div rel='foo2'>test2</div>").appendTo("body");
		return $("div[rel^='foo2']").length;
	},
	
	"addclass-odd" : function(i){
		return $("div").addClass("added").filter(":odd").addClass("odd").length;
	},
	
	
	"style" : function(i){
		return $(".added").css({ backgroundColor:"#ededed", color:"#fff" }).length;
	},

	"confirm-added" : function(i){
		return $("div.added").length;
	},
	
	"removeclass" : function(i){
		return $(".added").removeClass("added").length;
	},
	
	"table": function(i){
		$("<table class='madetable'></table>")
			.appendTo("body")
			.html("<tr><td>first</td></tr>")
			.find("tr").prepend("<td>before</td>");
		return $("tr td").length;
	},
	
	"sethtml": function(i){
		return $("div").each(function(i){
			this.innerHTML = "<p>jquery's new content</p>";
		}).length;	
	},
	
	"sethtml-alt" : function(i){
		return $(".odd").map(function(i){
			return i % 50 === 0 ? this : null;
		}).length;
	},
	
	"insertbefore" : function(i){
		return $(".fromcode a").before($("<p>A Link</p>")).length;
	},
	
	"insertafter" : function(i){
		return $(".fromcode a").after($("<p>After Link</p>")).length;
	},
	
	destroy: function(i){
		return $(".fromcode").remove().length;
	},
	
	finale: function(i){
		$("body").empty();
		return $("body *").length;
	}
	
});

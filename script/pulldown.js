var pulldown = {
    init: function() {
        var obj = this;
        
        $(".pulldown").each(function() {                        
            var pull = $(this);
            
            var data_val = pull.find("input").attr("data-val");          
            var empty = pull.find("li[data-empty='true']");            
            var curr = pull.find("li").eq(data_val ? data_val : 0);            
            obj.setItemVal(pull, curr);            
            empty.remove();
            
            pull.find("input").click(function(e) {
                e.stopPropagation();
                var ul = $(this).next(); 
                ul.toggle();
                ul.addClass("current");
                $(".pulldown ul:not(.current)").hide();
                ul.removeClass("current");
            });
            
            pull.find("li").click(function(e) {
                e.stopPropagation();
                $(this).parent().hide();
                obj.setItemVal(pull, $(this));
            });
            
            $(document).click(function() {
                $("ul").hide();
            });            
        });                                                                                               
    },
    
    setItemVal: function(pull, item) {                        
        pull.find("input").attr("data-val", pull.find("li").index(item));
        pull.find("input").val(item.text());
    }
};


$(function() {
	pulldown.init();
});
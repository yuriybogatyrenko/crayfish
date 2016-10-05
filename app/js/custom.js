$(document).ready(function(){
	 function full_screen(){
        var window_h = $(window).outerHeight();
        if (window_h < 930) {
            return;
        }
        $(".full-screen").css("height", window_h);
    }

    $(document).on('click', '.feedback-open', function(e){
        $(".b-feedback-popup").fadeIn(400);
        e.preventDefault();
    });
    $(document).on('click', '.overlay-popup, .popup-close ', function(e){
        $(".b-popup").fadeOut(400);
        e.preventDefault();
    });

    $(document).on('mouseenter', '.b-nav-cart', function(e){
		$(".b-nav-cart__drop").stop().fadeIn(400);
		e.preventDefault();
	});
    $(document).on('mouseleave', '.b-nav-cart', function(e){
		$(".b-nav-cart__drop").stop().fadeOut(400);
		e.preventDefault();
	});
     $(document).on('click', '.b-checkout-table__delete-item', function(e){
		$(this).closest(".b-checkout-table__item").remove();
		e.preventDefault();
	});
    $(document).on('click', '.b-page-title-section__excerpt__reset', function(e){
    	if ($(this).hasClass("active")) {
    		return;
    	} else {
    		$(this).addClass("active");
    	}
    	setTimeout(function(){
    		$(".b-page-title-section__excerpt__reset").removeClass("active");
    	},600);
		e.preventDefault();
	});
    
    $(document).on('click', '[data-call]', function(e){
        var this_data = $(this).data("call");
        $("[data-popup="+this_data+"]").fadeIn(400);
    });



    function b_bg(){
    	if ($(".b-bg-img").length > 0) {
            $(".b-bg-img").each(function(){
                var scr = $(this).attr("src");
                $(this).closest(".b-bg-item").css('background','url('+scr+')');
                $(this).remove();
            });
    		
    		
    	}
    }

    $(document).on('click', '.b-counter__btn', function(e){
     	var step = $(this).closest(".b-counter").data("step"),
     		this_input = $(this).closest(".b-counter").find(".b-counter__input"),
     		value = this_input.val(),
     		int_value = parseInt(value);
			
		if ($(this).hasClass("b-counter__minus") && (value < step)){
			return false;
			
		} else if ($(this).hasClass("b-counter__minus")){
			int_value = int_value - step;
		} else if ($(this).hasClass("b-counter__plus")){
			int_value = int_value + step;	
		}
		this_input.val(int_value);
	});


    var resize_val = 0;

    $(window).resize(function(){
        clearTimeout(resize_val);
        resize_val = setTimeout(function(){
            toggle_screen();
        },200);
    });

    setTimeout(function(){
        full_screen();
        b_bg();
        toggle_screen();
    },300);

    

    function toggle_screen() {
        sidebar_transfer();
        advantages_transfer();
    }

    function sidebar_transfer() {
        if ($(".b-site-wrapper").outerWidth() < 992) {
            $(".b-main-content__wrapper").append($(".b-sidebar"));
        } else {
            $(".b-main-content__wrapper").prepend($(".b-sidebar"));
        }      
    }
    function advantages_transfer() {
        if ($(".b-site-wrapper").outerWidth() < 992) {
            $(".b-advantages-tab").prepend($(".b-advantages"));
        } else {
            $(".b-advantages-default").prepend($(".b-advantages"));
        } 
    }

    


});

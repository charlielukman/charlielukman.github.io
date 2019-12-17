//==============================================================
// CUSTOM SCRIPTS
// Author: Xtremax (http://xtremax.com/)
// 2014
// ==============================================================


$(document).ready(function() {

//==============================================================
// Superfish
// ==============================================================


    if ($(window).width() > 767) {

        $('.main-nav > ul').superfish({
            delay: 0
        });
        $('span.sf-sub-indicator').remove();

    }
   

    $(".icon-font-asc").click(function() {
        var fontSize = parseInt($(this).data("size"));
        fontSize = fontSize + 1;
		var maxSize = '17';
		
		 if (fontSize < maxSize) {
				$('.content').css({'font-size':fontSize+ "px"});
				$(this).data("size",fontSize);
				$(".icon-font-desc").data("size",fontSize);
			 }

		
    });

    $(".icon-font-desc").click(function() {
        var fontSize = parseInt($(this).data("size"));
        fontSize = fontSize - 1;
		var minSize = '9';
		
		if (fontSize > minSize) {
				$('.content').css({'font-size':fontSize+ "px"});
				$(this).data("size",fontSize);
				$(".icon-font-asc").data("size",fontSize);			
			}

    });

});
// end ready function here.


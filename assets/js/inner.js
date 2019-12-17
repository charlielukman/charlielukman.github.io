//==============================================================
// CUSTOM SCRIPTS
// Author: Xtremax (http://xtremax.com/)
// 2014
// ==============================================================


$(document).ready(function () {
    $('.fancybox').fancybox();

// Sidebar Dropdown for Inner pages ========================================//

    $('.toggle > a').on('click', function () {
        $(".toggle").toggleClass("up");
        $(this).parent('li').find('ul').slideToggle('slow');
    });

// Tab navigation========================================//
    var tabList = jQuery("ul.tabs1 li"),
        tabContent = jQuery(".tab_container1 .tab_content");
    tabContent.hide();
    tabContent.first().show();
    tabList.on('click', function () {
        var $this = jQuery(this);
        var index = $this.index();
        if (!$this.hasClass('active')) {
            tabList.removeClass("active"); //Remove any "active" class
            $this.addClass("active"); //Add "active" class to selected tab
            tabContent.hide().eq(index).fadeIn(); //Fade in the active content
        }
        return false;
    });

    var tabList1 = jQuery("ul.tabs2 li"),
        tabContent1 = jQuery(".tab_container2 .tab_content");
    tabContent1.hide();
    tabContent1.first().show();
    tabList1.on('click', function () {
        var $this = jQuery(this);
        var index = $this.index();
        if (!$this.hasClass('active')) {
            tabList1.removeClass("active"); //Remove any "active" class
            $this.addClass("active"); //Add "active" class to selected tab
            tabContent1.hide().eq(index).fadeIn(); //Fade in the active content
        }
        return false;
    });
    // The slider being synced must be initialized first
    $('.flexslider.thumbnail').flexslider({
        animation: "onclick",
        directionNav: true,
        slideshowSpeed: 3000,
        controlNav: "thumbnails",
        start: function(slider) {
            $('.play-pause-btn').toggle(function(){
                slider.pause();
            },
                function(){
                    slider.play();
                });
        }
    });
    $('.pre-btn').on('click', function () {
        $('.flexslider.thumbnail.search-gallery').flexslider('prev');
        return false;
    });

    $('.next-btn').on('click', function () {
        $('.flexslider.thumbnail.search-gallery').flexslider('next');
        return false;
    });
});
// end ready function here.


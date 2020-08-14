$(function(){
    showHideNav()
    $(window).scroll(function() {
        // alert("qqqqq");
        showHideNav()
        
    });
    function showHideNav(){
        if ($(window).scrollTop() > 50 ) {
            // alert("qqqqq");
            $("nav").addClass("white-nav-top");
        } else {
            $("nav").removeClass("white-nav-top");
        }
    }
});
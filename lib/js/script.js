$( document ).ready(function() {
    
$(document).on("scroll", onScroll);
    


// close nav onclick
$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top +10
    }, 900 );
    event.preventDefault();
});




function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#toto a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        var name = refElement.attr('id');
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height()  > scrollPos  ) {
            $('#toto ul li a').removeClass("active");
            currLink.addClass("active");	
        }
        else{
            currLink.removeClass("active");
        }

        var menu =  $(".active").text() ;
        if ( menu !== $('#current').text() ) {
            if (menu != '') {
                $('#current').text(currLink.text());
            }
        }


    });
}

});
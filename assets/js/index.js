$(window).scroll(function(){
    let visible = isVisible($('#main-content'));
    visible ? $('.song').fadeIn('slow') : $('.song').fadeOut('slow')
})
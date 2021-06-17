$(document).ready(function() {

    $('.js--welcome').waypoint(function(direction) {
        if (direction == "down") {
            $('.sticky').css('display', 'block');
        } else {
            $('.sticky').css('display', 'none');
        }
    }, {
        offset: '60px'
    });

    $('.js--register-btn').click(function() {
        $('html, body').animate({scrollTop: $('.js--footer').offset().top}, 1000);
    });

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '100px'
    });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate__animated animate__fadeIn');
    });
});
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
        $('.js--wp-2').addClass('animate__animated animate__fadeInLeft');
    },{
        offset: '300px'
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animate__animated animate__backInLeft');
    },{
        offset: '600px'
    });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animate__animated animate__backInUp');
    },{
        offset: '600px'
    });

    $('.js--wp-5').waypoint(function(direction){
        $('.js--wp-5').addClass('animate__animated animate__backInRight');
    },{
        offset: '600px'
    });

    $('.js--wp-6').waypoint(function(direction){
        $('.js--wp-6').addClass('animate__animated animate__fadeIn');
    },{
        offset: '400px'
    });

    $('.js--wp-7').waypoint(function(direction){
        $('.js--wp-7').addClass('animate__animated animate__fadeIn');
    },{
        offset: '400px'
    });
});
$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('.sticky').css('display', 'block');
        } else {
            $('.sticky').css('display', 'none');
        }
    }, {
        offset: '60px'
    });
});
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
});
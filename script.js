
$(document).ready(function(){
    var offset = 250;
    var duration = 500;

    $(window).scroll(function(){
        if($(this).scrollTop() > offset){
            $('.to-top').fadeIn(duration);
        }else {
            $('.to-top').fadeOut(duration);
        }
    });

    $('.to-top').click(function(){
        $('body').animate({scrollTop: 0}, duration);
    })
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
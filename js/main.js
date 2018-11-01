$(document).ready(function() {
    $('#fullpage').fullpage();
});


var myFullpage = new fullpage('#fullpage', {
        css3: true,
        scrollBar: false,
        scrollingSpeed: 400,
		autoScrolling: false,
		loopBottom: false,
		loopTop: false,
		anchors:['an_intro', 'an_lmdb', 'an_oda', 'an_seuls', 'an_zucco', 'an_r3', 'an_chantiers', 'an_git', 'an_contact'],
			
    });

var menuButton = document.getElementById("burger-check");
var bodyPage = document.getElementById("fullpage");

menuButton.addEventListener('click'), function(){
    bodyPage.classList.add("opacity_menu");
}
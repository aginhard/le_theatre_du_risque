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


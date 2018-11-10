/* Plug-in Fullpage */
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
		anchors:['an_intro', 'an_lmdb', 'an_oda', 'an_seuls', 'an_zucco', 'an_r3', 'an_contact'],
			
    });

/* Menu */
    /* Liens du menu */

    $('#link-accueil').click(function() {

        $.fn.fullpage.moveTo('an_intro');
    });
    $('#link-lmdb').click(function() {

        $.fn.fullpage.moveTo('an_lmdb');
    });
    $('#link-oda').click(function() {

        $.fn.fullpage.moveTo('an_oda');
    });
    $('#link-seuls').click(function() {

        $.fn.fullpage.moveTo('an_seuls');
    });
    $('#link-zucco').click(function() {

        $.fn.fullpage.moveTo('an_zucco');
    });
    $('#link-r3').click(function() {

        $.fn.fullpage.moveTo('an_r3');
    });
    $('#link-contact').click(function() {

        $.fn.fullpage.moveTo('an_contact');
    });

 /* Membres de la cie */

 $(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
      items: 3,
      itemsDesktop:[1000,3],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768, 2],
      itemsMobile:[650, 1],
      pagination: true,
      autoPlay: true
    });
  });
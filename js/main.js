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
		anchors:['an_intro', 'an_proche', 'an_lmdb', 'an_oda', 'an_seuls', 'an_zucco', 'an_r3', 'an_contact'],
			
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



/* Carrousel de news */
/**
 * @Titulo: Slider Responsivo
 * @Autor: Creaticode
 * @URL: http://creaticode.com 
 */
$(function() {
	/** -----------------------------------------
	 * Modulo del Slider 
	 -------------------------------------------*/
	 var SliderModule = (function() {
	 	var pb = {};
	 	pb.el = $('#slider');
	 	pb.items = {
	 		panels: pb.el.find('.slider-wrapper > li'),
	 	}

	 	// Interval del Slider
	 	var SliderInterval,
	 		currentSlider = 0,
	 		nextSlider = 1,
	 		lengthSlider = pb.items.panels.length;

	 	// Constructor del Slider
	 	pb.init = function(settings) {
	 		this.settings = settings || {duration: 8000};
	 		var items = this.items,
	 			lengthPanels = items.panels.length,
	 			output = '';

	 		// Insertamos nuestros botones
	 		for(var i = 0; i < lengthPanels; i++) {
	 			if(i == 0) {
	 				output += '<li class="active"></li>';
	 			} else {
	 				output += '<li></li>';
	 			}
	 		}

	 		$('#control-buttons').html(output);

	 		// Activamos nuestro Slider
	 		activateSlider();
	 		// Eventos para los controles
	 		$('#control-buttons').on('click', 'li', function(e) {
	 			var $this = $(this);
	 			if(!(currentSlider === $this.index())) {
	 				changePanel($this.index());
	 			}
	 		});

	 	}

	 	// Funcion para activar el Slider
	 	var activateSlider = function() {
	 		SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
	 	}

	 	// Funcion para la Animacion
	 	pb.startSlider = function() {
	 		var items = pb.items,
	 			controls = $('#control-buttons li');
	 		// Comprobamos si es el ultimo panel para reiniciar el conteo
	 		if(nextSlider >= lengthSlider) {
	 			nextSlider = 0;
	 			currentSlider = lengthSlider-1;
	 		}

	 		controls.removeClass('active').eq(nextSlider).addClass('active');
	 		items.panels.eq(currentSlider).fadeOut('slow');
	 		items.panels.eq(nextSlider).fadeIn('slow');

	 		// Actualizamos los datos del slider
	 		currentSlider = nextSlider;
	 		nextSlider += 1;
	 	}

	 	// Funcion para Cambiar de Panel con Los Controles
	 	var changePanel = function(id) {
	 		clearInterval(SliderInterval);
	 		var items = pb.items,
	 			controls = $('#control-buttons li');
	 		// Comprobamos si el ID esta disponible entre los paneles
	 		if(id >= lengthSlider) {
	 			id = 0;
	 		} else if(id < 0) {
	 			id = lengthSlider-1;
	 		}

	 		controls.removeClass('active').eq(id).addClass('active');
	 		items.panels.eq(currentSlider).fadeOut('slow');
	 		items.panels.eq(id).fadeIn('slow');

	 		// Volvemos a actualizar los datos del slider
	 		currentSlider = id;
	 		nextSlider = id+1;
	 		// Reactivamos nuestro slider
	 		activateSlider();
	 	}

		return pb;
	 }());

	 SliderModule.init({duration: 4000});

});

/* Liens du slider */

$('#link-news-lmdb').click(function() {

    $.fn.fullpage.moveTo('an_lmdb');
});
$('#link-news-oda').click(function() {

    $.fn.fullpage.moveTo('an_oda');
});
$('#link-news-seuls').click(function() {

    $.fn.fullpage.moveTo('an_seuls');
});
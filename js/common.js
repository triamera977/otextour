 $(document).ready(function (){ 

  if(topS =='none'){//Делаем проверку 
  $('#topS').remove();//И закрываем блок если куки есть 
  } 
  $('.i-clos').click(function() {//При клике на id кнопки закрытия 
  $('#topS').slideUp(1000);//Закрываем сам id блока 
  $.cookie('topS', 'none', { expires: 7});//И создаём куку 
  }); 


});

$(function() {


	$('ul.sf-menu').superfish({
			delay:       100,                            // one second delay on mouseout
			animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
			speed:       'fast',    
			cssArrows:     false,                      // faster animation speed
			autoArrows:  false                            // disable generation of arrow mark-up
		});


	$('.owl-carousel').owlCarousel({
		loop:true,
		// autoHeight: true,
		autoWidth:true,
		// responsiveClass: true,		
		margin:10,
		autoplay:true,
		autoplayTimeout:4000,	
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	});



	$('nav#menu-top').mmenu({
		navbar 		: {
			title		: 'Меню'
		},
		"extensions": [
		"pagedim-black"
		]
	});







	/* Обрезаем текст ссылки	 */
	
	String.prototype.limit = function( limit, userParams) {
		var text = this,
		options = {
          ending: '...', // что дописать после обрыва. HTML символ многоточия: &hellip; 
           trim: true,     // обрезать пробелы в начале/конце?
          words: true    // уважать ли целостность слов? 
        },
        prop,
        lastSpace,
        processed = false ;

    //  проверить limit, без него целого положительного никак
    if( limit !== parseInt(limit)  ||  limit <= 0) return this;
    
    // применить userParams
    if( typeof userParams == 'object') {
    	for (prop in userParams) {
    		if (userParams.hasOwnProperty.call(userParams, prop)) {
    			options[prop] = userParams[prop];
    		}
    	}
    }
    
    // убрать пробелы в начале /конце
    if( options.trim) text = text.trim();

    if( text.length <= limit) return text;    // по длине вписываемся и так
    
    text = text.slice( 0, limit); // тупо отрезать по лимиту
    lastSpace = text.lastIndexOf(" ");
    if( options.words  &&  lastSpace > 0) {  // урезать ещё до границы целого слова
    	text = text.substr(0, lastSpace);
    }
    return text + options.ending;
  }


  function test(t){$(".file a").text(t+'doc')};

  test( $(".file a").text().limit( 4));



});

jQuery(document).ready(function () {

	jQuery('#cssmenu ul li.has-sub > a').on('click', function(){
		$(this).removeAttr('href');
		var element = jQuery(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});

	jQuery('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');

});
jQuery(document).ready(function( $ ) {


  $('.burger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $('.col-mnu__wrap').toggleClass('open');
    $('.overlay').fadeIn();
  });

  $('.overlay, .mnu-close').click(function () {  
    $('.burger').removeClass('open');
    $('.col-mnu__wrap').removeClass('open');
    $('.overlay').fadeOut();
  });











/************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
e.preventDefault();  
$('body').toggleClass('active');
let pg = parseInt(document.location.pathname.match(/\d+/));
$('body.active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

});*/

/************************************/



  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });

  }

  popup('.link2', '.modal-overlay_2', '.modal-close_2');
  popup('.link', '.modal-overlay_1', '.modal-close_1');


  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 0}, 1100);
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    }
    else {
      $('.serv-arr-up').hide();
    }
  });

  if($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
    });
  }






  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,   
    fade: true,
    responsive: [

    {
      breakpoint: 768,
      settings: {
        asNavFor: '.slider-nav',
      }
    }
    ]
  });
  $('.slider-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    responsive: [

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        centerMode: true,
        arrows: false
      }
    },
     {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        arrows: false
      }
    },
    {
      breakpoint: 510,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        arrows: false
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 4,
        centerMode: true,
        arrows: false,
        variableWidth: true
      }
    },
    ]
  });

  


  $('.slider-nav .slick-slide[data-slick-index="0"]').addClass('act');

  $('.slider-nav .slick-slide').on('click', function (event) {
    $('.slider-nav .slick-slide').removeClass('act');
    $(this).addClass('act');
    $('.slider-for').slick('slickGoTo', $(this).data('slickIndex'));
  });




  function news_row_slick() {
    if( $(window).width() < 768 ) {
     $('.news__row').slick({
      slidesToShow: 3,
      slidesToScroll: 1,    
      dots: false,
      arrows: false,
      centerMode: true,
      variableWidth: true
    });
   }  
 }

 news_row_slick()

 $(window).resize(function() {
  news_row_slick();  
});


 $(function(){
  $(".calc_init").mortgageCalculator({

// ?????????????????? ???????????????? (??????.)
flatPriceSlider          :     '.apartment_price-slider', // ??????????????
flatPriceInput           :     '.apartment_price-input',  // ?????????? ????????????????
flatPriceMin             :     500000,  // ????
flatPriceMax             :     20000000, // ????

// ???????????????????????????? ?????????? (??????.)
firstPaymentSlider      :     '.first_payment-slider', // ??????????????
firstPaymentInput       :     '.first_payment-input',  // ?????????? ????????????????
firstPaymentMin         :     0,        // ????
firstPaymentMax         :     15000000, // ????
firstPaymentCurrent     :     7000000,        // ???????????????? ???? ??????????????????

// ?????????? ?????????????? (??????.)
credSumSlider           :     '.credit_sum-slider', // ??????????????
credSumInput            :     '.credit_sum-input', // ?????????? ????????????????
credSumCheckbox         :     '.credit_sum-checkbox',  // ?????????????????????????? (checkbox)
credSumMin              :     1000000,  // ????
credSumMax              :     15000000, // ????
credSumCurrent          :     8000000,  // ???????????????? ???? ??????????????????

// ???????? ?????????????? (??????.)
credDurationSlider      :     '.credit_duration-slider',   // ??????????????
credDurationInput       :     '.credit_duration-input',    // ?????????? ????????????????
credDurationCheckbox    :     '.credit_duration-checkbox', // ?????????????????????????? (checkbox)
credDurationMin         :     1,   // ????
credDurationMax         :     60, // ????
credDurationCurrent     :     17,  // ???????????????? ???? ??????????????????

// ???????????? (%)
credRateSlider          :     '.credit_rate-slider', // ??????????????
credRateInput           :     '.credit_rate-input',  // ?????????? ????????????????
credRateMin             :     1,  // ????
credRateMax             :     5, // ????
credRateCurrent         :     5, // ???????????????? ???? ??????????????????

// ?????????????????????? ???????????? (??????.)
monthPaymentSlider      :     '.monthly_payment-slider',   // ??????????????
monthPaymentInput       :     '.monthly_payment-input',    // ?????????? ????????????????
monthPaymentCheckbox    :     '.monthly_payment-checkbox', // ?????????????????????????? (checkbox)
monthPaymentMin         :     5000,   // ????
monthPaymentMax         :     1000000 // ????
});
});








 $('.credit_sum-input').next('.div-control').find('.div-control-value').html($('.credit_sum-input').val());
 $('.monthly_payment-input').next('.div-control').find('.div-control-value').html($('.monthly_payment-input').val());




 function inputCalcValueToDiv(controlElem, InputElem) {        
  $(InputElem).next('.div-control').find('.div-control-value').html($(InputElem).val());
  if ($(controlElem)) {
    $(controlElem).mouseup(function () {
      $(InputElem).next('.div-control').find('.div-control-value').html($(InputElem).val());
      $('.div-control').show();


      $('.credit_sum-input').next('.div-control').find('.div-control-value').html($('.credit_sum-input').val());
      $('.monthly_payment-input').next('.div-control').find('.div-control-value').html($('.monthly_payment-input').val());

    });
  }
}



inputCalcValueToDiv('.first_payment-slider', '.first_payment-input');
inputCalcValueToDiv('.credit_duration-slider', '.credit_duration-input');
inputCalcValueToDiv('.credit_rate-slider', '.credit_rate-input');
inputCalcValueToDiv('.apartment_price-slider', '.apartment_price-input');

/*inputCalcValueToDiv('', '.credit_sum-input');
inputCalcValueToDiv('', '.monthly_payment-input');*/





/*$('.div-control').click(function () {
$(this).hide();
});*/

$('body').keydown(function (e) {
  $('.form-control').each(function () {
    self = $(this);
    if (e.keyCode == 13) {
      console.log(self);

    }
  });
});



$('.accordion-header').toggleClass('inactive-header');
var contentwidth = $('.accordion-header').width();
$('.accordion-content').css({'width' : contentwidth }); $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
$('.accordion-content').first().slideDown().toggleClass('open-content');
$('.accordion-header').click(function () {
  if($(this).is('.inactive-header')) {
    $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
    $(this).toggleClass('active-header').toggleClass('inactive-header');
    $(this).next().slideToggle().toggleClass('open-content');
  }

  else {
    $(this).toggleClass('active-header').toggleClass('inactive-header');
    $(this).next().slideToggle().toggleClass('open-content');
  }
});

return false;



}); //ready


jQuery(document).ready(function( $ ) {


 $('.burger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $('.col-mnu__wrap').toggleClass('open');
    $('.overlay').fadeIn();
  });

  $('.overlay, .mnu-close').click(function () {    
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
   fade: true
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

  ]
 });


  $('.slider-nav .slick-slide[data-slick-index="0"]').addClass('act');

  $('.slider-nav .slick-slide').on('click', function (event) {
    $('.slider-nav .slick-slide').removeClass('act');
    $(this).addClass('act');
    $('.slider-for').slick('slickGoTo', $(this).data('slickIndex'));
  });

  





  $(function(){
    $(".calc_init").mortgageCalculator({

    // Стоимость квартиры (руб.)
    flatPriceSlider          :     '.apartment_price-slider', // Слайдер
    flatPriceInput           :     '.apartment_price-input',  // Вывод значения
    flatPriceMin             :     500000,  // От
    flatPriceMax             :     20000000, // До

    // Первоначальный взнос (руб.)
    firstPaymentSlider      :     '.first_payment-slider', // Слайдер
    firstPaymentInput       :     '.first_payment-input',  // Вывод значения
    firstPaymentMin         :     0,        // От
    firstPaymentMax         :     15000000, // До
    firstPaymentCurrent     :     7000000,        // Значение по умолчанию

    // Сумма кредита (руб.)
    credSumSlider           :     '.credit_sum-slider', // Слайдер
    credSumInput            :     '.credit_sum-input', // Вывод значения
    credSumCheckbox         :     '.credit_sum-checkbox',  // Переключатель (checkbox)
    credSumMin              :     1000000,  // От
    credSumMax              :     15000000, // До
    credSumCurrent          :     8000000,  // Значение по умолчанию

    // Срок кредита (мес.)
    credDurationSlider      :     '.credit_duration-slider',   // Слайдер
    credDurationInput       :     '.credit_duration-input',    // Вывод значения
    credDurationCheckbox    :     '.credit_duration-checkbox', // Переключатель (checkbox)
    credDurationMin         :     1,   // От
    credDurationMax         :     60, // До
    credDurationCurrent     :     17,  // Значение по умолчанию

    // Ставка (%)
    credRateSlider          :     '.credit_rate-slider', // Слайдер
    credRateInput           :     '.credit_rate-input',  // Вывод значения
    credRateMin             :     1,  // От
    credRateMax             :     5, // До
    credRateCurrent         :     5, // Значение по умолчанию

    // Ежемесячный платеж (руб.)
    monthPaymentSlider      :     '.monthly_payment-slider',   // Слайдер
    monthPaymentInput       :     '.monthly_payment-input',    // Вывод значения
    monthPaymentCheckbox    :     '.monthly_payment-checkbox', // Переключатель (checkbox)
    monthPaymentMin         :     5000,   // От
    monthPaymentMax         :     1000000 // До
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
    })

    
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


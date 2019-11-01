$(document).ready(function(){
  $('.carousel_inner').slick({
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 8000,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/right.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/left.png"></button>', 
  });


  //tabs
  $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
    $(this)
      .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
      .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
  });


  //modal 
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal_close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });


  //при нажатии на кнопку получаем текст с subtitle
  $('.catalog_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal_descr').text($('.catalog_subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });


  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      date: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");


      $('form').trigger('reset');
    });

    return false;
  });
});
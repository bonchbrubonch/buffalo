$(function () {

  $(".header__menu-btn").on("click", function () {
    $(".header__menu-btn").toggleClass("active");
    $(".header__menu").toggleClass("open");
    $("body").toggleClass("lock");
  });

  if ($(window).width() <= 1000) {
    $(".header__item-child span").on("click", function () {
      $(".header__submenu").toggleClass("open");
      $(".header__item-child").toggleClass("open");
    });
  }


  $('.choice__inner').each(function () {
    let ths = $(this);
    ths.find('.choice__item').not(':first').hide();
    ths.find('.choice__btn').click(function () {
      ths.find('.choice__btn').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.choice__item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  $(".footer__hide-list").on("click", function () {
    $(this).toggleClass("show");
    // $(this).toggleClass("active");
  });

});
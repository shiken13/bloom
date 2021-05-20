
// functionを入れることで、html→css→jqueryの順番で読み込ませる
$(function(){

  // 自動スライド
  $('#rec-slick').slick({
    autoplay:true,
    infinite: true,
    // autoplaySpeed: 1000,
    arrows:false,
    // 左右の見切れ部分の幅
    centerPadding:'0px',
    centerMode:true,

    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 5000,
    /* ～ここまで */
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding:'0px',
          centerMode:true,
        }
      }
    ]
  });
});

// staff
$(function(){

  // 自動スライド
  $('#staff-slick').slick({

    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    // dotsClass: 'slick-dots2',
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          // slidesToShow: 5,
          // slidesToScroll: 1,
          // infinite: true,
          // centerPadding:'0',
          // centerMode:true,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding:'0px',
          centerMode:true,
        }
      }
    ]
  });
});








//ハンバーガーメニュー
$(function(){
  $('.nav-btn').on('click', function(){
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
  });
});


//アコーディオン機能
$(function(){
  $('.js-accordion').on('click', function(){
    $(this).toggleClass('-active');
    $(this).next().slideToggle();
  });
});

//wow機能
$(function(){
  new WOW().init();
});


// topへ移動
$(function() {
  var pagetop = $('#page_top');   
pagetop.hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {  //100pxスクロールしたら表示
        pagetop.fadeIn();
    } else {
        pagetop.fadeOut();
    }
});
pagetop.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500); //0.5秒かけてトップへ移動
    return false;
});





});





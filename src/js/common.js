$(document).ready(function () {

  $("a[href='#test-form-rent']").click(function (e) {
    e.preventDefault();
    $("#order-product").text($(this).find(".rent__name").text());
    $("#order").text($(this).find(".rent__name").text());
  });


  $(".mobile__btn").click(function (e) {
    e.preventDefault();
    $(".nav__wrapper").toggleClass("active");
    $(this).children().toggleClass("fa-bars fa-times");
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });


  $(".benefits-1").knob();
  $(".benefits-2").knob();
  $(".benefits-3").knob();
  $(".benefits-4").knob();

});

let benefits1 = $(".benefits-1");
let benefits2 = $(".benefits-2");
let benefits3 = $(".benefits-3");
let benefits4 = $(".benefits-4");
var show = true;
var countbox = ".benefits";
$(window).on("scroll load resize", function () {
  if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
  var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
  var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
  var w_height = $(window).height(); // Высота окна браузера
  var d_height = $(document).height(); // Высота всего документа
  var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
  if (w_top + 750 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {

    
    $({ animatedVal: 0 }).animate({ animatedVal: 540 }, {
      duration: 2000,
      easing: "swing",
      step: function () {
        $(benefits1).val(Math.ceil(this.animatedVal)).trigger("change");
      }
    });
    $({ animatedVal: 0 }).animate({ animatedVal: 7200 }, {
      duration: 2000,
      easing: "swing",
      step: function () {
        $(benefits2).val(Math.ceil(this.animatedVal)).trigger("change");
      }
    });
    $({ animatedVal: 0 }).animate({ animatedVal: 19 }, {
      duration: 2000,
      easing: "swing",
      step: function () {
        $(benefits3).val(Math.ceil(this.animatedVal)).trigger("change");
      }
    });
    $({ animatedVal: 0 }).animate({ animatedVal: 8 }, {
      duration: 2000,
      easing: "swing",
      step: function () {
        $(benefits4).val(Math.ceil(this.animatedVal)).trigger("change");
      }
    });

    show = false;
  }
});



function AjaxFormRequest(result_id, formMain, url) {
  jQuery.ajax({
    url: url,
    type: "POST",
    dataType: "html",
    data: jQuery("#" + formMain).serialize(),
    success: function (response) {
      $(':input', '#' + formMain)
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
      setTimeout(() => {
        $("#message").hide();
      }, 5000);
    },
    error: function (response) {
      var par = document.getElementById(result_id);
      var error = document.createElement('p');
      error.classList.add("mt-3", "result");
      error.innerHTML = "Возникла ошибка при отправке формы.";
      par.appendChild(error);
      setTimeout(func, 700);
    }
  });
}

function func() {
  $("p.mt-3").detach();
}


$("#test-form-rent").submit(function (e) {
  e.preventDefault();
  AjaxFormRequest('form__rent__btn__wrap', 'test-form-rent', './order.php');
});

$("#subscribe").submit(function (e) {
  e.preventDefault();
  AjaxFormRequest('result', 'subscribe', './subscribe.php');
});

$("#feedback").submit(function (e) {
  e.preventDefault();
  AjaxFormRequest('feedback__btn__wrap', 'feedback', './feedback.php');
});
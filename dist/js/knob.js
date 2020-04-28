$(document).ready(function () {
  
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
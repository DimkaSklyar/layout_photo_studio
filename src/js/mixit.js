$(document).ready(function () {

  let count = 8;
  if ($(window).width() < 700) {
    count = 6;
  }
  var mixer = mixitup(".rent__items", {
    pagination: {

      limit: count // impose a limit of 8 targets per page
    }
  });

});
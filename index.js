'use strict';
/* global $ */




function cubbieListener() {
  $('.cubbie').click(function (event) {
    event.stopPropagation();
    if ($('.found')) {
      $('.found').removeClass('found');
    }
    $(this).next('div').toggleClass('found');
  });
}



function closeModal() {


  $('html').click(function () {
    if (!$(this).closest('.found').length) {
      $('.found').removeClass('found');
    }
  });


  $('.content').click(function (e) {
    e.stopPropagation();
  });


  $('.close').click(function () {
    $(this).closest('.found').removeClass('found');
  });

}



$(() => {
  cubbieListener();
  closeModal();
});
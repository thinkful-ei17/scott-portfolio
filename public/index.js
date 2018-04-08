'use strict';
/* global $ */




function cubbieListener(){
  $('.cubbie').click(function () {
    if($('.found')){
      $('.found').removeClass('found');
    }  
    $(this).next('div').toggleClass('found');
  });
}



function closeModal(){
  $('.close').click(function () {
    $(this).closest('.found').removeClass('found');
  })
}


$(() => {
  cubbieListener();
  closeModal();
});
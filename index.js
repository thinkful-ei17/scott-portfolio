'use strict';
/* global $ */





function cubbieListener(){
  $('.cubbie').click(function () {
    console.log('this was clicked', this);
    $(this).toggleClass('detail-view');
  });
}





$(() => {
  cubbieListener();
});
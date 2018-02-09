'use strict';
/* global $ */





function cubbieListener(){
  $('.cubbie').click(function () {
    console.log('this was clicked', this);
    $(this).toggleClass('detail-view');
    console.log('hidden div:', $(this).next('div'));
    $(this).find('div').toggleClass('hidden');
    // $('this > div').
  });
}





$(() => {
  cubbieListener();
});
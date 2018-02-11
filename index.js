'use strict';
/* global $ */





function cubbieListener(){
  $('.cubbie').click(function () {
    if($('.found')){
      $('.found').removeClass('found');
    }  
    // console.log('this was clicked', this);
    // $(this).toggleClass('detail-view');
    // console.log('hidden div:', $(this).next('div'));
    $(this).next('div').toggleClass('found');
  });
}

function contentListener(){
  $('.content').click(function(){
    console.log('found was clicked at:', this);
    $(this).toggleClass('found');
  });
}





$(() => {
  cubbieListener();
  contentListener();
});
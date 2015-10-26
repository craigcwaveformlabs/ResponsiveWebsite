$( document ).ready(function() {

  smoothScroll(1000);
  workBelt();
  workLoad();

});





// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }


  });
} // end of smoothScroll


function workBelt() {

  $('.thumb-unit').on('click', function() {
    $('.work-belt').css('left','-100%');
    $('.work-container').show();
  });

  $('.work-return').click(function() {
    $('.work-belt').css('left','0%');
    $('.work-container').hide(400);
  });
} // end of workBelt


function workLoad() {

  // set cache to TRUE when ready to release
  $.ajaxSetup({ cache: false });

  $('.thumb-unit').click(function() {

    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newFolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/' + newFolder + '.html';
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);

  });
} // end of workLoad

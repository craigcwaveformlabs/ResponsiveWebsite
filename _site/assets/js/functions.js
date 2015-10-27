$( document ).ready(function() {

  smoothScroll(1000);
  workBelt();
  workLoad();

  clientStuff();

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


function clientStuff() {

  $('.client-unit').first().addClass('active-client');
  $('.client-logo').first().addClass('active-client');

  //click on a client logo
  $('.client-logo').on('click', function() {
    var $this = $(this),
        //list all of the icons in the group
        $siblings = $this.parent().children(),
        // caputure the index of the clicked item
        position = $siblings.index($this);
    // remove all active class, and then add active for clicked item
    $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
    // highlight active item
    $siblings.removeClass('active-client').eq(position).addClass('active-client');
  });

  // click on the next or prev button
  $('.client-control-next, .client-control-prev').on('click', function() {
    var $this = $(this),
        // find the active unit
        curActiveClient = $('.clients-belt').find('.active-client'),
        // find the position of the active
        position = $('.clients-belt').children().index(curActiveClient),
        // read total number of clients
        clientNum = $('.client-unit').length;
        // check which button has been pressed
        if($this.hasClass('client-control-next')) {
          // next button clicked
          if(position < clientNum - 1) {
          $('.active-client').removeClass('active-client').next().addClass('active-client');
          }
          else {
            $('.client-unit').removeClass('active-client').first().addClass('active-client');
            $('.client-logo').removeClass('active-client').first().addClass('active-client');
          }
        } else {
          // prev button clicked
          if(position === 0) {
            $('.client-unit').removeClass('active-client').last().addClass('active-client');
            $('.client-logo').removeClass('active-client').last().addClass('active-client');
          }
          else {
            $('.active-client').removeClass('active-client').prev().addClass('active-client');
          }
        }



  });


} // end of clientStuff

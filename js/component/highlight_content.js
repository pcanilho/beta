$(document).ready(function() {      
  var window_height = $(window).height();
  $(window).scroll(function() {
    var scrollMiddle = $(window).scrollTop() + (window_height/2);
    $('.career').each(function() {
      elTop = $(this).offset().top + window_height / 3;
      elBtm = elTop + $(this).height() ;
      if (elTop < scrollMiddle && elBtm > scrollMiddle) {
        $(this).css('opacity',"1");
      } else {
        $(this).css('opacity',"0.7");
      }
    });
  });
});
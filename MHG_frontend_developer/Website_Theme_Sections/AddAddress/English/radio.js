$(document).ready(function() {
    $('input[type="radio"]').click(function() {
      if($(this).attr('id') == 'map') {
        $('.map-content').show();
        $('.manually-content').hide();
      }
  
      else if($(this).attr('id') == 'manually') {
        $('.map-content').hide();
        $('.manually-content').show();
      }
    });
  });
$(document).ready(function() {
    var $input = $('#validationCustom03');
    var $svg = $('#card-svg');
  
    $input.on('input', function() {
      if ($input.val().trim() === '') {
        $svg.show();
      } else {
        $svg.hide();
      }
    });
  });
  
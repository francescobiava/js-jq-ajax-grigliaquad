$(document).ready(function () {

  colorBox();

});

// FUNCTIONS
// funzione chiamata ajax per numero random e cambio sfondo in base al numero
function colorBox() {
  $('.box').click(function() {
    var target = $(this);
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function(data) {
        var num = data.response;
        if (num <= 5) {
          target.addClass('yellow');
        } else {
          target.addClass('green');
        }
      },
      error: function(error) {
        console.log('ERROREEEEEE');
      }
    });
    target.off('click');
  });
}

/*
https://flynn.boolean.careers/exercises/api/random/int
*/
$(document).ready( function() {
  // your code here

  $('.instrument').on('click', 'button', function(event) {
    var keys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
    for (var key of keys) {
      if ($(this).html() == key) {
        var note = document.getElementById(key + "Audio");
        note.load();
        note.play();
      }
    }
 });



$('body').keydown(function(event){
  var keys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  for (var key of keys) {
    if (event.key == key) {
      var note = document.getElementById(key + "Audio");
      note.load();
      note.play();
    }
  }
});

});
 //   if (event.key == ) {
 //     alert("hey you got an a!");
 //   }
 // });

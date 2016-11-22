$(document).ready( function() {
  // your code here

  $('.instrument').on('click', 'button', function(event) {
    var keys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
    for (var key of keys) {
      play($(this).html(), key);
    }
 });


$('body').keydown(function(event){
  var keys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  for (var key of keys) {
    play(event.key, key);
  }
});


var play = function(keyMatch, key) {
  if (keyMatch == key) {
    var note = document.getElementById(key + "Audio");
    note.load();
    note.play();
  }
}


});

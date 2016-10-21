$(document).ready(function() {

  var classes = [
    $('.heading'),
    $('.content'),
    $('.tagline'),
    $('.logo'),
    $('.cta')
  ];

  for (var i = 0; i < classes.length; i++) {
    classes[i].delay(i*1000).fadeIn('slow');
  }

});

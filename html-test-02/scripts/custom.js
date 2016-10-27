$(document).ready(function() {

  function nextLayer() {
    var next = $('.current').next('.hide');
    next.removeClass('hide')
        .addClass('current')
        .prev('.current')
        .removeClass('current')
        .addClass('hide');
  }

  function prevLayer() {
    var prev = $('.current').prev('.hide');
    prev.removeClass('hide')
        .addClass('current')
        .next('.current')
        .removeClass('current')
        .addClass('hide');
  }

  function tiltNavListener(event) {
    var gamma = Math.round(event.gamma);

    if (gamma === 15) {
      nextLayer().fadeIn('slow');
    } else if (gamma === -15) {
      prevLayer();
    }

    $('#test').html(gamma);
  }

  function imgSwapListener() {
    if (window.matchMedia("(orientation: portrait)").matches) {
      var portLeftImgURL = $('.current .tilt-left img').attr('src').replace('landscape', 'portrait');
      var portRightImgURL = $('.current .tilt-right img').attr('src').replace('landscape', 'portrait');
      $('.current .tilt-left img').attr('src', portLeftImgURL);
      $('.current .tilt-right img').attr('src', portRightImgURL);
    } else if (window.matchMedia("(orientation: landscape)").matches) {
      var landLeftImgURL = $('.current .tilt-left img').attr('src').replace('portrait', 'landscape');
      var landRightImgURL = $('.current .tilt-right img').attr('src').replace('portrait', 'landscape');
      $('.current .tilt-left img').attr('src', landLeftImgURL);
      $('.current .tilt-right img').attr('src', landRightImgURL);
    }
  }

  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", tiltNavListener);
    window.addEventListener("deviceorientation", imgSwapListener);
  } else {
    alert("Sorry, your browser doesn't support Device Orientation");
  }

});

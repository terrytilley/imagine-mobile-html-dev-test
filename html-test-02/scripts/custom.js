$(document).ready(function() {

  function nextLayer() {
    var currentLayer = $('#layers > .current');
    if (currentLayer.next().length > 0) {
      currentLayer.next().addClass('current');
      currentLayer.removeClass('current');
    } else {
      $('#layers > div:first').addClass('current');
      currentLayer.removeClass('current');
    }
  }

  function prevLayer() {
    var currentLayer = $('#layers > .current');
    if (currentLayer.prev().length > 0) {
      currentLayer.prev().addClass('current');
      currentLayer.removeClass('current');
    } else {
      $('#layers > div:last').addClass('current');
      currentLayer.removeClass('current');
    }
  }

  function tiltNavListener(event) {
    var gamma = Math.round(event.gamma);

    if (gamma === 15) {
      nextLayer();
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

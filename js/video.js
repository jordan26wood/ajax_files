var video ={
  //variables at the top
      videoPlayer : document.querySelector('video'),
      vidThumb : document.querySelectorAll('.video-thumb'),
      volumeIndicator : document.querySelector('.vol-indicator'),

      init() {
            console.log('video module added');
      }
}

video.init();

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }
  
player.setCurrentTime(localStorage.getItem ('videoplayer-current-time(|)')||0);

  /*import Player from '@vimeo/player';
  import throttle from 'lodash.throttle';
  
  const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
  
  const iframe = document.querySelector('iframe');
  const player = new Player(iframe);
  
  let time = localStorage.getItem(LOCAL_STORAGE_KEY);
      if(time != null) {
      player.setCurrentTime(time);
  }
  
  player.on('timeupdate', throttle(saveTimePlayer),1000);
  
  
  function saveTimePlayer () {
      player.getCurrentTime().then(function(seconds) {
          localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
      });
  }*/
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

player.setCurrentTime(localStorage.getItem ('setCurrentTime(|)')|| 0 );
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));


function onPlay({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }
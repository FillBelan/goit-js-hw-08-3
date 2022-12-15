import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// import '@vimeo/player/dist/player.js';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const durationTime = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

const dataTime = localStorage.getItem('videoplayer-current-time');
// console.log(dataTime);

player.on('timeupdate', throttle(durationTime, 1000));

player
  .setCurrentTime(dataTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });


import Player from '@vimeo/player';
// import '@vimeo/player/dist/player.js';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const durationTime = _.throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

const dataTime = localStorage.getItem('videoplayer-current-time');
// console.log(dataTime);

player.on('timeupdate', durationTime);

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

  const check = _.add(2, 3);

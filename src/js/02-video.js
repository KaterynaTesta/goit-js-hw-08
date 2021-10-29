import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const STORAGE_KEY = 'videoplayer-current-time';
const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function (time) {
  time = localStorage.getItem(STORAGE_KEY);
});
player.on('timeupdate', throttle(onPlay, 1000));

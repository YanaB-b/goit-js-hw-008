import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';


videoTimer();

const setPlayer = throttle(function (iframe) {
    localStorage.setItem(STORAGE_KEY, `${iframe.seconds}` );
}, 1000);


player.on('timeupdate', setPlayer);
    
function videoTimer(){
    const timerStorage = localStorage.getItem(STORAGE_KEY);
    if (timerStorage){
        player.setCurrentTime(localStorage.getItem(STORAGE_KEY));

    }
}

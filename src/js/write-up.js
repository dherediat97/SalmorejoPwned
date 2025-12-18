const MUSIC_URL = '/src/json/music.json';

const writeUpParams = document.location.hash.substring(1).split("#");
const ctfNameElement = document.querySelector('.ctfName');

ctfNameElement.textContent = writeUpParams[0].charAt(0).toUpperCase() + writeUpParams[0].slice(1);

const writeUpDiv = document.getElementById('writeUp');

const player = AsciinemaPlayer.create(`assets/${writeUpParams[0]}.cast`, writeUpDiv, {
    speed: 3,
    audioUrl: writeUpParams[1]=="music" ? `assets/music/track1.mp3` : null,
    idleTimeLimit: 10,
});

if(writeUpParams[1]=="music"){
    const musicRightsDiv = document.querySelector('.musicRights');

    fetch(MUSIC_URL).then(response => response.json()).then((response) => {
        const trackInfo = response.tracks[0].description;
        musicRightsDiv.textContent = trackInfo;
    });
}
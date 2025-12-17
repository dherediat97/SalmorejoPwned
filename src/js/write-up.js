const CONFIG_URL = 'src/config.json';


const writeUpSelected = document.location.hash.substring(1);

const ctfNameElement = document.querySelector('.ctfName');

ctfNameElement.textContent = writeUpSelected.charAt(0).toUpperCase() + writeUpSelected.slice(1);

const writeUpDiv = document.getElementById('writeUp');

AsciinemaPlayer.create('assets/' + writeUpSelected + '.cast', writeUpDiv, {
    speed: 3,
    idleTimeLimit: 10,
});
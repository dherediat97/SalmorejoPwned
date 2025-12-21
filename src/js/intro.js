const introDiv = document.getElementById('intro');

const player = AsciinemaPlayer.create('src/assets/intro.cast', introDiv, {
    speed: 1,
    rows: 14,
    controls: false,
    autoPlay: true,
    loop: true,
});

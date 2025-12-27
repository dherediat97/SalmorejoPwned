const introDiv = document.getElementById('intro');

const player = AsciinemaPlayer.create(INTRO_CAST, introDiv, {
    rows: 24,
    controls: false,
    autoPlay: true,
    loop: true,
});

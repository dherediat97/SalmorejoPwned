const writeUpParams = document.location.hash.split('#');
const ctfNameElement = document.querySelector('.ctfName');
const ctfName =
    writeUpParams[1].replace(/_/g, ' ').charAt(0).toUpperCase() +
    writeUpParams[1].replace(/_/g, ' ').slice(1);

ctfNameElement.textContent = ctfName.charAt(0).toUpperCase() + ctfName.slice(1);

const writeUpDiv = document.getElementById('writeUp');
const categoryNavElement = document.querySelector('.category');

const player = AsciinemaPlayer.create(
    `assets/${writeUpParams[1]}.cast`,
    writeUpDiv,
    {
        audioUrl:
            writeUpParams[1] == 'music' ? `assets/music/track1.mp3` : null,
        idleTimeLimit: 10,
        cols: 220,
        rows: 40,
        autoPlay: true,
    }
);

if (writeUpParams[1] == 'music') {
    const musicRightsDiv = document.querySelector('.musicRights');

    fetch(MUSIC_URL)
        .then((response) => response.json())
        .then((response) => {
            const trackInfo = response.tracks[0].description;
            musicRightsDiv.textContent = trackInfo;
        });
}

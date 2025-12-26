const writeUpParams = document.location.hash.substring(1).split('#');
const ctfNameElement = document.querySelector('.ctfName');

const writeUpTitle = encodeURIComponent(writeUpParams[0]);
const writeUpCategory = encodeURIComponent(writeUpParams[1]);
ctfNameElement.textContent = decodeURIComponent(
    writeUpTitle.charAt(0).toUpperCase() + writeUpTitle.slice(1)
);

const ctfCategoryElement = document.querySelector('.category-title');
ctfCategoryElement.textContent =
    writeUpCategory.charAt(0).toUpperCase() + writeUpCategory.slice(1);
const writeUpDiv = document.getElementById('writeUp');
const categoryNavElement = document.querySelector('.category');

const categoryClass = writeUpCategory.toLowerCase();
const player = AsciinemaPlayer.create(
    `assets/${writeUpParams[0]}.cast`,
    writeUpDiv,
    {
        audioUrl:
            writeUpParams[1] == 'music' ? `assets/music/track1.mp3` : null,
        idleTimeLimit: 10,
        cols: 140,
        rows: 24,
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

const writeUpParams = document.location.hash.split('#');
const ctfNameElement = document.querySelector('.ctfName');
const ctfName =
    writeUpParams[1].replace(/_/g, ' ').charAt(0).toUpperCase() +
    writeUpParams[1].replace(/_/g, ' ').slice(1);

ctfNameElement.textContent = ctfName.charAt(0).toUpperCase() + ctfName.slice(1);

const writeUpDiv = document.getElementById('writeUp');
const categoryNavElement = document.querySelector('.category');
AsciinemaPlayer.create(
    `assets/write-ups/${writeUpParams[1]}.cast`,
    writeUpDiv,
    {
        idleTimeLimit: 2,
        controls: true,
        autoPlay: true,
    }
);

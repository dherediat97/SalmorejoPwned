const writeUpParams = document.location.hash.split('#');
const ctfNameElement = document.querySelector('.ctfName');
const ctfName =
    writeUpParams[1].replace(/_/g, ' ').charAt(0).toUpperCase() +
    writeUpParams[1].replace(/_/g, ' ').slice(1);

ctfNameElement.textContent = ctfName.charAt(0).toUpperCase() + ctfName.slice(1);

const writeUpDiv = document.getElementById('writeUp');
const categoryNavElement = document.querySelector('.category');

var md = new MobileDetect(navigator.userAgent);

AsciinemaPlayer.create(
    `assets/write-ups/${writeUpParams[1]}.cast`,
    writeUpDiv,
    {
        rows: md.os() == 'iOS' || md.os() == 'AndroidOS' ? '60' : 20,
        idleTimeLimit: 2,
        controls: true,
        autoPlay: true,
    }
);

const bibliography = document.querySelector('.bibliography-links');

fetch(CONFIG_URL_WRITE_UP)
    .then((response) => {
        return response.json();
    })
    .then((ctfList) => {
        const ctf = ctfList.filter((ctfFound) =>
            ctfFound.writeup_url.includes(writeUpParams[1])
        )[0];
        if (ctf.bibliography_links) {
            for (let i = 0; i < ctf.bibliography_links.length; i++) {
                const link = ctf.bibliography_links[i];
                bibliography.innerHTML += `<a href="${link}">${link}</a><br/>`;
            }
        }
    });

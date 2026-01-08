const writeUpName = document.location.hash.split('#')[1];
const ctfNameElement = document.querySelector('.ctfName');
const ctfName =
    writeUpName.replace(/_/g, ' ').charAt(0).toUpperCase() +
    writeUpName.replace(/_/g, ' ').slice(1);

ctfNameElement.textContent = ctfName.charAt(0).toUpperCase() + ctfName.slice(1);

const writeUpDiv = document.getElementById('writeUp');
const categoryNavElement = document.querySelector('.category');

var md = new MobileDetect(navigator.userAgent);

AsciinemaPlayer.create(`assets/write-ups/${writeUpName}.cast`, writeUpDiv, {
    rows: md.os() == 'iOS' || md.os() == 'AndroidOS' ? '60' : 20,
    idleTimeLimit: 2,
    controls: true,
    autoPlay: true,
});

const bibliography = document.querySelector('.bibliography-links');

fetch(CONFIG_URL_WRITE_UP)
    .then((response) => {
        return response.json();
    })
    .then((ctfList) => {
        const ctf = ctfList.filter((ctfFound) =>
            ctfFound.writeup_url.includes(writeUpName)
        )[0];
        if (ctf.bibliography_links) {
            for (let i = 0; i < ctf.bibliography_links.length; i++) {
                const bibliographyItem = ctf.bibliography_links[i];
                bibliography.innerHTML += `<a href="${bibliographyItem.url}">${bibliographyItem.desc}</a><br/>`;
            }
        }
    });

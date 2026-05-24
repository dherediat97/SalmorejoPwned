const writeUpName = document.location.hash.split('#')[1];
const ctfNameElement = document.querySelector('.ctfName');
const ctfName =
    writeUpName.replace(/_/g, ' ').charAt(0).toUpperCase() +
    writeUpName.replace(/_/g, ' ').slice(1);

ctfNameElement.textContent = ctfName.charAt(0).toUpperCase() + ctfName.slice(1);

const isDev = document.location.hash.split('#')[2];

const writeUpDiv = document.getElementById('writeUp');
const categoryNavElement = document.querySelector('.category');

var md = new MobileDetect(navigator.userAgent);

const bibliography = document.querySelector('.bibliography-links');

fetch(CONFIG_URL_WRITE_UP)
    .then((response) => {
        return response.json();
    })
    .then((ctfList) => {
        const ctf = ctfList.filter((ctfFound) =>
            ctfFound.writeup_url.includes(writeUpName)
        )[0];
        var metaTitle = document.querySelector('meta[property="name"]');
        metaTitle.setAttribute(
            'content',
            `SalmorejoPwned - Write Up of ${ctf.title}`
        );
        var metaTitleOG = document.querySelector('meta[property="og:title"]');
        metaTitleOG.setAttribute(
            'content',
            `SalmorejoPwned - Write Up of ${ctf.title}`
        );
        var metaDescription = document.querySelector(
            'meta[itemprop="description"]'
        );
        metaDescription.setAttribute(
            'content',
            `A resolution of ${ctf.title} challenge, by ${ctf.author}. The ctf was categorized as ${ctf.level} and the write up is about ${ctf.tags.join(', ')}.`
        );
        var metaDescriptionOG = document.querySelector(
            'meta[property="og:description"]'
        );
        metaDescriptionOG.setAttribute(
            'content',
            `A resolution of ${ctf.title} challenge, by ${ctf.author}. The ctf was categorized as ${ctf.level} and the write up is about ${ctf.tags.join(', ')}.`
        );
        var metaImageOG = document.querySelector('meta[property="og:image"]');
        metaImageOG.setAttribute('content', ctf.img_url);
        var metaImage = document.querySelector('meta[itemprop="image"]');
        metaImage.setAttribute('content', ctf.img_url);

        AsciinemaPlayer.create(
            `assets/write-ups/${writeUpName}.cast`,
            writeUpDiv,
            {
                rows: md.os() == 'iOS' || md.os() == 'AndroidOS' ? '60' : 20,
                idleTimeLimit: 2,
                controls: true,
                autoPlay: true,
                speed: ctf.level == 'expert' ? 4 : 1,
            }
        );
        if (ctf.bibliography_links) {
            for (let i = 0; i < ctf.bibliography_links.length; i++) {
                const bibliographyItem = ctf.bibliography_links[i];
                bibliography.innerHTML += `<a href="${bibliographyItem.url}">${bibliographyItem.desc}</a><br/>`;
            }
        }
    });

// Support new path-based URLs like /writeups/el_amigo while keeping
// backward compatibility with old hash-based URLs (#el_amigo).
function getWriteUpName() {
    const pathMatch = document.location.pathname.match(/\/writeups\/(.+)$/);
    if (pathMatch && pathMatch[1]) {
        return decodeURIComponent(pathMatch[1]);
    }
    const hashPart = document.location.hash.split('#')[1];
    return hashPart || '';
}

let writeUpName = getWriteUpName();
// If we used the old hash style, replace the url internally to the new path
// so shared old links still work but users see the new canonical URL.
if (
    document.location.hash &&
    !document.location.pathname.match(/\/writeups\//)
) {
    const newPath = '/writeups/' + encodeURIComponent(writeUpName);
    history.replaceState(null, '', newPath + document.location.search);
}
const ctfNameElement = document.querySelector('.ctfName');
const ctfName =
    writeUpName.replace(/_/g, ' ').charAt(0).toUpperCase() +
    writeUpName.replace(/_/g, ' ').slice(1);

ctfNameElement.textContent = ctfName.charAt(0).toUpperCase() + ctfName.slice(1);

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

        // Add meta tags
        const metaOgImage = document.createElement('meta');
        metaOgImage.setAttribute('property', 'og:image');
        metaOgImage.content = ctf.image || '';
        document.head.appendChild(metaOgImage);

        const metaOgTitle = document.createElement('meta');
        metaOgTitle.setAttribute('property', 'og:title');
        metaOgTitle.content = ctfName;
        document.head.appendChild(metaOgTitle);

        const metaOgDescription = document.createElement('meta');
        metaOgDescription.setAttribute('property', 'og:description');
        metaOgDescription.content = ctf.description || '';
        document.head.appendChild(metaOgDescription);

        const metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.content = ctf.description || '';
        document.head.appendChild(metaDescription);

        AsciinemaPlayer.create(
            `${WRITE_UP_CAST_URL}${writeUpName}.cast`,
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

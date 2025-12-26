function getCtfs() {
    fetch(CONFIG_URL)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            response.forEach((ctf) => {
                const writeUp = {
                    title: ctf.title,
                    author: ctf.author,
                    img_url: ctf.img_url,
                    main_category: ctf.main_category,
                    level: ctf.level,
                    tags: ctf.tags,
                    platform: ctf.platform,
                    url: ctf.writeup_url,
                };
                ctfsAvailable.push(writeUp);
            });
            const groupedCtfs = groupByCategory(ctfsAvailable, CTF_CATEGORIES);

            Object.entries(groupedCtfs).forEach(([category, ctfList]) => {
                const ctfContainer = document.getElementById(
                    `${category}-write-ups`
                );

                if (!ctfList.length) {
                    const notFoundCTF = document.createElement('article');
                    notFoundCTF.id = 'article';
                    notFoundCTF.innerHTML = `<h3 class="no-ctf-title"></h3>`;
                    ctfContainer.appendChild(notFoundCTF);
                    return;
                }
                ctfList.forEach((ctf) => {
                    const writeUpCard = document.createElement('div');
                    writeUpCard.classList.add('ctf-writeup-card');
                    writeUpCard.innerHTML = `
                    <img class="ctf-writeup-img" src="${
                        ctf.img_url
                    }" alt="CTF Image"/>
                    <div class="ctf-details">
                    <div class="ctf-title">${ctf.title}</div>
                    <div class="ctf-level">Dificultad: <span class="ctf-level-${
                        ctf.level
                    }">${ctf.level}</span></div>
                    <div class="ctf-category">Categorías: ${
                        ctf.main_category
                    },${ctf.tags}</div>
                    <div class="ctf-platform">Plataforma: <a href="${
                        ctf.platform
                    }" target="_blank">${getPlatformName(
                        ctf.platform
                    )}</a></div>
                    <div class="ctf-author">Autor: <a href="${getAuthorBlogUrl(
                        ctf.author
                    )}" target="_blank">${ctf.author}</a></div>
                    <div class="ctf-write-up"><a href="${
                        ctf.url
                    }" class="show-write-up-title" target="_self"></a></div> 
                    </div>
                `;
                    ctfContainer.appendChild(writeUpCard);
                });
            });
        });
}

function getPlatformName(platformUrl) {
    const platformNames = {
        'https://www.hackthebox.com/': 'Hack The Box',
        'https://www.tryhackme.com/': 'TryHackMe',
        'https://www.cyberdefenders.org/': 'CyberDefenders',
        'https://labs.thehackerslabs.com/': 'TheHackerLabs',
    };
    return platformNames[platformUrl];
}

function getAuthorBlogUrl(authorName) {
    const authorBlogUrls = {
        Oscar: 'https://oscarai.tech/',
        'condor & CuriosidadesDeHackers': 'https://curiosidadesdehackers.com/',
        'El Pingüino de Mario': 'https://maalfer.github.io/whoami/',
    };
    return authorBlogUrls[authorName] || '#';
}

function groupByCategory(items, categories) {
    const grouped = Object.fromEntries(categories.map((cat) => [cat, []]));

    items.forEach((item) => {
        if (categories.includes(item.main_category)) {
            grouped[item.main_category].push(item);
        }
    });

    return grouped;
}

getCtfs();

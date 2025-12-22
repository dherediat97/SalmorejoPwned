const typeCtf = document.location.hash.substring(1).split('#')[1];
openCtfDetails(typeCtf);

function openCtfDetails(ctfType) {
    if (!ctfType) return;

    const ctfDetails = document.getElementById(`thl-${ctfType}`);
    ctfDetails.open = true;
}

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
                    tags: ctf.tags,
                    platform: ctf.platform,
                    url: ctf.writeup_url,
                };
                ctfsAvailable.push(writeUp);
            });
            const groupedCtfs = groupByCategory(ctfsAvailable, CTF_CATEGORIES);

            Object.entries(groupedCtfs).forEach(([category, ctfList]) => {
                const ctfContainer = document.getElementById(
                    `thl-${category}-write-ups`
                );

                if (!ctfList.length) {
                    const notFoundCTF = document.createElement('article');
                    notFoundCTF.id = 'article';
                    notFoundCTF.innerHTML = `<h3 class="no-ctf-title"></h3>`;
                    ctfContainer.appendChild(notFoundCTF);
                    return;
                }
                ctfList.forEach((ctf) => {
                    const writeUpCard = document.createElement('article');
                    writeUpCard.classList.add('ctf-writeup-card');
                    writeUpCard.innerHTML = `
                    <header class="grid">
                    <div class="ctf-title">${ctf.title}</div>
                    <div class="ctf-level ${ctf.level}"></div>
                    </header>
                    <footer class="ctf-write-up"><a href="${ctf.url}" class="show-write-up-title" target="_self"></a></footer> 
                `;
                    writeUpCard.style.backgroundImage = `url(${ctf.img_url})`;
                    ctfContainer.appendChild(writeUpCard);
                });
            });
        });
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

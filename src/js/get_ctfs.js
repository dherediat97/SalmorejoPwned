const typeCtf = document.location.hash.substring(1).split('#')[1];
openCtfDetails(typeCtf);

function openCtfDetails(ctfType) {
    if (!ctfType) return;

    const ctfDetails = document.getElementById(`${ctfType}-ctfs`);
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

            if (!ctfsAvailable || ctfsAvailable.length === 0) {
                const writeUpCard = document.createElement('article');
                writeUpCard.id = 'article';
                writeUpCard.innerHTML = `
                    <h3 class="no-ctf-title"></h3> 
                `;
                const ctfContainer = document.getElementById(
                    `thl-${ctf.main_category}-write-ups`
                );
                ctfContainer.appendChild(writeUpCard);
                return;
            }

            ctfsAvailable.forEach((ctf) => {
                const ctfContainer = document.getElementById(
                    `thl-${ctf.main_category}-write-ups`
                );
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
}

getCtfs();

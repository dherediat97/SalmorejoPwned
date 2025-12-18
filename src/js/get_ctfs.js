const CONFIG_URL = 'src/json/config.json';

getCtfs();

const typeCtf = document.location.hash.substring(1).split("#")[1];
if(typeCtf == "offensive"){
    const offensiveDetails = document.getElementById("offensive-ctfs");
    offensiveDetails.open = true;
}else if(typeCtf == "android"){
    const androidDetails = document.getElementById("android-ctfs");
    androidDetails.open = true;
}else if(typeCtf == "forense"){
    const forenseDetails = document.getElementById("forense-ctfs");
    forenseDetails.open = true;
}
else if(typeCtf == "reversing"){
    const reversingDetails = document.getElementById("reversing-ctfs");
    reversingDetails.open = true;
}else if(typeCtf == "ia-hacking"){
    const iaHackingDetails = document.getElementById("ia-hacking-ctfs");
    iaHackingDetails.open = true;
}

function getCtfs() {
        fetch(CONFIG_URL).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    if (!data.writeups || data.writeups.length === 0) {
                        return;
                    }
                    const ctfContainer = document.getElementById("hacker-labs-write-ups");
                    data.writeups.forEach((ctf) => {
                        const writeUpCard = document.createElement("article");
                        writeUpCard.classList.add("ctf-writeup-card");
                        writeUpCard.innerHTML = `
                            <header class="grid">
                            <div class="ctf-title">${ctf.title}</div>
                            <div class="ctf-level ${ctf.level}"></div>
                            </header>
                            <footer class="ctf-write-up"><a href="${ctf.url}" target="_self">Ver write-up</a></footer> 
                        `;
                        writeUpCard.style.backgroundImage = `url(${ctf.img_url})`;
                        ctfContainer.appendChild(writeUpCard);
                    });
                });
            }
        });
}
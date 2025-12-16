getCtfs();

function getCtfs() {
    fetch('src/config.json').then((response) => {
        if (response.ok) {
            response.json().then((data) => {
                const ctfContainer = document.getElementById("hacker-labs-write-ups");
                ctfContainer.innerHTML = "";
                data.writeups.forEach((ctf) => {
                    const writeupElement = document.createElement("div");
                    writeupElement.innerHTML = `<article>
                        <header>${ctf.title}</header>

                        <div class="grid">
                            <div>
                                <img src="${ctf.img_url}"
                                    alt="${ctf.title} CTF TheHackerLabs" width="200" height="300">
                            </div>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th scope="col" class="level-title"></th>
                                            <th scope="col" class="categories-title"></th>
                                            <th scope="col" class="creator-title"></th>
                                            <th scope="col" class="write-up-title">Write-Up</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" class="easy-title"></th>
                                            <td>${ctf.categories}</td>
                                            <td>${ctf.author}</td>
                                            <td><a href="${ctf.url}" class="show-write-up-title"></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>
                    `;
                    ctfContainer.appendChild(writeupElement);
                });
            });
        }
    });
}
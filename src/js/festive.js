function isFestiveDate(date) {
    const festiveMonth = date.getMonth();
    const festiveDate = date.getDate();

    return (
        (festiveMonth == 0 && festiveDate <= 6) ||
        (festiveMonth == 11 && festiveDate >= 10 && festiveDate <= 31)
    );
}

const introDiv = document.getElementById('intro');

function setFestiveDecorations() {
    if (isFestiveDate(new Date())) {
        const festive = document.getElementById('festive');
        festive.innerHTML = `<ul class="lightrope">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>`;

        const festiveTitle = document.getElementById('intro-container');
        if (!festiveTitle) return;

        festiveTitle.innerHTML = "<h3 class='festive-title'></h3>";

        var randomNumber = Math.round(Math.random() * 2) + 1;

        AsciinemaPlayer.create(
            FESTIVE_INTRO + randomNumber + '.cast',
            introDiv,
            {
                controls: false,
                idleTimeLimit: 2,
                autoPlay: true,
                loop: true,
            }
        );
    }
}

setFestiveDecorations();

AsciinemaPlayer.create(COMMON_INTRO, introDiv, {
    controls: false,
    idleTimeLimit: 2,
    autoPlay: true,
    loop: true,
});

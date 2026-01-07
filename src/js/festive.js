function isFestiveDate(date) {
    const festiveMonth = date.getMonth();
    const festiveDate = date.getDate();
    console.log(
        (festiveMonth == 0 && festiveDate <= 12) ||
            (festiveMonth == 11 && festiveDate >= 10 && festiveDate <= 31)
    );

    return (
        (festiveMonth == 0 && festiveDate <= 12) ||
        (festiveMonth == 11 && festiveDate >= 10 && festiveDate <= 31)
    );
}

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
    festiveTitle.innerHTML = "<h3 class='festive-title'></h3>";

    const introDiv = document.getElementById('intro');

    var randomNumber = Math.round(Math.random() * 2) + 1;
    console.log(randomNumber);

    AsciinemaPlayer.create(FESTIVE_INTRO + randomNumber + '.cast', introDiv, {
        controls: false,
        idleTimeLimit: 2,
        autoPlay: true,
        loop: true,
    });
}

function isFestiveDate(date) {
    const currentMonth = date.getMonth();
    const currentDate = date.getDate();
    const isFestiveMonth = currentMonth == 0 || currentMonth == 11;
    7;
    const isFestiveDate = currentDate >= 12 || currentDate <= 31;
    return isFestiveMonth && isFestiveDate;
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

    const introDiv = document.getElementById('intro');
    if (introDiv !== null) {
        var randomNumber = Math.round(Math.random() * 3);
        if (randomNumber == 0) {
            randomNumber = 1;
        }
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

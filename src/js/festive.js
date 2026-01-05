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

    AsciinemaPlayer.create(FESTIVE_INTRO, introDiv, {
        rows: 24,
        controls: false,
        autoPlay: true,
        loop: true,
    });
}

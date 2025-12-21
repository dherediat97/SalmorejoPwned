//Get the browser language
const currentLanguage = navigator.language;

//Fetch the language file and set the strings
function changeLanguage(language) {
    const supportedLanguages = ['en-EN', 'es-ES'];
    if (!supportedLanguages.includes(language)) {
        language = 'en-EN';
    }

    fetch(`${I18N_URL}/${language}.json`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            setStrings(response);
        });
}

function setData(response, element) {
    element.forEach((data) => {
        data.textContent = response;
    });
}

//Set the strings in the HTML
function setStrings(translations) {
    //Section Titles
    const defensiveTitle = document.querySelectorAll('.defensive-title');
    const offensiveTitle = document.querySelectorAll('.offensive-title');
    const androidTitle = document.querySelectorAll('.android-title');
    const reversingTitle = document.querySelectorAll('.reversing-title');
    const forenseTitle = document.querySelectorAll('.forensics-title');
    const iahackingTitle = document.querySelectorAll('.ia-hacking-title');

    //CTF Titles
    const levelTitle = document.querySelectorAll('.level-title');
    const categoriesTitle = document.querySelectorAll('.categories-title');
    const creatorTitle = document.querySelector('.creator-title');
    const easyTitle = document.querySelectorAll('.easy-title');
    const mediumTitle = document.querySelectorAll('.medium-title');
    const hardTitle = document.querySelectorAll('.hard-title');

    const showWriteUpTitle = document.querySelectorAll('.show-write-up-title');
    const noCtfTitle = document.querySelectorAll('.no-ctf-title');

    const madeWithTitle = document.querySelectorAll('.made-with-title');
    const byTitle = document.querySelectorAll('.by-title');

    const festiveTitle = document.querySelectorAll('.festive-title');
    console.log(showWriteUpTitle);

    setData(translations.defensive, defensiveTitle);
    setData(translations.offensive, offensiveTitle);
    setData(translations.android, androidTitle);
    setData(translations.reversing, reversingTitle);
    setData(translations.forensics, forenseTitle);
    setData(translations.ia_hacking, iahackingTitle);

    setData(translations.level, levelTitle);
    setData(translations.categories, categoriesTitle);
    setData(translations.easy, easyTitle);
    setData(translations.medium, mediumTitle);
    setData(translations.hard, hardTitle);
    setData(translations.show_write_up, showWriteUpTitle);
    setData(translations.no_ctf, noCtfTitle);

    setData(translations.made_with, madeWithTitle);
    setData(translations.by, byTitle);

    setData(translations.festive, festiveTitle);
}

//Initial language load
setTimeout(() => {
    changeLanguage(currentLanguage);
}, 1);

//Change language on select change
const selectLanguage = document.getElementById('selectLanguage');
selectLanguage.addEventListener('change', (event) => {
    const selectedLanguage =
        event.target.value + '-' + event.target.value.toUpperCase();
    changeLanguage(selectedLanguage);
});

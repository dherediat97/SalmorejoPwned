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
    const osintTitle = document.querySelectorAll('.osint-title');

    //CTF Titles
    const levelTitle = document.querySelectorAll('.level-title');
    const categoriesTitle = document.querySelectorAll('.categories-title');
    const easyTitle = document.querySelectorAll('.ctf-level-easy');
    const advancedTitle = document.querySelectorAll('.ctf-level-advanced');
    const professionalTitle = document.querySelectorAll(
        '.ctf-level-professional'
    );

    const showWriteUpTitle = document.querySelectorAll('.show-write-up-title');
    const noCtfTitle = document.querySelectorAll('.no-ctf-title');

    const madeWithTitle = document.querySelectorAll('.made-with-title');
    const byTitle = document.querySelectorAll('.by-title');

    const festiveTitle = document.querySelectorAll('.festive-title');

    setData(translations.defensive, defensiveTitle);
    setData(translations.offensive, offensiveTitle);
    setData(translations.android, androidTitle);
    setData(translations.reversing, reversingTitle);
    setData(translations.forensics, forenseTitle);
    setData(translations.ia_hacking, iahackingTitle);
    setData(translations.osint, osintTitle);

    setData(translations.level, levelTitle);
    setData(translations.categories, categoriesTitle);
    setData(translations.easy, easyTitle);
    setData(translations.advanced, advancedTitle);
    setData(translations.professional, professionalTitle);
    setData(translations.show_write_up, showWriteUpTitle);
    setData(translations.no_ctf_title, noCtfTitle);

    setData(translations.made_with, madeWithTitle);
    setData(translations.by, byTitle);

    setData(translations.festive, festiveTitle);
}

//Initial language load
changeLanguage(currentLanguage);

//Change language on select change
const selectLanguage = document.getElementById('selectLanguage');
selectLanguage.addEventListener('change', (event) => {
    const selectedLanguage =
        event.target.value + '-' + event.target.value.toUpperCase();
    changeLanguage(selectedLanguage);
});

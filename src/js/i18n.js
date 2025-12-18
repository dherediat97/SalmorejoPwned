//Get the browser language
const currentLanguage = navigator.language;

//Change language on select change
const selectLanguage = document.getElementById("selectLanguage");
selectLanguage.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value+"-"+event.target.value.toUpperCase();
    changeLanguage(selectedLanguage);   
});

//Initial language load
changeLanguage(currentLanguage);

//Fetch the language file and set the strings   
function changeLanguage(language) {
    const supportedLanguages = ["en-EN", "es-ES"];
    if(!supportedLanguages.includes(language)){
        language = "en-EN";
    }
    fetch(!isDevMode?`/i18n/${language}.json`:`CyberWriteUps/i18n/${language}.json`).then((response) => {
        setStrings(response);
    });
}

//Set the strings in the HTML
function setStrings(response) {
    const defensiveTitle = document.querySelectorAll(".defensive-title");
    const offensiveTitle = document.querySelectorAll(".offensive-title");
    const levelTitle = document.querySelectorAll(".level-title");
    const categoriesTitle = document.querySelectorAll(".categories-title");
    const creatorTitle = document.querySelectorAll(".creator-title");
    const easyTitle = document.querySelectorAll(".easy-title");
    const showWriteUpTitle = document.querySelectorAll(".show-write-up-title");
    const noCtfTitle = document.querySelectorAll(".no-ctf-title");

    response.json().then((data) => {
        defensiveTitle.forEach(element => {
            element.textContent = data.defensive;
        });
        offensiveTitle.forEach(element => {
            element.textContent = data.offensive;
        });
        creatorTitle.forEach(element => {
            element.textContent = data.creator;
        });
        levelTitle.forEach(element => {
            element.textContent = data.level;
        });
        categoriesTitle.forEach(element => {
            element.textContent = data.categories;
        });
        easyTitle.forEach(element => {
            element.textContent = data.easy;
        });
        showWriteUpTitle.forEach(element => {
            element.textContent = data.show_write_up;
        });
        noCtfTitle.forEach(element => {
            element.textContent = data.no_ctf_title;
        });
    }); 
}


function isDevMode(){
    return !window.location.href.indexOf("localhost") === -1;
}
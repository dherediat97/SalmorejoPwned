
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
    fetch(`src/i18n/${language}.json`)
        .then((response) => {
            if (response.ok) {
                setStrings(response);
            }
        });
}

//Set the strings in the HTML
function setStrings(response) {
    const defensiveTitle = document.querySelector(".defensive-title");
    const offensiveTitle = document.querySelector(".offensive-title");
    const levelTitle = document.querySelectorAll(".level-title");
    const categoriesTitle = document.querySelectorAll(".categories-title");
    const creatorTitle = document.querySelectorAll(".creator-title");
    const easyTitle = document.querySelectorAll(".easy-title");

    response.json().then((data) => {
        defensiveTitle.textContent = data.defensive;
        offensiveTitle.textContent = data.offensive;
        creatorTitle.textContent = data.creator;
        levelTitle.textContent = data.level;
        categoriesTitle.textContent = data.categories;
        easyTitle.textContent = data.easy;
    }); 
}
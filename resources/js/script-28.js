function changeLanguage() {
    var langSelect = document.getElementById("lang");
    if (langSelect) {
        var selectedLang = langSelect.value;

        localStorage.setItem("language", selectedLang);

        if (selectedLang === "en") {
            document.getElementById("englishText").style.display = "block";
            document.getElementById("spanishText").style.display = "none";
        } else {
            document.getElementById("englishText").style.display = "none";
            document.getElementById("spanishText").style.display = "block";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var savedLang = localStorage.getItem("language");

    if (!savedLang) {
        savedLang = "es";
    }

    var langSelect = document.getElementById("lang");
    if (langSelect) {
        langSelect.value = savedLang;
    }

    if (savedLang === "en") {
        document.getElementById("englishText").style.display = "block";
        document.getElementById("spanishText").style.display = "none";
    } else {
        document.getElementById("englishText").style.display = "none";
        document.getElementById("spanishText").style.display = "block";
    }

    changeLanguage(); 
});

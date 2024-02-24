    function changeLanguage() {
      var langSelect = document.getElementById("lang");
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
    
    var savedLang = localStorage.getItem("language");
    
    if (!savedLang) {
      savedLang = "es";
      localStorage.setItem("language", savedLang);
    }
    
    var langSelect = document.getElementById("lang");
    langSelect.value = savedLang;
    
    changeLanguage();

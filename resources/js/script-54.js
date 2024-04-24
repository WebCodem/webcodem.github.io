document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("p").addEventListener("click", function() {
      document.getElementById("overlay").style.display = "block";
    });
    
    document.getElementById("close").addEventListener("click", function() {
      document.getElementById("overlay").style.display = "none";
    });
  });y 

const themeSelector = document.getElementById('theme');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    body.className = savedTheme;
    themeSelector.value = savedTheme;
} else {
    body.className = 'light';
    localStorage.setItem('theme', 'light');
}

themeSelector.addEventListener('change', function() {
    const selectedTheme = this.value;
    body.className = selectedTheme;
    localStorage.setItem('theme', selectedTheme);
});  

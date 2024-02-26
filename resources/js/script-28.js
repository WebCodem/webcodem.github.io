  const themeSelector = document.getElementById('theme');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        body.className = savedTheme;
        
        themeSelector.value = savedTheme;
    }

    themeSelector.addEventListener('change', function() {
        const selectedTheme = this.value;
        body.className = selectedTheme;
        
        localStorage.setItem('theme', selectedTheme);
    });

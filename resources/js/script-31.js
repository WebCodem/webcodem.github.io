const themeSelect = document.getElementById('themeSelect');

  if (themeSelect) {

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      applyTheme(storedTheme);
      themeSelect.value = storedTheme;
    }

    themeSelect.addEventListener('change', function() {
      const theme = this.value;
      localStorage.setItem('theme', theme);
      applyTheme(theme);
    });
  }

  function applyTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
      body.style.backgroundColor = '#333';
      body.style.color = '#ffffff';
      document.querySelectorAll('.letter').forEach(letter => {
        letter.style.color = '#ffffff'; 
      });
    } else {
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#000000';
      document.querySelectorAll('.letter').forEach(letter => {
        letter.style.color = '#000000'; 
      });
    }
 } 

  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    applyTheme(storedTheme);
  }

  function applyTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
      body.style.backgroundColor = '#333';
      body.style.color = '#ffffff';
      document.querySelectorAll('.letter').forEach(letter => {
        letter.style.color = '#ffffff'; 
      });
    } else {
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#000000';
      document.querySelectorAll('.letter').forEach(letter => {
        letter.style.color = '#000000'; 
      });
    }
  }

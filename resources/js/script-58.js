        function convertToBase64() {
            const inputText = document.getElementById('inputText').value;
            const base64Text = btoa(inputText);
            document.getElementById('result').textContent = base64Text;
        }

        function copyToClipboard() {
            const resultElement = document.getElementById('result');
            const resultText = resultElement.textContent.trim();
            const copyIcon = document.getElementById('copyIcon');
            const checkIcon = document.getElementById('checkIcon');
            const copyText = document.getElementById('copyText');
            
            if (resultText === "") {
                alert("No hay código en Base64 para copiar.");
                return;
            }

            const range = document.createRange();
            range.selectNodeContents(resultElement);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            
            try {
                document.execCommand('copy');
                copyIcon.style.display = 'none';
                checkIcon.style.display = 'inline';
                copyText.textContent = '¡Copiado!';
                setTimeout(function() {
                    copyIcon.style.display = 'inline';
                    checkIcon.style.display = 'none';
                    copyText.textContent = 'Copiar';
                }, 1500);
            } catch (err) {
                alert('Error al copiar el código en base64');
            }
            
            selection.removeAllRanges();
        }

        const textarea = document.getElementById('inputText');
        const container = document.querySelector('.container');

        textarea.addEventListener('focus', () => {
        textarea.style.height = '150px'; 
        });

        textarea.addEventListener('blur', () => {
        textarea.style.height = '80px';  
        });

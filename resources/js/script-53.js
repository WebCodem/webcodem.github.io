    let selectedBlock = ""; 
 
    document.querySelectorAll('.block-image').forEach(image => {
      image.addEventListener('click', () => {
        if (image.id === 'delete-block') {
          selectedBlock = null; 
        } else {
          selectedBlock = image.src;
        }
      });
    });

    const container = document.getElementById('container');
    const numBlocks = 10;

    for (let i = 0; i < numBlocks * numBlocks; i++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.style.backgroundImage = `url(${selectedBlock})`;

      block.addEventListener('click', () => {
        if (selectedBlock === null) {
          block.style.backgroundImage = '';
        } else {
          block.style.backgroundImage = `url(${selectedBlock})`;
        }
      });

      container.appendChild(block);
    }

    document.getElementById('save-button').addEventListener('click', () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const blocks = document.querySelectorAll('.block');

      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      let x = 0;
      let y = 0;

      blocks.forEach(block => {
        if (block.style.backgroundImage) {
          const image = new Image();
          image.src = block.style.backgroundImage.slice(4, -1).replace(/"/g, "");
          ctx.drawImage(image, x, y, 50, 50);
        }
        x += 50;
        if (x >= container.offsetWidth) {
          x = 0;
          y += 50;
        }
      });

      const link = document.createElement('a');
      link.download = 'mi_construccion.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });

    const urls = {
        'url1': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJhL0JhYnklMjBQbGF5ZXIubWNwYWNr'
    };

    function decodeAndRedirect(event, urlKey) {
        event.preventDefault();
        const contentUrl = urls[urlKey];
        const decodedUrl = atob(contentUrl); 
        window.location.href = decodedUrl;
    }

    const images = {
        'img1': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL2JhYnkgcGxheWVyIC0gd2ViY29kZW0ucG5n'
    };

    function displayImage(event, imageKey) {
        event.preventDefault();
        const imgData = images[imageKey];
        const img = new Image();
        img.src = imgData;
        document.body.appendChild(img);
    }

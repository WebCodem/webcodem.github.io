    const urls = {
        'url1': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJhL0JhYnklMjBQbGF5ZXIubWNwYWNr',
    };

    function decodeAndRedirect(event, urlKey) {
        event.preventDefault();
        const contentUrl = urls[urlKey];
        const decodedUrl = atob(contentUrl); 
        window.location.href = decodedUrl;
    }

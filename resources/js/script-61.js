    const urls = {
        'url1': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJhL0JhYnklMjBQbGF5ZXIubWNwYWNr',
        'url2': 'aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vZGVzY2FyZ2FyLWVycm9yLTQwNA',
        'url3': 'aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vcCVDMyVBMWdpbmEtZXJyb3ItNDA0',
        'url4': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJhL2FjdGlvbnMtc3R1ZmYtMS0wLTIubWNwYWNr',
        'url5': 'aHR0cDovL3dlYmNvZGVtLW1lZGlhLmdpdGh1Yi5pby9yZXNvdXJjZXMvbXVsdGltZWRpYS9tYXJrZXRwbGFjZS9taW5lY3JhZnQvdGV4dHVyYS9CYXJlJTIwQm9uZSUyMFBsdXMlMjBbQkVUQV0ubWNwYWNr',
    };

    function decodeAndRedirect(event, urlKey) {
        event.preventDefault();
        const contentUrl = urls[urlKey];
        const decodedUrl = atob(contentUrl); 
        window.location.href = decodedUrl;
    }

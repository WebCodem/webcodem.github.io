        const urlContent = [
            { type: 'image', id: 'image1', url: 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL2xvZ28ucG5n' }
        ];

        const favicon = document.getElementById('favicon');
        if (favicon) {
            const decodedFaviconURL = atob(urlContent[0].url);
            favicon.href = decodedFaviconURL;
        }

        const urlContents = document.querySelectorAll('.urlContent, .imagen');
        urlContents.forEach((content, index) => {
            const contentData = urlContent.find(item => item.id === content.id);
            if (contentData) {
                const decodedURL = atob(contentData.url);
                if (contentData.type === 'image' || contentData.type === 'video') {
                    content.src = decodedURL;
                    content.alt = `${contentData.type.charAt(0).toUpperCase()}${contentData.type.slice(1)} ${index + 1}`;
                    if (contentData.type === 'video') {
                        content.controls = true;
                    }
                } else if (contentData.type === 'audio') {
                    content.src = decodedURL;
                    content.controls = true;
                }
            }
        });

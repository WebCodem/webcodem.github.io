        const contentUrl1 = "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL2xvZ28ucG5n";
        const decodedUrl1 = atob(contentUrl1);
        const imgElement1 = document.getElementById("imagen1");
        imgElement1.src = decodedUrl1;

        const contentUrl2 = "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL2JhYnkgcGxheWVyIC0gd2ViY29kZW0ucG5n";  
        const decodedUrl2 = atob(contentUrl2);
        const imgElement2 = document.getElementById("imagen2");
        imgElement2.src = decodedUrl2;

        const contentUrl3 = "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL0NhbGwgT2YgRHV0eSBNb2Rlcm4gV2FyZmFyZSBJSSAtIHdlYmNvZGVtLnBuZw";  
        const decodedUrl3 = atob(contentUrl3);
        const imgElement3 = document.getElementById("imagen3");
        imgElement3.src = decodedUrl3;
        
        const faviconUrl = "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL2xvZ28ucG5n";
        const decodedFaviconUrl = atob(faviconUrl);
        const linkElement = document.createElement('link');
        linkElement.rel = 'icon';
        linkElement.href = decodedFaviconUrl;
        document.head.appendChild(linkElement);

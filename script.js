document.getElementById('generateLink').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const message = encodeURIComponent(document.getElementById('message').value);
    // const longUrl = `http://127.0.0.1:5500//single.html?name=${name}&message=${message}
    `;

    // Use rebrand.ly API to shorten the URL
    const apiKey = 'c8e083cd229942f1a10f9f85f8dda9d3';
    const linkRequest = {
        destination: longUrl,
        domain: { fullName: "rebrand.ly" }
        // Here you can add more settings like slashtag, title etc.
    };

    const headers = new Headers({
        'Content-Type': 'application/json',
        'apikey': apiKey
    });

    fetch('https://api.rebrandly.com/v1/links', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(linkRequest),
    })
        .then(response => response.json())
        .then(link => {
            //console.log(`Short URL is: ${link.shortUrl}`);

            // Display the modal
            document.getElementById('modal').classList.remove('hidden');
            document.getElementById('modal').classList.add('modal-enter');
            document.getElementById('shortened-link').innerText = link.shortUrl;
            // Here you can handle the display of the shortened URL or redirect
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('modal').classList.add('hidden');
});

document.getElementById('copy-link').addEventListener('click', function () {
    const shortenedLinkText = document.getElementById('shortened-link').innerText;
    navigator.clipboard.writeText(shortenedLinkText).then(() => {
        alert('Link copied to clipboard!');
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
});
document.getElementById('share-link').addEventListener('click', function () {
    const shortenedLinkText = document.getElementById('shortened-link').innerText;
    if (navigator.share) {
        navigator.share({
            title: 'Welcome Ramadan',
            text: 'Check out this special Ramadan link: ',
            url: shortenedLinkText,
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch(console.error);
    } else {
        // Fallback for browsers that don't support the Web Share API
        alert('Your browser does not support the share API. Please copy the link and share it manually.');
    }
});



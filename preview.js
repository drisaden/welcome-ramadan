document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('gift-box').classList.remove('hidden');
    }, 2000); // Adjust timing as needed

    document.getElementById('open-gift').addEventListener('click', function() {
        // Hide the unopened box and reveal the message with animations
        this.style.display = 'none';
        const messageContainer = document.getElementById('message-container');
        messageContainer.classList.remove('hidden');
        // Populate and animate the message and "Ramadan Mubarak" ribbon
        // This would involve more detailed JavaScript to dynamically create elements and apply animations
    });

    // Extract and display the name and message from URL parameters
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name');
    const message = queryParams.get('message');
    if (name && message) {
        // Display personalized message and sender's name
    }
});

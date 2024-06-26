document.addEventListener('DOMContentLoaded', function() {
    // Example: Automatically showing images on page load
    var images = document.querySelectorAll('.image-container img');
    images.forEach(function(img) {
        img.style.display = 'block'; // Ensure image is displayed
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var backgroundAudio = document.getElementById('backgroundAudio');
    
    // Attempt to play audio programmatically
    backgroundAudio.play().catch(function(error) {
        console.error('Autoplay was prevented:', error);
    });
});

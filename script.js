document.addEventListener('DOMContentLoaded', function() {
    // Example: Automatically showing images on page load
    var images = document.querySelectorAll('.image-container img');
    images.forEach(function(img) {
        img.style.display = 'block'; // Ensure image is displayed
    });
});

function toggleImage(imageNumber) {
    var image = document.getElementById('image' + imageNumber).querySelector('img');
    var button = document.getElementById('image' + imageNumber).querySelector('button');
    
    if (image.classList.contains('hidden')) {
        image.classList.remove('hidden');
        button.textContent = 'Hide Image';
    } else {
        image.classList.add('hidden');
        button.textContent = 'Show Image';
    }
}

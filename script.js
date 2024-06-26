function checkAnswer(questionNumber, correctAnswer) {
    var userAnswer = document.getElementById('answer' + questionNumber).value;
    var image = document.getElementById('image' + questionNumber).querySelector('img');
    
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        image.classList.remove('hidden');
        alert('Correct! Enjoy the image.');
    } else {
        alert('Incorrect, please try again.');
    }
}

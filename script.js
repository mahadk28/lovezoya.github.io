let currentQuestion = 1;

function checkAnswer(questionId, correctAnswer) {
    const selectedAnswer = document.querySelector(`#${questionId} li button:hover`).innerText;
    const resultMessage = document.getElementById('resultMessage');

    if (selectedAnswer === correctAnswer) {
        resultMessage.innerHTML = `Correct!`;
    } else {
        resultMessage.innerHTML = `Incorrect! The correct answer is ${correctAnswer}.`;
    }

    document.getElementById(questionId).style.display = 'none';
    currentQuestion++;

    if (currentQuestion <= 3) {
        document.getElementById(`question${currentQuestion}`).style.display = 'block';
    } else {
        document.getElementById('result').style.display = 'block';
    }
}
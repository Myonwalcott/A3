document.addEventListener('DOMContentLoaded', function() {//form Declaration
    const quizForm = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('results');
    let score = 0;
  
    quizForm.addEventListener('submit', function(event) {// Question Answer input
      event.preventDefault();
      score = 0;
      checkAnswer('q1', 'One Piece');
      checkAnswer('q2', 'Tournament Power Goku');
      checkAnswer('q3', 'Tanjuro')
      showResults();
    });
  
    function checkAnswer(questionId, correctAnswer) {
      const selectedAnswer = document.querySelector(`input[name=${questionId}]:checked`);
      if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {//line that asked program to check and count the numeber of correct answers 
          score++;
          selectedAnswer.parentNode.style.color = 'green'; // Visual feedback for correct answer
        } else {
          selectedAnswer.parentNode.style.color = 'red'; // Visual feedback for incorrect answer
        }
      }
    }
  
    function showResults() {
      resultsContainer.innerHTML = `<h3>Your Score: ${score}</h3>`;
    }
  });
  
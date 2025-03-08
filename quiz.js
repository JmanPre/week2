const quizData = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal in the world?",
      answers: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
      correctAnswer: "Blue Whale"
    }
  ];
  
  let score = 0;
  
 
  function runQuiz() {
    for (let i = 0; i < quizData.length; i++) {
      const questionData = quizData[i];
      const userAnswer = prompt(
        `${questionData.question}\n\nOptions: ${questionData.answers.join(", ")}`
      );
  
      if (userAnswer?.trim().toLowerCase() === questionData.correctAnswer.toLowerCase()) {
        score++;
        console.log("Correct!");
      } else {
        console.log(`Incorrect! The correct answer is ${questionData.correctAnswer}.`);
      }
    }

    console.log(`Quiz finished! Your score is ${score} out of ${quizData.length}.`);
  }
  
  runQuiz();
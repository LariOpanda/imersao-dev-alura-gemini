console.log (dados);

// ... seu código JavaScript existente ...

// Função para criar o quiz
function createQuiz() {
    // Array com as perguntas e opções
    const questions = [
      {
        question: "Qual característica você mais admira?",
        answers: {
          a: "Criatividade e originalidade.",
          b: "Inteligência e sagacidade.",
          c: "Paixão e intensidade.",
          d: "Humor negro e sarcasmo."
        },
        correctAnswer: "c"
      },
      // Adicione mais perguntas aqui
    ];
  
    // ... Lógica para criar elementos HTML para cada pergunta e opção ...
  
    // Adicione os elementos gerados à div quiz-container
    quizContainer.appendChild(/* elemento com as perguntas */);
  }
  
  // Função para calcular o resultado
  function calculateResult() {
    // ... Lógica para calcular o resultado com base nas respostas do usuário ...
    // Exibir o resultado na div com o id "result"
  }
  
  // Chamar as funções para criar e mostrar o quiz
  createQuiz();
  submitButton.addEventListener('click', calculateResult);
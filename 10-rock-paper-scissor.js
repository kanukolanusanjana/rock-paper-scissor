

let score = JSON.parse(localStorage.getItem('score'));
      if (score === null) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }

      updatescoreElement();
      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else {
            result = 'You lose.';
          }

        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else {
            result = 'You win.';
          }
        }

        if (result === 'You win.') {
          score.wins += 1;
        } else if (result === 'You lose.') {
          score.losses += 1;
        } else {
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));
         document.querySelector('.js-result').innerHTML= result;


         document.querySelector('.js-ratio').innerHTML=` you <img src="${playerMove}.jpg" class="move-icon">  <img src="${computerMove}.jpg" class="move-icon"> computer `;
        
           updatescoreElement();

      }

      function updatescoreElement(){
        
        document.querySelector('.showScore').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      

      function pickComputerMove() {
        const randomNumber = Math.random();

        if (randomNumber < 1 / 3) {
          return 'rock';
        } else if (randomNumber < 2 / 3) {
          return 'paper';
        } else {
          return 'scissors';
        }
      }
        let playerSelection;
        let computerSelection;
        let round = 0;
        let playerPt = 0;
        let computerPt = 0;
        let roundResult;
        const playerScore = document.getElementById('player-score'); 
        const computerScore = document.getElementById('computer-score');
 
        const results = document.getElementById('results');

        const pChoice = document.querySelectorAll('.btn');
        pChoice.forEach((btn) => {
            btn.addEventListener('click', () => {
                playerSelection = btn.id
                playRound(playerSelection)
            });
        });

        function computerPlay() {
            const choice = ['Rock', 'Paper', 'Scissors'];
            let randomChoice = Math.floor(Math.random() * choice.length);
            computerSelection = choice[randomChoice];
            return choice[randomChoice];
        }

        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        function playRound(playerSelection, computerSelection) {
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerPlay().toLowerCase();
            round++;

            if(playerSelection === computerSelection) {
                roundResult = 'tie';
            }else if((playerSelection == 'rock') && (computerSelection == 'scissors')) {
                playerPt++;
                roundResult = 'win';
            }else if((playerSelection == 'scissors') && (computerSelection == 'paper')) {
                playerPt++;
                roundResult = 'win';
            }else if((playerSelection == 'paper') && (computerSelection == 'rock')) {
                playerPt++;
                roundResult = 'win';
            }else if((playerSelection == 'scissors') && (computerSelection == 'rock')) {
                computerPt++;
                roundResult = 'lose';
            }else if((playerSelection == 'paper') && (computerSelection == 'scissors')) {
                computerPt++;
                roundResult = 'lose';
            }else if((playerSelection == 'rock') && (computerSelection == 'paper')) {
                computerPt++;
                roundResult = 'lose';
            }

            roundOutput();

            if(round >= 5) {
                gameEnd();
            }
        }

        function roundOutput() {
            if(roundResult === 'tie') {
                results.textContent = `${capitalize(playerSelection)} verses ${capitalize(computerSelection)} is a tie.`
            }else if(roundResult === 'win') {
                playerScore.textContent = playerPt;
                results.textContent = `${capitalize(playerSelection)} beats ${capitalize(computerSelection)}...WINNER!`
            }else if(roundResult === 'lose') {
                computerScore.textContent = computerPt;
                results.textContent = `${capitalize(computerSelection)} beats ${capitalize(playerSelection)}...LOSER!`
            }
        }

        function gameEnd() {
            if(playerPt > computerPt) {
                results.textContent = `Player 1 Wins!`;
            }else if(computerPt > playerPt) {
                results.textContent = `Computer Wins!`;
            }

            gameRestart();
        }


        function gameRestart() {
            document.getElementById('results').style.visibility = 'hidden';
            document.getElementById('restart').style.visibility = 'visible';

            restart.addEventListener('click', () => {
                window.location.reload();
            });
        }



(function() {

    var choices = ["rock", "paper", "scissors"];
    var index = Math.floor((Math.random() * 3));
    var computer = choices[index];
    var rock = document.getElementById("rock");
    var paper = document.getElementById("paper");
    var scissors = document.getElementById("scissors");
    var outcome = document.getElementById("outcomeAlert");
    var progress = document.getElementsByClassName("progress-bar")[0];
    var playerScore = 0;
    var computerScore = 0;

    function resetComputerChoice() {
        index = Math.floor((Math.random() * 3));
        computer = choices[index];
    }

    rock.addEventListener("click", function() {
        resetComputerChoice();
        play("rock");
    });
    
    paper.addEventListener("click", function() {
        resetComputerChoice();
        play("paper");
        
    });
    
    scissors.addEventListener("click", function() {
        resetComputerChoice();
        play("scissors");
        
    });
    
    function play(player) {
        if (player === computer) {
            outcome.innerHTML = (`Tie! <br> 
                                  ${player} = ${computer} <br> 
                                  Player score: ${playerScore} <br> 
                                  Computer score: ${computerScore}`);
            document.body.style = "background-color: #ffff00"; 
        }
        else if ((player === "rock" && computer === "scissors") || 
                 (player === "paper" && computer === "rock") || 
                 (player === "scissors" && computer === "paper")) {
            playerScore++;
            outcome.innerHTML = (`You won! <br> 
                                  ${player} > ${computer} <br> 
                                  Player score: ${playerScore} <br> 
                                  Computer score: ${computerScore}`);
            document.body.style = "background-color: #00ff00";
        }
        else {
            computerScore++;
            outcome.innerHTML = (`You lost! <br> 
                                  ${player} < ${computer} <br> 
                                  Player score: ${playerScore} <br> 
                                  Computer score: ${computerScore}`);
            document.body.style = "background-color: #ff0000";
        }
        progress.style = `width: ${(playerScore / (playerScore + computerScore))*100}%`;
    }

})();

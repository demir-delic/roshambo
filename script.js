(function() {

    var choices = ['rock', 'paper', 'scissors'];
    var index = Math.floor((Math.random() * 3));
    var computer = choices[index];
    var rock = document.getElementById('rock');
    var paper = document.getElementById('paper');
    var scissors = document.getElementById('scissors');
    var outcome = document.getElementById("outcomeAlert");
    var progress = document.getElementsByClassName("progress-bar");
    var playerScore = 0;
    var computerScore = 0;

    function setIndex() {
        index = Math.floor((Math.random() * 3));
        computer = choices[index];
    }

    rock.addEventListener('click', function() {
        setIndex();
        play('rock');
    });
    
    paper.addEventListener('click', function() {
        setIndex();
        play('paper');
        
    });
    
    scissors.addEventListener('click', function() {
        setIndex();
        play('scissors');
        
    });
    
    // Add your "play" function below this comment
    function play(player) {
        if (player === computer) {
            outcome.innerHTML = (`Tie! <br> ${player} = ${computer} <br> Player score: ${playerScore} <br> Computer score: ${computerScore}`);
            document.body.style = "background-color: #ffff00"; 
        }
        else if ((player === "rock" && computer === "scissors") || 
                 (player === "paper" && computer === "rock") || 
                 (player === "scissors" && computer === "paper")) {
            playerScore++;
            outcome.innerHTML = (`You won! <br> ${player} > ${computer} <br> Player score: ${playerScore} <br> Computer score: ${computerScore}`);
            document.body.style = "background-color: #00ff00";
        }
        else {
            computerScore++;
            outcome.innerHTML = (`You lost! <br> ${player} < ${computer} <br> Player score: ${playerScore} <br> Computer score: ${computerScore}`);
            document.body.style = "background-color: #ff0000";
        }
        progress
    }

})();



/*

function play(player) {
    var computer = Math.floor(Math.random()*3) //random number between 0 and 2, inclusive
    var outcome = document.getElementById("outcomeAlert");
    
    function (choice) {
      if(choice === 0) {
        return "Rock";
      }
      else if(choice === 1) {
        return "Paper";
      }
      else {
        return "Scissors";
      }
    }
    
    if (player === computer)) {
      outcome.innerHTML = ("The game resulted in a tie!");
    }
    else if ((player === "Rock" && computer) === "Scissors") || 
             (player === "Paper" && computer) === "Rock") || 
             (player === "Scissors" && computer) === "Paper")) {
      outcome.innerHTML = ("You won!");
    }
    else {
      outcome.innerHTML = ("You lost!");
    }
  }
  */
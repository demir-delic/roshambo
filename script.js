function play(playerThrow) {
    var computerThrow = Math.floor(Math.random()*3) //random number between 0 and 2, inclusive
    var outcome = document.getElementById("outcomeAlert");
    
    function numToString(throwName) {
      if(throwName === 0) {
        return "Rock";
      }
      else if(throwName === 1) {
        return "Paper";
      }
      else {
        return "Scissors";
      }
    }
    
    if (playerThrow === numToString(computerThrow)) {
      outcome.innerHTML = ("The game resulted in a tie!");
    }
    else if ((playerThrow === "Rock" && numToString(computerThrow) === "Scissors") || 
    (playerThrow === "Paper" && numToString(computerThrow) === "Rock") || 
    (playerThrow === "Scissors" && numToString(computerThrow) === "Paper")) {
      outcome.innerHTML = ("You won!");
    }
    else {
      outcome.innerHTML = ("You lost!");
    }
  }
  
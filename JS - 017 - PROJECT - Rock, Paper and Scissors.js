

// Rock, Paper, or Scissors



//GETTING USER CHOICE 
const getUserChoice = userInput => {

    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
  
    } else {
      console.log('Error!!! You did not type one of the three correct options');
    }
  
  }
  
  //testing code = console.log(getUserChoice('rock'));
  
  

  //GETTING COMPUTER CHOICE
  let randomNumber;
  
  function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3);
  
    switch(randomNumber){
  
      case 0:
      return 'rock';
      break;
  
      case 1:
      return 'paper';
      break;
  
      case 2:
      return 'scissors';
      break;
    }
  
  }
  
  // testing code = console.log(getComputerChoice());
  
  

  //FUNCTION DETERMINING THE WINNER
  function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
      return 'The game was a tie!!!'
    }
  
  //
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Computer Won!!!'
       } else {
          return 'User Won!!!'
        }
    }
  
  //
   if (userChoice === 'paper'){
     if (computerChoice === 'rock'){
       return 'User Won!!!'
      } else if (computerChoice === 'scissors'){
          return 'Computer Won!!!'
     }
   }
  
  //
   if (userChoice === 'scissors'){
     if (computerChoice === 'paper'){
       return 'User Won!!!'
      } else if (computerChoice === 'rock')
         return 'Computer Won!!!'
    }
  }
  
 
  
  //FUNCTION PLAY GAME
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
  
     console.log('Welcome to the game!!!');
     console.log('You threw: ' + userChoice);
     console.log('The computer threw: ' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
   
  };
  
  playGame();
  
  
//Team Stats

const team = {

    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      }
    ],
  
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      }
    ],
  
  
  //GETTERS
     get games() {
         return this._games;
     },
  
     get players() {
         return this._players;
     },
  
  
  //Add player Method
  addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
   
      this.players.push(player);
    },
  
  
  //Add Game Method
  addGame(opp, myPts, oppPts){
    let game = {
      opponent: opp,
      temPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
    }
  };
  
  // Adding Players and Games and Logging it
  team.addPlayer('Steph', 'Curry', 28);
  console.log('Players:\n');
  console.log(team._players);
  console.log('\n');
  
  console.log('Games:\n');
  team.addGame('Brasil', 150, 80);
  console.log(team._games);
  
    
    
  
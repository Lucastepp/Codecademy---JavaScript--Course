

//LOOPS NESTED LOOPS


let bobsFollowers = ['Joao', 'Maria', 'Tony', 'Klara'];
let tinasFollowers = ['Amanda', 'Tony', 'Klara'];
let mutualFollowers = [];


for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
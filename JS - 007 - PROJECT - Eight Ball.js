
let userName = 'Jane';

userName === 'Jane' ? console.log(`Hello ${userName}!\n`) : console.log('Hello!\n');

const userQuestion = 'Will I become a werewolf tonight?';

console.log(`The user ${userName} asked "${userQuestion}"`);

//creating a random number between 0 and 7 Math.floor round it down to maxium of 7.
let randomNumber = Math.floor(Math.random() * 8);

//assigning randomNumber to eightBall
let eightBall = randomNumber

//printing which number was selected
console.log(`\nThe eight ball answered: number ${eightBall}:\n`);  

//creating a control flow for each number 0 - 7 using switch case st.
switch (eightBall){

  case 0:
  console.log('It is certain');
  break;

  case 1:
  console.log('It is decidedly so');
  break;

  case 2:
  console.log('Reply hazy try again');
  break;

  case 3:
  console.log('Cannot predict now');
  break;

  case 4:
  console.log('Do not count on it');
  break;

  case 5:
  console.log('My sources say no');
  break;

  case 6:
  console.log('Outlook not so good');
  break;

  case 7:
  console.log('Signs point to yes');
  break;
 
}

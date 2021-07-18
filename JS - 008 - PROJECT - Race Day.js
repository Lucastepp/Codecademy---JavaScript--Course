
const registeredEarly = true;

let runnerAge = 22;

//adding 1000 if runner is an adult
if (registeredEarly === true && runnerAge >= 18){
  raceNumber += 1000;
}

// + 18 and Early registered running at 9:30am
if (registeredEarly === true && runnerAge >= 18){
  console.log(`Runner number ${raceNumber}, be ready to run at 9:30 AM`);

// + 18 and Late registered running at 11:00am
} else if (registeredEarly === false && runnerAge > 18)  {
    console.log(`Runner number ${raceNumber}, be ready to run at 11:00 AM`);

// Youth runners at 12:30pm
} else if (runnerAge < 18){
    console.log(`Runner number ${raceNumber}, be ready to run at 12:30 PM`);

// if 18 yo, check the board
} else {
    console.log('If you are 18 years old, please check the board');

}



// Getting random number
const random = Math.floor(Math.random() * 3);


//Choosing which event
const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};


//Training days
const getTrainingDays = () => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};




//Logging
const logEvent = () => {
 
  console.log(`${name}'s event is: ${event}`);
};


//Logging
const logTime = () => {
  
  console.log(`${name}'s time to train is: ${days} days`);
};


//setting constants 
const name = 'Nala';
const event = getRandEvent();
const days = getTrainingDays(event);


//Printing it
logEvent(name, event);
logTime(name, days);

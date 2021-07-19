

// Sleep Debt Calculator //


//function sleepHours
const getSleepHours = day => {
    switch (day){
  
      case 'Monday':
      return 8;
      break;
  
      case 'Tuesday':
      return 7;
      break;
  
      case 'Wednesday':
      return 8;
      break;
  
      case 'Thursday':
      return 6;
      break;
  
      case 'Friday':
      return 5;
      break;
  
      case 'Saturday':
      return 9;
      break;
  
      case 'Sunday':
      return 8;
      break;
    }
  
  };
  

  //testing code
  //console.log(getSleepHours('Monday'));
  
  
  //TOTAL SLEEP HOURS
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  
  
  //IDEAL SLEEP HOURS
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  
  //testing code
  //console.log(getActualSleepHours());
  //console.log(getIdealSleepHours());
  
  
  //CALCULATING DEBT
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  

  //PERFECT SLEEP TIME
    if (actualSleepHours === idealSleepHours){
      console.log(`You slept ${actualSleepHours} hours weekly!`);
      return 'You\'ve got the perfect amount of sleep!!'
  

  //OVERSLEEP
    } else if (actualSleepHours > idealSleepHours){
        const overSleep = actualSleepHours - idealSleepHours;
        console.log(`You slept ${actualSleepHours} hours weekly!`);
        console.log('You\'ve got more sleep than needed');
        console.log(`You are oversleeping ${overSleep} hours! `);
  

  //UNDERSLEEP
    } else if (actualSleepHours < idealSleepHours){
        const underSleep =  idealSleepHours - actualSleepHours; 
        console.log(`You slept ${actualSleepHours} hours weekly!`);
        console.log('You should sleep more!!');
        console.log(`You need to sleep ${underSleep} hours more in your week basis! `);
  
    }
  }
  
  
  console.log(calculateSleepDebt());
  
  
  
  

// PROJECT WHALE TALKS

//sentence to be translated 
const input = 'turpentine and turtles';

//vowels to match with Whale talk
const vowels = ['a', 'e', 'i', 'o', 'u' ];

// Empty array to assign matched words
let resultArray = [];



// for loop iterating over input
for (let i = 0; i < input.length; i++){
  // testing code - console.log('i is' + i);
  // testing code - console.log( 'i is ' + input[i]);

// nested for loop iterating over vowels
  for (let j = 0; j < vowels.length; j++){
    // testing code - console.log('j is' + j);
    // testing code - console.log('j is ' +vowels[j]);

    if (input[i] === vowels[j]){
      if ( input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i]);
      }
      resultArray.push(input[i]);

      // testing code - console.log('pushing...' + input[i]);
      // testing code - console.log(resultArray);
    }
  }
}

//
console.log(`The translation of "${input}" for Whale Talk is:   `+ resultArray.join('').toUpperCase());
  


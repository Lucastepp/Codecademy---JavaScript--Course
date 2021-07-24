
// Iterator Documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];


// Some method
console.log(words.some((word) => {
  return word.length < 6;
}));


// Filter method
const interestingWords = words.filter((word) => {
  return word.length > 5;
});



// Every method
console.log(interestingWords.every((word) => {
  return word.length > 5;
 } ));

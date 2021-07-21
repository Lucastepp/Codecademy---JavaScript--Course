

// Arrays + functions

const concept = ['arrays', 'can', 'be', 'mutated'];


// change
function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);


// remove
function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);


console.log(concept);


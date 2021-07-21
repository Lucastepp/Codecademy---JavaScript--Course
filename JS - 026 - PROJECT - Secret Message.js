

//SECRET MESSAGES


let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//taking the last index off
secretMessage.pop();

//adding to and program to the array
secretMessage.push('to', 'Program');

//changing easily for right
secretMessage[7] = 'right';

//Removing first string with shift
secretMessage.shift(0);

//adding first string with unshift
secretMessage.unshift('Programming');

//removing string from index 6, quantity 5, changing it for new string
secretMessage.splice(6, 5, 'know,')


console.log(secretMessage.join(' '));

//testing logs
console.log('');
console.log('');
console.log(secretMessage);
console.log(secretMessage.length);
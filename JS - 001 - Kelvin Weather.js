

const kelvin = 293;
// kelvin has a constant value of 293

const celsius = kelvin - 273;
// celsius has the value of kelvin - 273

let fahrenheit = celsius * (9 / 5) + 32
// to know fahrenheit is needed to calculate

fahrenheit = Math.floor(fahrenheit);
// rounding down the variable to get integer numbers

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


let newton = celsius * (33/100);
// celsius to newton

newton = Math.floor(newton);
// rounding down

console.log(`The temperature is ${newton} degrees Newton.`)
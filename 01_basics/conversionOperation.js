let temp = "1234"
console.log(typeof temp); // string

let numForm = Number(temp)

temp = "123abc"
let numForm2 = Number(temp)

temp = null;
let numForm3 = Number(temp);

temp = undefined
let numForm4 = Number(temp);

temp = true
let numForm5 = Number(temp);

temp = "tanu"
let numForm6 = Number(temp);


console.log(numForm)  // 1234
console.log(numForm2) // NaN : (not a number)
console.log(numForm3) // 0
console.log(numForm4) // NaN
console.log(numForm5) // 1
console.log(numForm6) // NaN

// besides Number , we can also convert in other data types
// for example

let me = "Tanu"
let converted = Boolean(me)
console.log(converted)  // true
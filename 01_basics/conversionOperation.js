let temp = "1234"
// console.log(typeof temp); // string

let numForm = Number(temp) // 1234

temp = "123abc"
let numForm2 = Number(temp) // NaN

temp = null;
let numForm3 = Number(temp); // 0

temp = undefined
let numForm4 = Number(temp); // NaN

temp = true
let numForm5 = Number(temp); // 1

temp = "tanu"
let numForm6 = Number(temp); // NaN


// console.log(numForm)  // 1234
// console.log(numForm2) // NaN : (not a number)
// console.log(numForm3) // 0
// console.log(numForm4) // NaN
// console.log(numForm5) // 1
// console.log(numForm6) // NaN

// besides Number , we can also convert in other data types
// for example

let me = "Tanu"
let converted = Boolean(me)
// console.log(converted)  // true

// console.log(3+"5"+4+3)    // 3543
// console.log(3+4+"3"+4)    // 734
// console.log(1+2+3+"4"+5)  // 645

// console.log(3+4*4%3)  // 4 -> 3+((4*4)%3) according to precedence

// console.log(true)  // true
// console.log(+true) // 1
// console.log(-true) // -1

// let x = 5
// let val = -x
// console.log(val) // -5


// COMPARISION

// console.log(1<2)
// console.log(1>2)
// console.log(1==2)
// console.log(1===2)
// console.log(3<=2)
// console.log(1>=2)
// console.log(1!=2)
// console.log(1!==2)

console.log("2" > 1); // true
console.log("02" > 1) // true



console.log(null > 0)  // false
console.log(null == 0) // false
console.log(null >= 0) // true

// the reason is that an equality check == and comparisios > >= <= work differently. 
// Comparision convert null to a number , treating it as 0.
// here , in line 69   null will be 0 and which is >= 0. thats why here it gives true.

console.log(undefined > 0)  // false
console.log(undefined < 0)  // false
console.log(undefined == 0) // false
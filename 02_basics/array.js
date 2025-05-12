// array

const myArr = [0, 1, 2, 3, 4, 5]
const names = ["tan" , "mus", "pri"]
const comb = [0, "thnis", true, "vvns", 5]

const arr = new Array(1, 2, 2, 4, 5)

// console.log(arr[0])


// array methods
// arr.push(-1)
// arr.push(0)   // adds element at end
// console.log(arr)

// arr.pop()    // delete element stored at end
// console.log(arr)

// arr.unshift(0) // adds element at front, and shift each element to one position right
// console.log(arr)

// arr.shift() // removes frist element, and shift each element to one position left
// console.log(arr)

console.log(arr.includes(10)) // gives true if present, otherwise false
console.log(arr.indexOf(2)) // gives index at which it is present, if not then return -1


let newArr = arr.join()    // it converts arr into string
console.log(newArr)
console.log(typeof newArr) // string


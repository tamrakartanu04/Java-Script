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

// console.log(arr.includes(10)) // gives true if present, otherwise false
// console.log(arr.indexOf(2)) // gives index at which it is present, if not then return -1


let newArr = arr.join()    // it converts arr into string
// console.log(newArr)
// console.log(typeof newArr) // string
// console.log(newArr[1]) // ,



// slice , splice
// splice also delete those elements from array which are taken in splice
// means "splice manipualtes the original array"

console.log("A" , arr)      // for here name will be printed A // A [1,2,2,4,5]

console.log(arr.slice(1,3)) // (2, 2) // 3rd index not include
console.log("B", arr)       // B [1, 2, 2, 4, 5]

console.log(arr.splice(1,3)) // (2, 2, 3) // 3rd index included
console.log("C" , arr)       // C [1, 5] // 


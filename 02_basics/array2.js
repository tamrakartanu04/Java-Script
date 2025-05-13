let arr = ["hii", "hello", "hey"]
let brr = ["bye", "see you"]

arr.push(brr)  // ["hii", "hello", "hey", ["bye", "see you"]] // now brr is element of arr
// console.log(arr)

// console.log(arr[3])    // ["bye", "see you"]
// console.log(arr[3][1]) // see you


arr = ["hii", "hello", "hey"]
brr = ["bye", "see you"]
// const temp = arr.concat(brr)   // arr.concat(brr, arr) // will also work
// console.log(temp)     //  ["hii", "hello", "hey", "bye", "see you"] 
// console.log(arr)      //  ["hii", "hello", "hey"] 

// spread operator  // used to simply spread elements of array 
const temp2 = [...arr, ...brr, ...arr]
// console.log(temp2)


// flat the array 
const newarray = [1, 2, [3, 4], 5, [6, [7, 8]]]
// const changed = newarray.flat(1) //  1 argument specifies that only the first level of nesting should be flattened,
// const changed = newarray.flat(2) 
const changed = newarray.flat(Infinity)  // all level of nesting will be flattened
// console.log(changed)



console.log(Array.isArray("Tanu")) // false
console.log(Array.from("Tanu"))  // create array : [ 'T', 'a', 'n', 'u' ]
console.log(Array.from({name : "tanu", age : 18})) // interesting

let a = 4
let b = 5
let c = 7
console.log(Array.of(a, b, c))
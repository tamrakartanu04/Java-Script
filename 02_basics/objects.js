// using literals : singleton
// using constructor 

// using symbol as a object key and printing its value // to use symbol we use  [] 
const sym = Symbol("sample")

// using literals
const obj = {
    name : "Tanu",
    [sym] : "key1",
    "full name" : "Tanu Tamrakar",
    age : 19,
    city : "Bhopal"
}

console.log(typeof obj[sym])


// console.log(obj."name") // error
// console.log(obj.name)
// console.log(obj["name"]) // in this way we have to use "" bcz key names are also strings

// // console.log(obj."full name") // error
// console.log(obj["full name"]) // valid
// so , in square backets we have to use " " , and key name with sapces are not allowed to access using dot operator



obj.city = "Indore"
// Object.freeze(obj)  // any changes further on obj will not be reflected
// console.log(obj)

obj.age = 20
// console.log(obj)
// answer of both lines 31 and 34 will be same


obj.greeting = function(){
    console.log("Hello JS")
}
obj.greeting2 = function(){
    console.log(`Hello guys, ${this.name}`)
}
console.log(obj.greeting2())

// stack memory
let email = "gmail.com"

let change = email
change = "tanugmail.com"

console.log(email)    // will remain same, bcz changes are made in its copy
console.log(change)   


let name = "tanuuuu"
let temp = name
temp="hellooo"
console.log(name)  
console.log(temp)


// heap memory
let ob1 = {
    branch : "CSE",
    sub : "B.tech"
}

let ob2 = ob1
ob2.branch = "AIML"

console.log(ob1.branch);  // change, bcz of reference
console.log(ob2.branch); 




let arr = [1,2,3,4]
let brr = arr
brr[0] = 5
console.log(arr[0]) // 5
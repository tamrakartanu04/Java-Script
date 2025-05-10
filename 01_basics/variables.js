const ID = 1234     // will not change further
var Name = "Tanu"   // prefer not to use var bcs of issue in block scope and functional ssope
let email = "tanu@gamil.com"  // right
city = "Bhopal"     // will work but should not use
let college;        // undefined

// ID = 2234  // not valid bcz ID is const
// console.log(ID);

Name = "Me"
email = "hii@gmail.com"
city = "Indore"

console.table([ID, Name, email, city, college]);

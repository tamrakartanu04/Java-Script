// Dates

let myDate = new Date()

// console.log(typeof myDate)

// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

let createDate = new Date(2023, 0, 4) // month start with 0 // year/month/day
let createDateTime = new Date(2023, 0, 4, 5, 30)
let createD = new Date("2024/01/04")   // start with 1 // Date("2024-01-04) also valid // year/month/day
let create = new Date("01-04-2025")    // month/day/year

// console.log(create.toLocaleString())


// console.log(Date.now())
// console.log(create.getTime())  // in mili second

// console.log(Math.floor(create.getTime()/1000))

console.log(myDate)
console.log(myDate.getMonth()+1)
console.log(myDate.getDay())

myDate.toLocaleString(`Default`, {
    weekday : "long",

})


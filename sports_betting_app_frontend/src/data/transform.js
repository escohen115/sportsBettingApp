const basketballLeagues = require("./basketballLeagues.json");
const basketballCountries = require("./basketballCountries.json");
const footballLeagues = require("./footballLeagues2.json");
const footballCountries = require("./footballCountries.json");


let arr = []
for (let i of basketballCountries){
    // console.log(i.name)
    if (basketballLeagues.find(bl=>bl.country.name === i.name)){
        arr.push(i)
    }
}
// console.log(JSON.stringify(arr))




//find all regions that 


let arr2 = []
for (let i of footballCountries){
    // console.log(i.name)
    if (footballLeagues.find(bl=>bl.country.name === i.name)){
        arr2.push(i)
    }
}
let arr3 = []
let hash = {}
// console.log(arr2)

for (let i of arr2){
    console.log(i.name)
    if (!(hash[i.name])) arr3.push(i)
    else{
        hash[i.name] = true
    }
}

console.log(JSON.stringify(arr3))
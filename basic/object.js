// singleton
// Object.create
//object literals
const mysym = Symbol("key1")
console.log(mysym);
console.log(typeof(mysym));
// mysym = Symbol("key2")

// console.log(mysym);
// console.log(typeof(mysym));



const jsUser = {
    name: "dibyendu",
    age: 22,
    location: "berhampre",
    email: "dibatmanna.com",
    isLoggedin : false,
    lastLoginDays:["Monday", "saturday"],
    [mysym]:"mykey1"

}


console.log(jsUser[mysym]);
console.log(typeof(mysym));
console.log(mysym);
console.log(jsUser);








// let a= 300

// {
//     let a = 10
//     const b = 20
//     var c = 30 
//     console.log(a);
// }

// console.log(a);
// //console.log(b);
// console.log(c);

// nested scope 

function one() {
    const username = "dibyendu"
    function two() {
        const website = "manna.com"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
one()
// ***************************************

console.log(addone(4));
function addone(value) {
    return value+1
}


console.log(addTwo(4));
const addTwo = function (value) {
    return value+2
}


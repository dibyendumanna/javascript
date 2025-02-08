/*
function addTwoNumber(number1, number2){
    // console.log(number1+number2);
    let result = number1 + number2
    return result
}

const result = addTwoNumber(4, 9)
// console.log(result);

function loginUserMessg(username) {
    
}

*/

//Function with Objects
/*function calculateCartPrice(...num1) {
    return 
}

console.log(calculateCartPrice(20, 34,234));
*/

const user={
    username:"dibyendu",
    price:"199"
}

function handleObject(anyobject) {
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)

const myArray =[200 ,300 ,700]

function handleArray(anyArray) {
    return anyArray[2]
}

console.log(handleArray(myArray));

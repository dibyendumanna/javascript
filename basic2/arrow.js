const user ={
    username:"dibyendu",
    prrice : 999,
    welcomeMessage:function () {
        console.log(`${this.username} welcome to website `);
        console.log(this);
        
        
    }
    
}

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

// function chai() {
//     username= "anup"
//     console.log(this.username);//this not legal, only works on object
    
// }
// chai()

// const chai= function() {
//         username= "anup"
//         console.log(this.username);//this not legal, only works on object
        
//     }
//     chai()

// const chai= () => {//this is arrow function
//             username= "anup"
//             console.log(this.username);//this not legal, only works on object
            
//         }
//         chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(4,9));


const addTwo = (num1, num2) =>  (num1 + num2) 
console.log(addTwo(4,9));
//const tinderUser = new Object()
const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name = "ami"
tinderUser.isloggedin = false
// console.log(tinderUser);

const regularUser ={
    email: "some@user.com",
    fullName:{
        userFullName:{
            firstName:"Dibyendu",
            Lastname:"Manna"
        }
    }
}
// console.log(regularUser.fullName.userFullName);


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

// merge two object 
// const obj3 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({},obj1, obj2)

// console.log(obj3);
// console.log(obj4);
const obj5 = {...obj1, ...obj2}
console.log(obj5);

const users=[
    {
        id:1,
        emai:"d@gmail.com"
    },
    {
        id:2,
        emai:"d@gmail.com"
    },
    {
        id:3,
        emai:"d3@gmail.com"
    }
]
console.log(users[1].id);

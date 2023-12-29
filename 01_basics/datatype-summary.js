// primitive
//7 types : String, Number,Boolearn,null,,undefined,Symbol,BigInt

const score = 100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id === anotherId);

const bigNumber=345678545n;


//Reference (Non primitive)

// Array,Objects,Functions

const heros=["shaktiman","nagraj","doga"];

//object

let myObj={
    name:"riju",
    age:22,
}

//function

const myFunction=function(){
    console.log("hello world");
}


console.log(typeof bigNumber);
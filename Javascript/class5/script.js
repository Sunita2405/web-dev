//?User defined functions

//!Normal function-
function printSomething(){
    console.log("This is a normal function");
}
//printSomething()

//*without parameter
function sum(){
    return 10+20
}
let a=sum()
// console.log(a);

//*with parameter
function add(a,b){
    return a+b
}
let x= add(10,20)
// console.log(x);
let y= add(30,20)
// console.log(y);

//console.log(add(1));

//*Function with default value
// function sub(x=0,y=0){
//    console.log("x value is",x);
//    console.log("y value is",y);


//     return x-y
// }
// console.log(sub());

//!Arrow function
// const functionName=() =>{

// }

const sayHello=() =>{
    console.log("Hello Everyone")
}
// sayHello()

//!Anonymous Function
// const variable= function(){
//     //instruction
// }

// const multiple= function(){
//     console.log(10*2);
// }
// multiple()

//!Callback Function
// ()=>{

// }

//?forEach LOOP
//array.forEach(callbackFunction)

let arr=[1,2,3,4,5,6,7,8,9]
// arr.forEach((x)=> console.log(x));

// arr.forEach((x,i)=> {
//      console.log("value of x",x);
//      console.log("value of I",i);
//     });


let marks=[30,40,50,60,70]
let newMarks=marks.forEach((mark)=>{
    return mark+5

})
console.log(newMarks);  //cannot use return

//!map()
let updatedMarks=marks.map((mark,i)=>{
    console.log(mark);
     console.log(i);
     return mark+5
}
)
console.log(updatedMarks);

let mark=marks.map((mark)=>{
    if(mark>=55){
        console.log(mark);
        return mark
        }

})

//!filter()
const filterMarks=marks.filter((mark)=>{
    return mark>=55
}
)
console.log(filterMarks);


//!reduce()
let total=marks.reduce((sum,mark)=>
    sum+mark,0)
console.log(total);


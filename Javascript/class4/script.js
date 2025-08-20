// conditional statement
//1. If statement
//let age=10
// if(age>=18){
//     console.log("you are adult");
// }

//2.if..else statement
// if(age>=18){
//     console.log("you are adult");
// }
// else{
//     console.log("yor are minor");
// }

//3. else..if statement
// if(age>=18){
//      console.log("you are adult");
//  }else if(age>0 && age <18){
//      console.log("yor are minor");
//  }
//  else{
//      console.log("invalid age");
//  }

// time=20
// if(time>0 && time<12){
//     console.log("morning");
// }else if(time>=12 && time0<=16){
// //     console.log("afternoon");
// // }

// //4.switch case
// let val=2
// switch(val){
//     case 1:
//         console.log("case one");
//         break
//      case 2:
//         console.log("case two");
//         break
//      case 3:
//         console.log("case three");
//         break
//      case 4:
//         console.log("case four");
//         break; 
//     default:
//            console.log("default");         

// }


//ARRAY INBUILT METHODS

//1.push()- insert  numbers of elements
// arr.push()

// let arr=[1,2,3,4,5,6,7,8,undefined,null,true,9,10]
//  console.log(arr);
// arr.push(9,10,true)
// console.log(arr);

// 2.pop()-delete single element
// arr.pop()
// console.log(arr);

//3.unshift()-insert in starting element
// arr.unshift("hi",undefined,null)
// console.log(arr);

//4.shift()-delete an element
// arr.shift()
// console.log(arr);

//5.splice()-perform different task
// arr.splice(2,0,"hi","hello",true)  //add new element
// console.log(arr);

// arr.splice(1,2,"hi","hello",true) //replace element
// console.log(arr);

// arr.splice(3,3) //delete element
// console.log(arr);

//6.slice()-
//let subArr=arr.slice(2,8)
// let subArr=arr.slice(8)
// console.log(subArr);

//7.include()-return value in boolean
// console.log(arr.includes(1));

//8.reverse()-
// arr.reverse(arr)
// console.log(arr);

//9.toString()-
// let strArr=arr.toString()
// console.log(strArr);

//STRING AND IT'S INBUILT METHODS
// let name="sunita"
// let age=23
// console.log("My name is ",name,"and my age is",age);

//template string
// console.log(`Hello everyone`);

//template literals
// console.log(`My name is `,name,`and my age is`,age);

//INBUILT METHODS
let str="lorem ipsum dhdc hbshxbash jbxjsxsjk "

//toUpperCase()-
console.log(str.toUpperCase());

//toLowerCase()-
console.log(str.toLowerCase());

//indexOf()-
console.log(str.indexOf("o"));

//lastIndexOf()-
console.log(str.lastIndexOf("m"));

//charAt()-
console.log(str.charAt(2));

//slice()-
console.log(str.slice(1,5));

//replace()-
let subStr=str.replace("o","a")
console.log(subStr);

//replaceAll()-
let rplcStr=str.replaceAll("lorem","a")
console.log(rplcStr);

//trim()-
console.log(str.trim());

//length()-
console.log(str.length);

//split()-
// let arrStr=str.split(" ")
// console.log(arrStr);

let arrStr=str.split("")
console.log(arrStr);





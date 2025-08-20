//LOOPING STATEMENT

//FOR LOOP

// for(initialisation;Condition;iteration/updation){

// }

// for(let i=0;i>10;i++){
//     console.log(i);

// }

// let marks=[90,50,60,30,40,20]
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }

//WHILE LOOP

// initialisation
// while(condition){
//     //instruction
// updation
// }
// let i=0
// while(i<10){
//     console.log(i);
//     i++
// }


//DO...WHILE LOOP

// initialisation
// do{
//     updation

// }while(condition)

// let j=0
// do{
//     console.log(i);
//     j++

// }while(j>20)    


//FOR-OF LOOP

// for(iterator of collection){

// }

//  let str='hello'
//  for(let str1 of str){
//     console.log(str1);
//  }

//  let marks=[90,50,60,30,40,20]
//  for(let m of marks){
//     console.log(m);
//  }


//FOR-IN LOOP:

// for(iterator in object){

//  }


// let obj={
//     name:"sunita",
//     age:23,
//     mark:90,
//     address:"bbsr"
// }
// for(let key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }

//ARRAY INBUILT METHODS

//1.push()- insert  numbers of elements
// arr.push()

let arr=[1,2,3,4,5,6,7,8]
console.log(arr);
arr.push(9,10,true)
console.log(arr);

// 2.pop()-delete single element
arr.pop()
console.log(arr);

//3.unshift()-insert in starting element
arr.unshift("hi",undefined,null)
console.log(arr);

//4.shift()-delete an element
arr.shift()
console.log(arr);


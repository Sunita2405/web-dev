//!DOM -Document object model
 //console.log(window);
  //console.log(document);

//!DOM Selection methods
//?getElementById()  
const heading= document.getElementById("heading")
//console.log(heading);  //it cant be duplicate

//?getElementsByClassName()
const paragraph=document.getElementsByClassName("para")
//console.log(paragraph);

//?getElementsByTagName()
const elements=document.getElementsByTagName("p")
//console.log(elements);

//?getElementsByName()
const email=document.getElementsByName("email")
//console.log(email);
const pass=document.getElementsByName("password")
//console.log(pass);

//?querySelector()
const headingEle=document.querySelector("#heading")
console.log(headingEle);
const paragraphEle=document.querySelector(".para")
console.log(paragraphEle);
const element=document.querySelector("p")
console.log(element);

//?querySelectorAll()
const allPara=document.querySelectorAll(".para")
console.log(allPara);



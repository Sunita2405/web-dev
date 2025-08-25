//!Attribute Manipulation
const headingEl=document.getElementById("heading")
//console.log(headingEl);
//console.log(headingEl.getAttribute("class"));

const subhead=document.getElementById("subhead")
subhead.setAttribute("class","subheading p1 p2 p3")
console.log(subhead);

let imageEl=document.getElementById("productImg")
imageEl.setAttribute("src","https://cdn.pixabay.com/photo/2017/09/13/17/03/technology-2746212_640.jpg")

imageEl.setAttribute("src","https://cdn.pixabay.com/photo/2015/02/16/14/34/iphone-6-plus-638374_640.jpg")

//?InnerHTML
//?InnerText
//?textContent

subhead.innerHTML="Inner HTML Property"
subhead.innerText="Inner Text Property"
subhead.textContent="text content property"

const box=document.querySelector(".box")
box.innerHTML=`
<h1>This is a box</h1>
`
box.style.backgroundColor="red"
box.style.color="white"

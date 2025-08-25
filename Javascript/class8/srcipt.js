// createElement("")
// append()
// prepend()
// after()
// Before()


//insert a new element
// const heading=document.createElement("h2")
// heading.textContent="This is a new element created by using createElement()"
// console.log(heading);

// const box= document.querySelector(".div")
//box.append(heading)
// box.prepend(heading)
// box.before(heading)
// box.after(heading)
// box.appendChild(heading)
// console.log(box)


//delete an element
// box.remove()

//?promt()
// let name= prompt("Enter youe name")
// console.log(name);

//?Alert()
// alert("Warning")
// alert("Document is empty")

// //!Event and Event Handling -change in state
// const container=document.getElementsByClassName("container")
// console.log(container);
// container[0].innerHTML="hello"

// container[0].style.color="red"
// container[0].onmouseenter = () => {
//     container[0].style.color="red"
//     container[0].style.backgroundColor="black"
// }

// container[0].onclick = () => {
//     container[0].style.color="red"
//     container[0].style.backgroundColor="black"
// }                                                                      
 
// function handleChange(){
//      container[0].style.color="green"
//     container[0].style.backgroundColor="black"
// }


const btn=document.getElementsByTagName("button")
console.log(btn);
 btn[0].style.height="100vh"
 btn[0].style.width="100vw"
 btn[0].style.backgroundColor="black"
 btn[0].style.color="white"

 btn[0].onclick = () => {
    if(btn[0].style.backgroundColor=="white"){
       btn[0].style.color="white"
     btn[0].style.backgroundColor="black"
    }
    else{
         btn[0].style.color="black"
     btn[0].style.backgroundColor="white"

    }
    
 }  





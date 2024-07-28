// creation.js

// <h1>Main section</h1> ///////
let head = document.createElement("h1");
document.querySelector("#newbody").appendChild(head);

let texHead = document.createTextNode("Main section");
head.appendChild(texHead);

// create attribute by method
// <h1 class="red">Main section</h1> ///////
let attHead = document.createAttribute("class"); // class=""
attHead.value = 'red'
head.setAttributeNode(attHead)

// Change class each X seconds
setInterval(()=>{
    attHead.value = (attHead.value == 'green') ? 'red' : 'green'
}, 1000)
//스크립트를 통해 만들어진 DOM
const newP = document.createElement("p");
const textNode = document.createTextNode("Node.js");

newP.appendChild(textNode);
document.body.appendChild(newP);

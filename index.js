// Write your code here!
// const element1 = document.createElement('div');

// document.body.append(element1);
// const ul = document.createElement("ul");
// for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
// }
// element1.append(ul);
// const ulRemoved = document.getElementsByTagName("ul")[0];
// const secondChild = ulRemoved.querySelector("li:nth-child(2)");
// ulRemoved.removeChild(secondChild);
// ulRemoved.remove();

const element = document.getElementById("main");
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.style.borderRadius = "20px";
element.style.boxShadow = "2px 2px 5px gray";

element.textContent = "You've changed what's on the screen!";

element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

element.className = "pet-listing dog";

element.classList.remove("dog");
element.classList.add("cat", "sale");


// removes the main element
element.remove();

// gets the body element
const body = document.querySelector("body");
//creates an element that has an id

const newHeader = document.createElement("h1");
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "Ivy Murage is the champion"
body.append(newHeader);








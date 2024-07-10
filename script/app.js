//creating an element
// const paragraph = document.createElement("");
// const h1 = document.createElement("");
// const div = document.createElement("");
// const h2 = document.createElement("");

//to avoid the above repetion you can just create a function that creates an element

function createAnElement(element) {
  return document.createElement(element);
}

// const h4 = createAnElement("h4");

// // creating an inner text on the div
// h2.innerText = "i am a h2 tag";
// h1.innerText = "i am a h1 tag";
// div.innerText = "i am a div tag";

function addText(element, text) {
  return (element.innerText = text);
}

function appendChild(child, parent) {
  return parent.appendChild(child);
}

function select(selector) {
  return document.querySelector(selector);
}

function listen(element, event, callback) {
  return element.addEventListener(event, callback);
}

function addAttribute(element, attribute, content) {
  return element.setAttribute(attribute, content);
}

const shoppingList = [];

const ol = select("ol");
listen(document, "DOMContentLoaded", displayItems);

function displayItems() {
  ol.innerHTML = "";
  shoppingList.forEach(createAListItem);
}
function createAListItem(item) {
  const li = createAnElement("li");
  addText(li, item);
  appendChild(li, ol);

  listen(li, "click", toggleChecked);
  function toggleChecked() {
    li.classList.toggle("checked");
  }
}
const form = select("form");
listen(form, "submit", addItem);

function addItem(event) {
  event.preventDefault();
  shoppingList.push(event.target[0].value);

  displayItems();
  event.target.reset();
}
const deleteButton = select(".delete");
listen(deleteButton, "click", clearList);

function clearList() {
  shoppingList.length = 0;
  displayItems();
}

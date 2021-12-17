var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liArray = document.querySelectorAll("li");
var deleteButtons

function inputLength () {
	return input.value.length;
}

function createListElement () {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + ' '));
	let button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.addEventListener("click", deleteListElement);
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick () {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress (event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone (param1) {
	const { target } = param1
	target.classList.toggle("done")
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

liArray.forEach((li, i) => {
	li.addEventListener("click", toggleDone)
})

function deleteListElement (param1) {
	const { target } = param1
	const li = target.parentNode
	li.parentNode.removeChild(li)
}

deleteButtons = document.querySelectorAll("button")
deleteButtons.forEach((button, i) => {
	if (i !== 0) { // don't add event listener to the first button
		button.addEventListener("click", deleteListElement)
	}
})


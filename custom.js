window.onload = init;

function init() {
	//create a variable called button this targets 
	//the add_button id on the dom
	var button = document.getElementById('add_button');
	//the button will click and then createSticky
	button.onclick = createSticky;
	//use the length property of the array/localStorage object 
	//to perform a loop
	for(var i=0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
	//acts as a filter. only local sotrage items with 'sticky'
	//as the key will be used
	if (key.substring(0, 6) == 'sticky') {
		var value = localStorage.getItem(key);
		addStickyToDOM(value);
	}


	function addStickyToDOM(value) {
		var stickies = document.getElementById('stickies');
		var sticky = document.createElement('li');
		var span = document.createElement('span');
		//give class name of sticky to span (add new attribute and value)
		//to span element 
		span.setAttribute('class', 'sticky');
		//write value in span element
		span.innerHTML = value;
		//in the list item (li) add span 
		sticky.appendChild(span);
		//in the sticky id element(ul) add li 
		stickies.appendChild(sticky);
	}

function createSticky() {
	//input text to the sticky note
	var value = document.getElementById('note_text').value;
	//set up localstorage name & data(dynamic name as it has increasing length)
	var key = 'sticky_' + localStorage.length;
	localStorage.setItem(key, value);

	addStickyToDOM(value);

}
}


//end
}
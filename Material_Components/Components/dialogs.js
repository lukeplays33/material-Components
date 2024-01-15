import {closePopup} from './functions/dialog.js';
// Create a class for the element
class PopUp extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();

		let holder = this;
		holder.className = 'dialog';

		addBackdrop(this);
		addBody(this);
		closePopup(this);

	}
}

// Define the new element
customElements.define('pop-up', PopUp);

			export {PopUp}


function addBackdrop (element) {
	let backdrop = document.createElement('div');
	backdrop.className = 'dialog-backdrop';
	backdrop.appendChild(element);

	if(element.getAttribute('backdropClose') == 'true') {
		backdrop.onclick = function () {
			closePopup(element);
		}
	}

	document.body.appendChild(backdrop);
}

function addButtons (element) {
	let buttonHolder = document.createElement('div');
	buttonHolder.className = 'dialogButtonHolder';

	buttonHolder.appendChild(addAcceptButton(element));
	buttonHolder.appendChild(addCancelButton(element));
}

function addAcceptButton (element) {
	let acceptButton = document.createElement('input');
	acceptButton.type = 'submit';
	acceptButton.innerHTML = element.getAttribute('acceptText');

	acceptButton.onclick = function (e) {
		e.preventDefault();
		closePopup(element, new Form(element));
	}

	return acceptButton;
}

function addCancelButton (element) {
	let cancelButton = document.createElement('button');
		cancelButton.className = 'cancelButton';
		cancelButton.innerHTML = element.getAttribute('cancelText');

		cancelButton.onclick = function () {
				closePopup(element);
			}

	return cancelButton;
}

function addBody (element) {
	let form = document.createElement('form');

	let body = document.createElement('div');
	body.innerHTML = element.innerHTML;

	form.appendChild(body);

	addButtons(form);

	element.appendChild(form);
}
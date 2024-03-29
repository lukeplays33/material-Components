import { closePopup } from './functions/dialog.js';
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

export { PopUp }

function addBackdrop(element) {
	let backdrop = document.createElement('div');
	backdrop.className = 'dialog-backdrop';
	backdrop.appendChild(element);

	if (element.getAttribute('backdropClose') == 'true') {
		backdrop.onclick = function () {
			closePopup(element);
		}

		element.onclick = function (e) {
			e.stopPropagation();
		}
	}

	document.body.appendChild(backdrop);
}

function addTitle_Message(form, element) {
	let holder = document.createElement('div');
	holder.className = 'dialogInfoHolder';

	let title = document.createElement('p');
	title.className = 'dialogTitle';
	title.innerHTML = element.getAttribute('title');
	element.removeAttribute('title');

	let message = document.createElement('p');
	message.className = 'dialogMessage';
	message.innerHTML = element.getAttribute('message');

	holder.appendChild(title);
	holder.appendChild(message);

	form.appendChild(holder);
}

function addButtons(form, element) {
	let buttonHolder = document.createElement('div');
	buttonHolder.className = 'dialogButtonHolder';

	buttonHolder.appendChild(addCancelButton(element));
	buttonHolder.appendChild(addAcceptButton(form, element));

	form.appendChild(buttonHolder);
}

function addAcceptButton(form, element) { // creates the submit button
	let acceptButton = document.createElement('input');
	acceptButton.className = 'acceptButton';
	acceptButton.type = 'submit';
	acceptButton.value = element.getAttribute('submitText');
	acceptButton.name = element.getAttribute('submitText');

	acceptButton.onclick = function (e) {
		if (!element.hasAttribute('action')) {
			e.preventDefault();
		}
		closePopup(element, new FormData(form));
	}

	return acceptButton;
}

function addCancelButton(element) {
	let cancelButton = document.createElement('button');
	cancelButton.className = 'cancelButton';
	cancelButton.innerHTML = element.getAttribute('cancelText');

	cancelButton.onclick = function (e) {
		e.preventDefault();

		closePopup(element);
	}

	return cancelButton;
}

function addBody(element) {
	let form = document.createElement('form');
	form.style.width = '100%';
	if (element.hasAttribute('action')) {
		form.action = element.getAttribute('action');
		form.method = 'POST';
		form.enctype = 'multipart/form-data';
	}

	let body = document.createElement('div');
	body.innerHTML = element.innerHTML;
	body.className = 'dialogBody';
	element.innerHTML = '';

	addTitle_Message(form, element);
	form.appendChild(body);
	addButtons(form, element);

	element.appendChild(form);
}
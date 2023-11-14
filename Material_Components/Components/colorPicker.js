import {openColorPicker} from './functions/colorPicker.js';

// Create a class for the element
class ColorPicker extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();

	}

	connectedCallback() {

		let holder = this;
		holder.classList  += ' colorPicker';

		holder.style.backgroundColor = holder.value ?? 'var(--md-sys-color-primary)';
		holder.style.color = 'var(--md-sys-color-on-primary)';

		holder.innerHTML = holder.innerHTML == '' ? 'Pick colour' : holder.innerHTML;

		holder.style.padding = '14px';

		holder.style.fontSize = '16px';

		holder.style.height = 'max-content';
		holder.style.width = '100%';
		
		holder.style.borderRadius = '100px';

		holder.style.textAlign = 'center';

		holder.style.borderColor = 'var(--md-sys-color-primary)';
		holder.style.borderWidth = '3px';
		holder.style.borderStyle = 'solid';

		holder.onclick = async function () {
			let val = await openColorPicker( holder.value ?? [79,45,67,1] );

			this.style.backgroundColor = val;
			this.style.borderWidth = '0px';

			val = val.substring(4).replaceAll(')','').replaceAll('(','');
			this.value = val;

			this.onchange();
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.style.backgroundColor = newValue;
	}
}

// Define the new element
customElements.define('color-picker', ColorPicker);

export { ColorPicker }
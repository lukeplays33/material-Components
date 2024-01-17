import { customWindow } from './windowAlternative.js';
import { hexToRgb } from '../utils/hexToRgba.js';

let i;
let r = document.querySelector(':root');

function initSettings(json) {
	window.setTimeout(function () { // find beter alternative for this
		for (i of Object.keys(json)) {
			customWindow[i] = json[i];
			onChange(i);
		}
	}, 500);
}

function onChange(key) {
	if (key == 'darkTheme') {
		if (customWindow[key]) {
			let rgba = hexToRgb(window.getComputedStyle(r).getPropertyValue('--md-sys-color-primary-container'));

			document.documentElement.style.backgroundColor = 'black';
			document.body.style.backgroundColor = `rgba(${rgba}, 0.3)`;
		} else {
			let rgba = hexToRgb(window.getComputedStyle(r).getPropertyValue('--md-sys-color-tertiary'));

			document.documentElement.style.backgroundColor = 'white';
			document.body.style.backgroundColor = `rgba(${rgba}, 0.1)`;
		}
	}
}

window.onload = function () {
	for (i of document.getElementsByClassName('navigator')) {
		i.firstChild.click();
	}
}

export { initSettings }
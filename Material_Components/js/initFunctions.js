import { customWindow } from './windowAlternative.js';
import { hexToRgbA } from '../utils/hexToRgba.js';

let i;
let r = document.querySelector(':root');

function initSettings(json) {
	window.setTimeout(function () { // find beter alternative for this
		for (i of Object.keys(json)) {
			customWindow[i] = json[i];
			onChange(i);
		}
	}, 1000);
}

function onChange(key) {
	let rgba = hexToRgbA(window.getComputedStyle(r).getPropertyValue('--md-sys-color-primary-container'));
	if (key == 'darkTheme') {
		alert(rgba);
		if (customWindow[key]) {
			document.documentElement.style.backgroundColor = 'black';
			document.body.style.backgroundColor = `rgba(${rgba}, 0.3)`;
		} else {
			document.documentElement.style.backgroundColor = 'white';
			document.body.style.backgroundColor = rgba(${rgba}, 0.4)`;;
		}
	}
}

window.onload = function () {
	for (i of document.getElementsByClassName('navigator')) {
		i.firstChild.click();
	}
}

export { initSettings }
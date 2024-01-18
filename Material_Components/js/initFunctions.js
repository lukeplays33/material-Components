import { customWindow } from './windowAlternative.js';
import { hexToRgb } from '../utils/hexToRgba.js';

import { generateColors } from './js/materialColorGen.js';

let i = 0;
let r = document.querySelector(':root');

function initSettings(json) {
	window.setTimeout(function () { // find beter alternative for this
		let settings = Object.keys(json);
		for (i = 0; i < settings.length; i++) {
			let item = json[settings[i]];

			customWindow[item] = json[item];
			onChange(item);
		}
	}, 800);
}

function onChange(key) {
	generateColors();

	if (key == 'darkTheme') {
		if (customWindow[key]) {
			let rgba = hexToRgb(window.getComputedStyle(r).getPropertyValue('--md-sys-color-primary-container'));

			document.documentElement.style.backgroundColor = 'black';
			document.body.style.backgroundColor = `rgba(${rgba}, 0.3)`;
		} else {
			let rgba = hexToRgb(window.getComputedStyle(r).getPropertyValue('--md-sys-color-primary'));

			document.documentElement.style.backgroundColor = 'white';
			document.body.style.backgroundColor = `rgba(${rgba}, 0.3)`;
		}
	}
}

window.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', ({ matches }) => {
		generateColors();
	})

window.onload = function () {
	for (i of document.getElementsByClassName('navigator')) {
		i.firstChild.click();
	}
}

export { initSettings }
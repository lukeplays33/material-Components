import { customWindow } from './windowAlternative.js';
import { hexToRgb } from '../utils/hexToRgba.js';

import { generateColors } from '../js/materialColorGen.js';

let i = 0;
let r = document.querySelector(':root');

function initSettings(json) {
	if (document.querySelectorAll('meta[name="theme-color"]').length > 0) {
		var meta = document.createElement('meta');
		meta.name = "theme-color";
		meta.content = "#4285f4";
		document.getElementsByTagName('head')[0].appendChild(meta);
	}

	window.setTimeout(function () { // find beter alternative for this
		let settings = Object.keys(json);
		for (i = 0; i < settings.length; i++) {
			let item = settings[i];

			customWindow[item] = json[item];
			onSettingsChange(item);
		}

		generateColors();
	}, 800);
}

function onSettingsChange(key) {
	if (key == 'darkTheme') {
		if (customWindow[key]) {
			let rgba = hexToRgb(window.getComputedStyle(r).getPropertyValue('--md-sys-color-primary-container'));

			document.documentElement.style.backgroundColor = 'black';
			document.body.style.backgroundColor = `rgba(${rgba}, 0.30)`;
		} else {
			let rgba = hexToRgb(window.getComputedStyle(r).getPropertyValue('--md-sys-color-primary'));

			document.documentElement.style.backgroundColor = 'white';
			document.body.style.backgroundColor = `rgba(${rgba}, 0.30)`;
		}

		document.querySelector(':root').style.setProperty('--md-sys-color-background', document.body.style.backgroundColor); //change the background color to the custom generated color
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

export { initSettings, onSettingsChange }
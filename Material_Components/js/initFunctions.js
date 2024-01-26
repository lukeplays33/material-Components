import { customWindow } from './windowAlternative.js';
import { colourBlend } from '../utils/blendColours.js';

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
	let mainColour = window.getComputedStyle(r).getPropertyValue('--md-sys-color-primary-container');

	if (key == 'darkTheme') {
		if (customWindow[key]) {
			document.body.style.backgroundColor = colourBlend('#000000', mainColour, 0.5);
		} else {
			document.body.style.backgroundColor = colourBlend('#ffffff', mainColour, 0.5);
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

export { initSettings, onSettingsChange }
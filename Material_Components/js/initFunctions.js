import { customWindow } from './windowAlternative.js';
import { colourBlend } from '../utils/blendColours.js';

import { generateColors } from '../js/materialColorGen.js';

let i = 0;
let r = document.querySelector(':root');

window.onload = function () {
    alert()
    if (inIframe()) {
        customWindow['themeColour'] = getComputedStyle(window.top.document.querySelector(':root')).getPropertyValue('--md-sys-color-source');
        console.log(customWindow['themeColour'])
    }
}

function initSettings(json) {
	let settings = Object.keys(json);
	for (i = 0; i < settings.length; i++) {
		let item = settings[i];

		customWindow[item] = json[item];
		onSettingsChange(item);
	}

	generateColors();

	return customWindow;
}

function onSettingsChange(key) {
	if(customWindow['colourGeneration'] == 'Sketch') { //check whether the custom colour geneartion should be used

	let priamryColour = window.getComputedStyle(r).getPropertyValue('--md-sys-color-primary-container');
	let mainColour;

	if (key == 'darkTheme') {
		if (customWindow[key]) { //check wheter black or white should be used
			mainColour = '#000000';
		} else {
			mainColour = '#ffffff';
		}

		r.style.setProperty('--md-sys-color-background', colourBlend(mainColour, priamryColour, 0.3));
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
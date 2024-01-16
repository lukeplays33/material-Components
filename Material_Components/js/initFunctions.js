import { customWindow } from './windowAlternative.js';

let i;
let r = document.querySelector(':root');

function initSettings (json) {
	for(i of Object.keys(json)) {
		customWindow[i] = json[i];
		onChange(i);
	}
}

function onChange (key) {
	let rgba = window.getComputedStyle(r).getPropertyValue('--md-sys-color-primary-container').replaceAll('rgb(','').replaceAll(')')
	if(key == 'darkTheme') {
		alert(rgba);
		if(customWindow[key]) {
			document.documentElement.style.backgroundColor = 'black';
			document.body.style.backgroundColor = 'color-mix( in srgb, var(--md-sys-color-primary-container) 30%, transparent);';
		} else {
			document.documentElement.style.backgroundColor = 'white';
			document.body.style.backgroundColor = 'color-mix( in srgb, var(--md-sys-color-tertiary-container) 40%, transparent);';
		}
	}
}

window.onload = function () {
	for(i of document.getElementsByClassName('navigator')) {
		i.firstChild.click();
	}
}

export { initSettings }
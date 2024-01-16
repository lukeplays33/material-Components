import { customWindow } from './windowAlternative.js';

let i;

function initSettings (json) {
	for(i of Object.keys(json)) {
		customWindow[i] = json[i];
		onChange(i);
	}
}

function onChange (key) {
	if(key == 'darkTheme') {
		if(customWindow[key]) {
			document.documentElement.style.backgroundColor = 'black';
			document.body.style.backgroundColor = 'color-mix( in srgb, var(--md-sys-color-primary-container) 30%, transparent);'
		} else {
			document.documentElement.style.backgroundColor = 'white';
			document.body.style.backgroundColor = 'background-color:color-mix( in srgb, var(--md-sys-color-tertiary-container) 50%, transparent);'
		}
	}
}

window.onload = function () {
	for(i of document.getElementsByClassName('navigator')) {
		i.firstChild.click();
	}
}

export { initSettings }
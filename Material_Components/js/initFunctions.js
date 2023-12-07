import { customWindow } from './windowAlternative.js';

let i;

function initSettings (json) {
	for(i of Object.keys(json)) {
		customWindow[i] = json[i];
	}
}

window.onload = function () {
	for(i of document.getElementsByClassName('navigator')) {
		i.firstChild.click();
	}
}

export { initSettings }
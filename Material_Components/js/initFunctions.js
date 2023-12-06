import { customWindow } from './windowAlternative.js';

let i;

function initSettings (json) {
	for(i of Object.keys(json)) {
		customWindow[i] = json[i];
	}
}

export { initSettings }
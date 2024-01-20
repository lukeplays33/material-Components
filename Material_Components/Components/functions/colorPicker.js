import { hexAToRGBA } from './utils.js';

import { PopUp } from '../dialogs.js';

function openColorPicker (startColor) {
	if(startColor == null) {
	startColor = [Math.floor(Math.random() * 255) +1, Math.floor(Math.random() * 255) +1, Math.floor(Math.random() * 255) +1,1.0];
	}

	if(String(startColor).includes('#')) {
		 startColor = hexAToRGBA(startColor).replaceAll('rgba(','').replaceAll(')','');
	}

	try {
	startColor = String(startColor).split(', ');
	}catch(e){}
	
	 return new Promise((resolve) => {
		 let dialog = document.createElement('dialog');

	dialog.style.position = 'fixed';
	dialog.style.width = '30%';
	dialog.style.minheight = '50%';
	dialog.style.display = 'flex';
	dialog.style.flexDirection = 'column';
	dialog.style.overflow = 'hidden';

	dialog.style.columnGap = '16px';

	dialog.onclick = function(e) {
	if(e.target != dialog) {} else {
		dialog.remove();      
	}
	}

	let header = document.createElement('h1');
	header.innerHTML = 'Pick a color';
	header.style.width = 'calc(100% - 64px)';
	header.style.textAlign = 'center';
	header.style.margin = '16px';
	header.style.borderRadius = '27px';
	header.style.padding = '16px';

	let txtR = document.createElement('h3');
		txtR.innerHTML = 'Red';
		txtR.style.width = '100%';
	txtR.style.margin = '16px';

	let R = document.createElement('input');
	R.type = 'range';
	R.min = 0;
	R.max = 255;
	R.value = startColor[0];

	R.oninput = function () {
		header.style.backgroundColor = 'rgba(' + R.value + ', ' + G.value + ', ' + B.value + ', ' + A.value + ')';
	}

	let txtG = document.createElement('h3');
		txtG.innerHTML = 'Green';
		txtG.style.width = '100%';
	txtG.style.margin = '16px';

	let G = document.createElement('input');
	G.type = 'range';
	G.min = 0;
	G.max = 255;
	G.value = startColor[1];

	G.oninput = function () {
		header.style.backgroundColor = 'rgba(' + R.value + ', ' + G.value + ', ' + B.value + ', ' + A.value + ')';
	}

	let txtB = document.createElement('h3');
		txtB.innerHTML = 'Blue';
		txtB.style.width = '100%';
	txtB.style.margin = '16px';

	let B = document.createElement('input');
	B.type = 'range';
	B.min = 0;
	B.max = 255;
	B.value = startColor[2];

	B.oninput = function () {
		header.style.backgroundColor = 'rgba(' + R.value + ', ' + G.value + ', ' + B.value + ', ' + A.value + ')';
	}

	let txtA = document.createElement('h3');
		txtA.innerHTML = 'Alpha';
		txtA.style.width = '100%';
	txtA.style.margin = '16px';

	let A = document.createElement('input');
	A.type = 'range';

	A.step = 0.01;
	
	A.min = 0;
	A.max = 1;
	
	A.value = startColor[3] ?? 1;

	A.oninput = function () {
		header.style.backgroundColor = 'rgba(' + R.value + ', ' + G.value + ', ' + B.value + ', ' + A.value + ')';
	}

	let holder = document.createElement('div');
	holder.style.paddingTop = '16px';
	holder.style.display = 'flex';
	holder.style.justifyContent = 'flex-end';

	let cancel = document.createElement('button');
	cancel.innerHTML = 'Cancel';
	cancel.className = 'cancelButton';
	cancel.style.marginRight = '8px';
	cancel.style.width = 'min-content';

	cancel.onclick = function () {
		dialog.remove();
	}
	
	holder.appendChild(cancel);

	let save = document.createElement('button');
	save.innerHTML = 'Save';
	holder.appendChild(save);

		 save.onclick = function () {
			 resolve(header.style.backgroundColor);
			 dialog.remove();
		 }

	dialog.appendChild(header);
	header.style.backgroundColor = 'rgba(' + R.value + ', ' + G.value + ', ' + B.value + ', ' + A.value + ')';
	
	dialog.appendChild(txtR);
	dialog.appendChild(R);
	
	dialog.appendChild(txtG);
	dialog.appendChild(G);

	dialog.appendChild(txtB);
	dialog.appendChild(B);

	dialog.appendChild(txtA);
	dialog.appendChild(A);

	dialog.appendChild(holder);
	
	document.body.appendChild(dialog);
	dialog.showModal();
	 });
}

export { openColorPicker }
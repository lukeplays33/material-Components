class OptionItem extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

		let img = document.createElement('i');
		img.innerHTML = this.getAttribute('img')
		img.className = 'itemImg'
		img.classList += ' material-icons';

		let name = document.createElement('p');
		name.classList += 'itemName';
		name.innerHTML = this.innerHTML;
		this.innerHTML = '';

		// Attach the created elements to the shadow dom
		this.appendChild(img);
		this.appendChild(name);

		this.onmouseover = function () {
			let comp = window.getComputedStyle(this);
			this.setAttribute('opacity',comp['opacity']);
			this.style.opacity = '0.5';
		}

		this.onmouseout = function () {
			this.style.opacity = this.getAttribute('opacity');
		}

		this.onclick = function (e) {
			e.stopPropagation();

			for(let i of this.parentNode.children) {
				if(i.className == 'selected') {
					i.className = ''
				}
			}

			this.className = 'selected';
			try {
			this.parentNode.onchange(this.children[1].innerHTML);
			}catch(e) {console.log(e)}
		}

  }
}

// Define the new element
customElements.define('option-item', OptionItem);

export {OptionItem}
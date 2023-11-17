// Create a class for the element
class NavigationBar extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

		let holder = this;
		holder.className = 'navigationbarHolder'
		
		holder.style.width = '90px';
		holder.style.height = 'calc(100% - 24px)';
		holder.style.backgroundColor = 'var(--md-sys-color-tertiary-container)';
		holder.style.borderRadius = '27px';
		holder.style.margin = '8px';
		holder.style.marginRight = '0px';
		holder.style.display = 'flex';
		holder.style.flexDirection = 'column';

		//select first option 
		this.firstChild.click();
  }
}

// Define the new element
customElements.define('navigation-bar', NavigationBar);

			export {NavigationBar}
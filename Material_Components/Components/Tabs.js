// Create a class for the element
class NavigationTabs extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();

		let holder = this;
		holder.className = 'navigationTabsHolder navigator';

		holder.style.minHeight = '45px';
		holder.style.width = '100%';
		holder.style.borderWidth = '2px';
		holder.style.borderStyle = 'solid';
		holder.style.borderColor = 'var(--md-sys-color-primary)';
		holder.style.borderRadius = '100px';
		holder.style.display = 'flex';
		holder.style.flexDirection = 'row';

	}
}

// Define the new element
customElements.define('navigation-tabs', NavigationTabs);

export { NavigationTabs }
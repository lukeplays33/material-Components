let customWindow = {
	darkTheme: window.matchMedia("(prefers-color-scheme: dark)").matches,
	themeColour: document.querySelector('meta[name="theme-color"]').getAttribute('content'),
};

export { customWindow }
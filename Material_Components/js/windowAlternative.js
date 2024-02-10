let colour = '#008dcd';

function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

if(inIframe()) {
	colour = window.top.document.body;
	alert(colour);
}

let customWindow = {
	darkTheme: window.matchMedia("(prefers-color-scheme: dark)").matches,
	themeColour: colour,
	colourGeneration:'Sketch'
};

export { customWindow }
import { inIframe } from '../utils/iframe.js';

let colour = '#008dcd';
let themeStyle = 'Sketch';

window.self.onload = function () {
    alert()
    if (inIframe()) {
        colour = getComputedStyle(window.top.document.querySelector(':root')).getPropertyValue('--md-sys-color-source');
        console.log(colour)
    }
}

let customWindow = {
    darkTheme: window.matchMedia("(prefers-color-scheme: dark)").matches,
    themeColour: colour,
    colourGeneration: themeStyle
};

export { customWindow }
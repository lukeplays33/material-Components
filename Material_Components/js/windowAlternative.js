import { inIframe } from '../utils/iframe.js';

let colour = '#008dcd';
let themeStyle = 'Sketch';

window.onload = function () {
    if (inIframe()) {
        colour = getComputedStyle(window.top.document.querySelector(':root')).getPropertyValue('--md-sys-color-source');
    }
}

let customWindow = {
    darkTheme: window.matchMedia("(prefers-color-scheme: dark)").matches,
    themeColour: colour,
    colourGeneration: themeStyle
};

export { customWindow }
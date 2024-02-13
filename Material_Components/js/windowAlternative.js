import { generateColors } from '../js/materialColorGen.js';

let colour = '#008dcd';
let themeStyle = 'Sketch';

let customWindow = {
    darkTheme: window.matchMedia("(prefers-color-scheme: dark)").matches,
    themeColour: colour,
    colourGeneration: themeStyle
};

window.onstorage = function () {
    customWindow['themeColour'] = window.sessionStorage.themeColour;
    generateColors();
}

window.onload = function () {
    customWindow['themeColour'] = window.sessionStorage.themeColour;
    generateColors();
}

export { customWindow }
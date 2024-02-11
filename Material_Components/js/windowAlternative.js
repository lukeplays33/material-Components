import { inIframe } from '../utils/iframe.js';

let colour = '#008dcd';
let themeStyle = 'Sketch';

let customWindow = {
    darkTheme: window.matchMedia("(prefers-color-scheme: dark)").matches,
    themeColour: window.sessioNStorage.themeColour ?? colour,
    colourGeneration: themeStyle
};

export { customWindow }
import { customWindow } from './windowAlternative.js';

import { Hct, argbFromHex, themeFromSourceColor, applyTheme  } from "https://cdn.skypack.dev/@material/material-color-utilities@0.2.4";

let theme = ''

window.setInterval(function () {
    var metaThemeColor = document.querySelector("meta[name=theme-color]");

// Get the theme from a hex color
 theme = themeFromSourceColor(argbFromHex(metaThemeColor.getAttribute("content")), [
  {
    name: "custom-1",
    value: argbFromHex("#ff0000"),
    blend: true,
  },
]);

// Check if the user has dark mode turned on
const systemDark = customWindow['darkTheme'];

// Apply the theme to the body by updating custom properties for material tokens
applyTheme(theme, {target: document.querySelector(':root'), dark: systemDark});

	metaThemeColor.setAttribute("content",getComputedStyle(document.querySelector(':root')).getPropertyValue('--md-sys-color-primary'))
},1);
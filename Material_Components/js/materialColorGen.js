import { customWindow } from '../js/windowAlternative.js';

import { Hct, argbFromHex, themeFromSourceColor, applyTheme } from "https://cdn.skypack.dev/@material/material-color-utilities@0.2.4";

import { onSettingsChange } from './initFunctions.js';

let theme = ''

function generateColors() {
  let metaThemeColor = customWindow['themeColour'];

  // Get the theme from a hex color
  theme = themeFromSourceColor(argbFromHex(metaThemeColor), [
    {
      name: "custom-1",
      value: argbFromHex("#ff0000"),
      blend: true,
    },
  ]);

  // Check if the user has dark mode turned on
  const systemDark = customWindow['darkTheme'];

  // Apply the theme to the body by updating custom properties for material tokens
  applyTheme(theme, { target: document.querySelector(':root'), dark: systemDark });
  onSettingsChange('darkTheme'); // makes sure the theme colour changes properly after new colours have been created

  metaThemeColor = document.querySelector('meta[name="theme-color"]');
  metaThemeColor.setAttribute("content", getComputedStyle(document.querySelector(':root')).getPropertyValue('--md-sys-color-primary'));

  document.querySelector(':root').style.setProperty('--md-sys-color-source', customWindow['themeColour']);
}

export { generateColors }
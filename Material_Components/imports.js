import { initSettings } from './js/initFunctions.js';
import { generateColors } from './js/materialColorGen.js';

import { ColorPicker } from './Components/colorPicker.js';
import { NavigationBar } from './Components/NavigationBar.js';
import { OptionItem } from './Components/OptionItem.js';
import { NavigationTabs } from './Components/Tabs.js';

import { openColorPicker } from './Components/functions/colorPicker.js';

generateColors();

export { initSettings, NavigationTabs, OptionItem, NavigationBar, ColorPicker, openColorPicker }
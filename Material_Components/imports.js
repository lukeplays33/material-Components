import { generateColors } from './js/materialColorGen.js';
generateColors();

import { initSettings } from './js/initFunctions.js';

import { ColorPicker } from './Components/colorPicker.js';
import { NavigationBar } from './Components/NavigationBar.js';
import { OptionItem } from './Components/OptionItem.js';
import { NavigationTabs } from './Components/Tabs.js';
import { PopUp } from './Components/dialogs.js';

import { openColorPicker } from './Components/functions/colorPicker.js';
import { closePopup, openPopup } from './Components/functions/dialog.js';

export { initSettings, NavigationTabs, OptionItem, NavigationBar, ColorPicker, openColorPicker, PopUp, closePopup, openPopup }
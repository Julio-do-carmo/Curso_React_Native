/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './src/App';
import navigation from './src/navigation';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => navigation);

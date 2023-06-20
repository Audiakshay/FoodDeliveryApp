/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import MockInterview from './src/MockInterview';

AppRegistry.registerComponent(appName, () => MockInterview);

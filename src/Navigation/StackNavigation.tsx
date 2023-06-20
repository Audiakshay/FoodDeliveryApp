import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Flash from '../Screens/Flash';
import Register from '../Screens/Register';
import Login from '../Screens/Login';
import BottomTabNavigation from './BottomTabNavigation';
import Menu from '../Screens/Menu';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Flash"
          component={Flash}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

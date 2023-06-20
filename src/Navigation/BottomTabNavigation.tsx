/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dishes from '../Screens/BottomTabs/Dishes';
import Profile from '../Screens/BottomTabs/Profile';
import {Dimensions, Image} from 'react-native';
// import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();
const dimension = Dimensions.get('window').width;
const BottomTabNavigation = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {height: dimension / 7},
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: dimension / 30,
          color: '#000000',
        },
        tabBarIcon: ({focused, size}) => {
          let iconName;
          if (route.name === 'Dishes') {
            iconName = focused
              ? require('../../assets/soupDark.png')
              : require('../../assets/soupLight.png');
            size = focused ? dimension / 13 : dimension / 18;
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('../../assets/userDark.png')
              : require('../../assets/userLight.png');
            size = focused ? dimension / 15 : dimension / 19;
          }
          return (
            <Image
              source={iconName}
              style={{
                height: size,
                width: size,
              }}
            />
          );
        },
      })}>
      <Tab.Screen
        name="Dishes"
        component={Dishes}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{header: () => null}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

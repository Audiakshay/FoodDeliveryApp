import {View, Text, PermissionsAndroid, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import axiosInstance from '../utils/AxiosInstance';

const Location = () => {
  const locationGrant = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Food delivery App Loaction Permission',
          message:
            'Food delivery App needs access to your camera ' +
            'so you can enjoy your lovely.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    locationGrant();
  }, []);
  return (
    <View>
      <Text>Location</Text>
      <TouchableOpacity
        onPress={getLocation}
        style={{
          width: 150,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2242D8',
        }}>
        <Text style={{color: '#fff'}}>get current location</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Location;

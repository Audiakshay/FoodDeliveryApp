import {View, StyleSheet, Dimensions, Image} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const dimension = Dimensions.get('window').width;
const Flash = ({navigation}: any) => {
  setTimeout(() => navigation.navigate('Register'), 1500);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/delivery-man.png')}
        style={styles.deliverManImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliverManImage: {
    height: dimension / 3,
    width: dimension / 3,
  },
});
export default Flash;

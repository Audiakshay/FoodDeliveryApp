import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import React from 'react';
import InputField from '../Components/InputField';
// import { useSelector } from 'react-redux';

const dimension = Dimensions.get('window').width;
const Register = ({navigation}: any) => {
  const inputPlaceholder = [
    'Name',
    'Email',
    'Phone',
    'Password',
    'Confirm Password',
  ];
  const btnProps = 'Sign up';
  return (
    <View style={styles.container}>
      {/* Register Page Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/healthy-food.png')}
          style={styles.brandLogo}
        />
        <Text style={styles.greeting}>Signup to become a memeber</Text>
      </View>
      {/* Food safety logo */}
      <Image
        source={require('../../assets/food-safety.png')}
        style={styles.safetyImage}
      />
      {/* InputField component */}
      <InputField
        inputPlaceholder={inputPlaceholder}
        btnProps={btnProps}
        navigateTo="Login"
        navigation={navigation}
        memberNavigate="Login"
        memberDetail="Already member?"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D72C54',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: dimension / 25,
    width: dimension / 2,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
    position: 'relative',
    top: dimension / 10,
  },
  header: {
    width: dimension,
    alignItems: 'center',
  },
  safetyImage: {
    height: dimension / 4,
    width: dimension / 4,
    alignSelf: 'flex-end',
    position: 'relative',
    top: dimension / 30,
    right: dimension / 80,
    zIndex: 1,
    transform: [{rotate: '30deg'}],
  },
  brandLogo: {
    height: dimension / 6,
    width: dimension / 6,
    alignSelf: 'center',
    position: 'relative',
    top: dimension / 8,
    right: dimension / 80,
    zIndex: -1,
  },
});

export default Register;

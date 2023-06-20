import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import React from 'react';
import InputField from '../Components/InputField';

const dimension = Dimensions.get('window').width;
const Login = ({navigation}: any) => {
  const inputPlaceholder = ['Email', 'Password'];
  const btnProps = 'Sign in';
  return (
    <View style={styles.container}>
      {/* Login Page Header */}
      <Image
        source={require('../../assets/healthy-food.png')}
        style={styles.brandLogo}
      />
      <Text style={styles.greeting}>Welcome back...!</Text>
      {/* Food safety logo */}
      <Image
        source={require('../../assets/food-safety.png')}
        style={styles.safetyImage}
      />
      {/* InputField component */}
      <InputField
        inputPlaceholder={inputPlaceholder}
        btnProps={btnProps}
        navigateTo="BottomTabNavigation"
        navigation={navigation}
        memberNavigate="Register"
        memberDetail="Not a member?"
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
    fontSize: dimension / 20,
    fontWeight: '900',
    alignSelf: 'center',
    color: '#FFFFFF',
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
    height: dimension / 4,
    width: dimension / 4,
    alignSelf: 'center',
    position: 'relative',
    top: dimension / 20,
    right: dimension / 80,
    zIndex: -1,
  },
});

export default Login;

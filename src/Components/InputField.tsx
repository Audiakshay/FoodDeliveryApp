import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';

const dimension = Dimensions.get('window').width;
const InputField = ({
  btnProps,
  inputPlaceholder,
  navigateTo,
  navigation,
  memberDetail,
  memberNavigate,
}: any) => {
  const authFunction = async (email, password) => {
    if (email !== '' && password !== '' && btnProps === 'Sign up') {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate(navigateTo);
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }

          // Alert.alert(error.code);
        });
    } else if (email !== '' && password !== '' && btnProps === 'Sign in') {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate(navigateTo);
          AsyncStorage.setItem('token', email);
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }

          Alert.alert(error.code);
        });
    } else {
      Alert.alert('Input cannot be empty');
    }
  };
  return (
    <Formik
      initialValues={{
        Name: '',
        Email: '',
        Phone: '',
        Password: '',
        'Confirm Password': '',
      }}
      onSubmit={val => {
        // console.log(val);
        authFunction(val.Email, val.Password);
      }}>
      {({values, handleChange, handleSubmit}) => (
        <>
          {/* Input field for login and register */}
          <View style={styles.inputContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={inputPlaceholder}
              renderItem={({item}) => (
                <View style={styles.inputs}>
                  <Text style={styles.placeholder}>{item}</Text>
                  <TextInput
                    style={styles.input}
                    value={values[item]}
                    onChangeText={handleChange(item)}
                    placeholder={item}
                    placeholderTextColor="#808080"
                  />
                </View>
              )}
            />
            <Pressable style={styles.registerBtn} onPress={handleSubmit}>
              <Text style={styles.registerBtntext}>{btnProps}</Text>
            </Pressable>
          </View>
          <View style={styles.memberContainer}>
            <Text style={styles.memberYesNo}>{memberDetail}</Text>
            <Pressable onPress={() => navigation.navigate(memberNavigate)}>
              <Text style={styles.loginOrLogout}>
                {memberDetail === 'Already member?' ? 'Sign in' : 'Sign up'}
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: dimension / 30,
    borderRadius: dimension / 20,
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#E90056',
    borderRadius: dimension / 10,
    marginVertical: dimension / 50,
    backgroundColor: '#F5F4F2',
  },
  placeholder: {
    paddingLeft: dimension / 13,
    width: dimension / 2,
    paddingTop: dimension / 60,
    fontWeight: '900',
  },
  input: {
    width: dimension / 1.5,
    paddingLeft: dimension / 20,
    marginHorizontal: dimension / 40,
    fontSize: dimension / 27,
    fontWeight: '700',
    color: '#E90056',
  },
  registerBtn: {
    backgroundColor: '#AE1F40',
    width: dimension / 2,
    height: dimension / 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: dimension / 10,
  },
  registerBtntext: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: dimension / 25,
  },
  memberContainer: {
    flexDirection: 'row',
    height: dimension / 5,
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: dimension / 30,
  },
  memberYesNo: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: dimension / 30,
  },
  loginOrLogout: {
    color: '#99CCFF',
    fontWeight: 'bold',
    fontSize: dimension / 30,
  },
});

export default InputField;

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const WIDTH = Dimensions.get('screen').width;

const Profile = ({navigation}) => {
  const signOut = () => {
    auth().signOut();
    navigation.navigate('Login');
  };

  return (
    <View>
      <View style={styles.cntnr}>
        <View style={styles.myPflCntnr}>
          <Text style={styles.MyproflTxt}>My Profile</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              style={styles.canclBtn}
              source={require('../../../assets/cross.png')}
            />
          </Pressable>
        </View>
        <View style={styles.PrflInfo}>
          <Image
            style={styles.prflImg}
            source={require('../../../assets/businessman.png')}
          />
        </View>
        <View style={styles.EditBtn}>
          <Image
            style={styles.editPencl}
            source={require('../../../assets/edit.png')}
          />
          <Text>Edit profile</Text>
        </View>
      </View>
      <View style={styles.spcfnCntnr}>
        <Text style={styles.spcfcBox}>My orders</Text>
        <Text style={styles.spcfcBox}>My Address</Text>
        <Text style={styles.spcfcBox}>Payments</Text>
        <Text style={styles.spcfcBox}>Settings</Text>
        <Pressable onPress={signOut}>
          <Text style={styles.spcfcBox}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  cntnr: {
    backgroundColor: '#F6BE0070',
    height: WIDTH / 2.3,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center',
  },
  MyproflTxt: {
    fontSize: 25,
    marginTop: 15,
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'space-evenly',
    width: WIDTH / 2.5,
  },
  canclBtn: {
    height: 25,
    width: 25,
    marginTop: 15,
  },
  prflImg: {
    height: 120,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
  },
  EditBtn: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 20,
    alignItems: 'center',
  },
  editPencl: {
    height: 15,
    width: 15,
  },
  PrflInfo: {
    flexDirection: 'row',
  },
  myPflCntnr: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WIDTH / 1.5,
    marginLeft: 100,
    paddingHorizontal: 15,
  },
  custmrInfo: {
    marginTop: 40,
    marginLeft: 10,
  },
  custmrInfoTxt: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  spcfnCntnr: {
    height: WIDTH / 1.5,
    marginTop: 80,
    marginLeft: 10,
  },
  spcfcBox: {
    paddingVertical: 13,
    width: WIDTH / 1.1,
    paddingLeft: 18,
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 25,
    color: '#000000',
    backgroundColor: '#ffffff',
  },
});

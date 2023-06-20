/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';

const dimension = Dimensions.get('window').width;

const Header = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/navigation.png')}
              style={styles.navigationImage}
            />
            <Text
              style={{
                fontSize: dimension / 20,
                fontWeight: 'bold',
                color: '#000000',
              }}>
              Vijayanagara
            </Text>
          </View>
          <Text>North Vijay Nagar, Govindaraja Nagar Ward, Am...</Text>
        </View>
        <View>
          <Image
            source={require('../../assets/profileDp.png')}
            style={styles.dp}
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for dishes & resturants"
        />
        <Image
          source={require('../../assets/search.png')}
          style={styles.searchImg}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  navigationImage: {
    width: dimension / 20,
    height: dimension / 20,
    tintColor: '#EE8D0F',
  },
  dp: {
    width: dimension / 11,
    height: dimension / 11,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: dimension / 20,
  },
  searchContainer: {
    backgroundColor: '#00000020',
    borderRadius: dimension / 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: dimension - 30,
    height: dimension / 7,
    marginHorizontal: dimension / 40,
    marginVertical: dimension / 40,
    gap: dimension - 850,
  },
  input: {
    width: dimension - 80,
    height: dimension / 8,
    borderRadius: dimension / 30,
    paddingLeft: dimension / 20,
    fontSize: dimension / 23,
  },
  searchImg: {
    width: dimension / 20,
    height: dimension / 20,
    tintColor: '#EE8D0F',
  },
});

export default Header;

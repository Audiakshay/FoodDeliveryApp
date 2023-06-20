/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  LogBox,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axiosInstance from '../utils/AxiosInstance';
import Stars from 'react-native-stars';

const dimension = Dimensions.get('window').width;
const Menu = () => {
  const [menu, setMenu] = useState([]);
  console.log(menu);
  const fetchData = async () => {
    const menuData = await axiosInstance.get(
      'https://naveensutar.github.io/FoodData/menuItem.json',
    );
    const resData = await menuData.data;
    console.log('reData', resData?.itemCards);
    setMenu(resData.itemCards);
  };
  useEffect(() => {
    fetchData();
    LogBox.ignoreLogs(['ReactImageView']);
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={menu}
        renderItem={({item}) => (
          <View style={styles.innerContainer}>
            <View>
              <View style={styles.vegNonvegLogo}>
                {item?.card?.info?.category?.includes('veg') ? (
                  <Image
                    source={require('../../assets/veg.png')}
                    style={styles.veg}
                  />
                ) : (
                  <Image
                    source={require('../../assets/nonveg.png')}
                    style={styles.nonVeg}
                  />
                )}
                <Text
                  style={{
                    color: '#E88B11',
                    fontSize: dimension / 25,
                    fontWeight: '500',
                  }}>
                  Bestseller
                </Text>
              </View>
              <View>
                <Text
                  numberOfLines={2}
                  style={{
                    fontWeight: '600',
                    fontSize: dimension / 20,
                    color: '#000000',
                    marginVertical: dimension / 30,
                    width: dimension / 3,
                  }}>
                  {item?.card?.info?.name}
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    color: '#000000',
                    marginVertical: dimension / 40,
                  }}>
                  {item?.card?.info?.itemAttribute?.portionSize}
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    color: '#000000',
                    marginVertical: dimension / 50,
                  }}>
                  ₹{(item?.card?.info?.price / 100).toFixed(2)}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Stars
                    half={true}
                    default={
                      item?.card?.info?.ratings?.aggregatedRating?.rating
                    }
                    spacing={dimension / 70}
                    starSize={dimension / 30}
                    count={5}
                    fullStar={require('../../assets/fullStar.png')}
                    emptyStar={require('../../assets/emptyStar.png')}
                    halfStar={require('../../assets/halfStar.png')}
                  />
                  <Text>
                    ({item?.card?.info?.ratings?.aggregatedRating?.ratingCount})
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Image
                source={{
                  uri: `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.card?.info?.imageId}`,
                }}
                style={{
                  width: dimension / 2,
                  height: dimension / 2,
                  borderRadius: dimension / 20,
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    marginHorizontal: dimension / 40,
    paddingVertical: dimension / 10,
    borderBottomWidth: dimension / 160,
    borderBottomColor: '#00000040',
    gap: dimension / 80,
  },
  veg: {
    height: dimension / 24,
    width: dimension / 24,
  },
  nonVeg: {
    height: dimension / 20,
    width: dimension / 20,
  },
  vegNonvegLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Menu;

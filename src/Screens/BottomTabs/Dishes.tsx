/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Dimensions, LogBox} from 'react-native';
import React, {useEffect, useState} from 'react';
import axiosInstance from '../../utils/AxiosInstance';
import Carousel from '../../Components/Carousel';
import {ScrollView} from 'react-native-gesture-handler';
import ResturantList from '../../Components/ResturantList';
import Header from '../../Components/Header';
import {useDispatch, useSelector} from 'react-redux';

const dimension = Dimensions.get('window').width;
const Dishes = ({navigation}) => {
  const dispatch = useDispatch();
  const resturant = useSelector(state => state?.Fetch?.resturant);
  const carousel = useSelector(state => state?.Fetch?.carousel);

  const fetchData = async () => {
    const res = await axiosInstance.get('FoodData/data.json');
    const data = await res.data;
    const menuData = await axiosInstance.get(
      'https://naveensutar.github.io/FoodData/menuItem.json',
    );
    const resData = await menuData.data;
    dispatch({type: 'menu', payload: resData?.itemCards});
    const resturantList = data.cards[2]?.data?.data?.cards;
    const carouselList = data.cards[0]?.data?.data?.cards;
    dispatch({type: 'resturant', payload: resturantList});
    dispatch({type: 'carousel', payload: carouselList});
  };
  useEffect(() => {
    fetchData();
    LogBox.ignoreLogs(['VirtualizedLists should']);
  }, []);

  const carImage = carousel?.map(
    x =>
      `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${x.data.creativeId}`,
  );
  // console.log(carImage);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={{position: 'relative'}}>
          <Carousel carImage={carImage} />
        </View>
        <Text style={styles.totalResturant}>15 resturant to explore</Text>
        <ResturantList resturant={resturant} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: dimension / 40,
  },
  totalResturant: {
    fontSize: dimension / 20,
    color: '#000000',
    fontWeight: 'bold',
    marginVertical: dimension / 10,
    marginHorizontal: dimension / 30,
  },
});

export default Dishes;

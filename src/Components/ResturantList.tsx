import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';

const dimension = Dimensions.get('window').width;

const ResturantList = ({resturant, navigation}: any) => {
  return (
    <View>
      <FlatList
        data={resturant}
        renderItem={({item}) => (
          <View style={styles.cardsContainer}>
            <Pressable onPress={() => navigation.navigate('Menu')}>
              {/* cloudinary image */}
              <Image
                source={{
                  uri: `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item.data.cloudinaryImageId}`,
                }}
                style={styles.resturantImage}
              />
            </Pressable>
            <View>
              <Text numberOfLines={1} style={styles.resturantName}>
                {item.data.name}
              </Text>
              <View>
                <View style={styles.ratingContainer}>
                  <Image
                    source={require('../../assets/starRound.png')}
                    style={styles.star}
                  />
                  <Text style={styles.ratingText}>4.4</Text>
                  <Text
                    numberOfLines={1}
                    style={
                      styles.ratingText
                    }>{`(${item.data.totalRatingsString})`}</Text>
                  <Text numberOfLines={1} style={styles.ratingText}>
                    {`${item.data.deliveryTime} mins`}
                  </Text>
                </View>
                <Text numberOfLines={1} style={styles.resturantCuisine}>
                  {`${item.data.cuisines},`}
                </Text>
                <View style={styles.areaContainer}>
                  <Text numberOfLines={1} style={styles.area}>
                    {item.data.area}
                  </Text>
                  <Image
                    source={require('../../assets/dot.png')}
                    style={styles.dot}
                  />
                  <Text numberOfLines={1} style={styles.miles}>
                    3.2
                  </Text>
                  <Text numberOfLines={1} style={styles.miles}>
                    km
                  </Text>
                </View>
              </View>
              <View style={styles.deliveryContainer}>
                <Image
                  source={require('../../assets/motorcycle.png')}
                  style={styles.scooter}
                />
                <Text style={styles.freeDelivery}>FREE DELIVERY</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: dimension / 20,
    marginHorizontal: dimension / 40,
    gap: dimension / 20,
  },
  resturantImage: {
    height: dimension / 2,
    width: dimension / 2.5,
    borderRadius: dimension / 20,
  },
  resturantName: {
    width: dimension / 2,
    fontSize: dimension / 20,
    fontWeight: '700',
    color: '#000000',
  },
  star: {
    height: dimension / 20,
    width: dimension / 20,
  },
  resturantCuisine: {
    width: dimension / 2,
    fontSize: dimension / 24,
    color: '#000000',
    fontWeight: '400',
    marginTop: dimension / 60,
  },
  dot: {
    width: dimension / 10,
    height: dimension / 10,
  },
  areaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: dimension / 40,
    marginTop: dimension / 60,
  },
  area: {
    width: dimension / 4,
    fontSize: dimension / 24,
    color: '#000000',
    fontWeight: '400',
  },
  miles: {
    width: dimension / 16,
    fontSize: dimension / 24,
    color: '#000000',
    fontWeight: '400',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: dimension / 170,
    marginTop: dimension / 60,
  },
  ratingText: {
    fontSize: dimension / 30,
    color: '#000000',
    fontWeight: '900',
  },
  scooter: {
    height: dimension / 18,
    width: dimension / 18,
  },
  freeDelivery: {
    color: '#6600CC',
    fontWeight: 'bold',
  },
  deliveryContainer: {
    flexDirection: 'row',
    backgroundColor: '#E5CCFF',
    borderRadius: dimension / 20,
    width: dimension / 2.5,
    height: dimension / 14,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: dimension / 10,
  },
});

export default ResturantList;

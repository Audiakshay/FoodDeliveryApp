import {View, LogBox, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {SliderBox} from 'react-native-image-slider-box';

// const dimension = Dimensions.get('screen').width;
const Carousel = ({carImage}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['ViewPropTypes']);
  }, []);
  return (
    <View style={{}}>
      <SliderBox
        images={carImage}
        circleLoop
        // autoplay={true}
        resizeMode="contain"
        // sliderBoxHeight={dimension - 90}
        // parentWidth={dimension}
        dotColor="#EC7B0A"
        inactiveDotColor="#00000040"
      />
    </View>
  );
};

export default Carousel;

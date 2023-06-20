import {View, Text} from 'react-native';
import React from 'react';

const initState = {
  resturant: [],
  carousel: [],
  menu: [],
};
const FetchReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case 'resturant':
      return {
        ...state,
        resturant: payload,
      };
    case 'carousel':
      return {
        ...state,
        carousel: payload,
      };
    case 'menu':
      return {
        ...state,
        menu: payload,
      };
    default:
      return state;
  }
};

export default FetchReducer;

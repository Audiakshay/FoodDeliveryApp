import {View, Text} from 'react-native';
import React from 'react';
import {combineReducers} from 'redux';
import FetchReducer from './FetchReducer';

const rootReducer = combineReducers({
  Fetch: FetchReducer,
});

export default rootReducer;

import React, { Component } from 'react';
import { Text, StatusBar, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font'

import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import AppView from './views/AppView';

const uiTheme = {
  palette: {
    primaryColor: COLOR.lightBlue600,
    accentColor: COLOR.pink500,
  },
};

Font.loadAsync({
  roboto: require('./assets/fonts/Roboto-Regular.ttf'),
});

export default function App() {
  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <StatusBar />  
      <AppView />
    </ThemeContext.Provider>
  );
}

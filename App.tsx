import React, { Component } from 'react';
import { Text, StatusBar, View, StyleSheet } from 'react-native';

import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import AppView from './views/AppView';

const uiTheme = {
  palette: {
    primaryColor: COLOR.lightBlue600,
    accentColor: COLOR.pink500,
  },
};

export default function App() {
  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <StatusBar />  
      <AppView />
    </ThemeContext.Provider>
  );
}
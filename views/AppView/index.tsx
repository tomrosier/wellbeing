import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Toolbar, BottomNavigation } from 'react-native-material-ui';
import { Ionicons } from '@expo/vector-icons';

import Home from '../Home';
import Survey from '../Survey';
import Stats from '../Stats';

export default class AppView extends React.Component {

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })

  tabs = [
    // {
    //   key: 'Home',
    //   route: <Home />,
    //   icon: 'home',
    //   iconSet: 'Entypo',
    //   label: 'Home',
    // },
    {
      key: 'Survey',
      route: <Survey />,
      icon: 'work',
      iconSet: 'Entypo',
      label: 'Survey',
    },
    {
      key: 'Stats',
      icon: 'drafts',
      iconSet: 'Ionicons',
      route: <Stats />,
      label: 'Stats',
    }
  ]

  constructor(props) {
    super(props);
    this.state = {
      active: this.tabs[0].key
    };
  }

  getCurrentTab = () => {
    for (let tabIndex in this.tabs) {
      let tab = this.tabs[tabIndex];
      if (tab.key === this.state.active) {
        return tab;
      }
    }
    return null;
  }

  renderTab = (tab) => 
    <BottomNavigation.Action
      key={tab.key}
      label={tab.label}
      icon={tab.icon}
      iconSet={tab.iconSet}
      onPress={() => this.setState({ active: tab.key })}
    />;
  
  renderIcon = iconName => ({ isActive }) => 
    <Ionicons size={24} color="white" name={iconName} />;

  render() {
    return (
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <Toolbar centerElement={this.getCurrentTab().key} />
        <View style={this.styles.container}>
          {this.getCurrentTab().route}
        </View>
        <BottomNavigation active={this.state.active} hidden={false} >
          {this.tabs.map(this.renderTab)}
        </BottomNavigation>
      </View>
    )
  }
}

import React from "react";

import { Text, View } from "react-native";

import Picker from '../Picker';

export default class Question extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
        <Picker onValueChange={this.props.onValueChange}/>
      </View>
    );
  }
}

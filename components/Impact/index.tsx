import React from "react";
import { Picker as NativePicker, View }  from "react-native";
import { ButtonGroup, Text } from 'react-native-elements';


export default class Impact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
  }

  buttons = [
    "Not at all",
    "Somewhat",
    "Very",
    "Extreamly"
  ]

  render() {
    return (
      <View>
        <Text h2>Day to day impact</Text>
        <Text>How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?</Text>
        <ButtonGroup
          onPress={(selectedIndex) => {
            this.setState({selected: selectedIndex});
            this.props.onValueChange(selectedIndex);
          }}
          selectedIndex={this.state.selected}
          buttons={this.buttons}
        />
      </View>
    );
  }
}
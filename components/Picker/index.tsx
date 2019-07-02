import React from "react";
import { Picker as NativePicker }  from "react-native";

export default class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
  }

  render() {
    return (
        <NativePicker
          selectedValue={this.state.selected}
          onValueChange={
            (itemValue, itemIndex) => {
              this.setState({selected: itemValue});
              this.props.onValueChange(itemValue);
            }
          }
          >
          <NativePicker.Item label="Not at all" value="0" />
          <NativePicker.Item label="Several days" value="1" />
          <NativePicker.Item label="More than half the days" value="2" />
          <NativePicker.Item label="Nearly every day" value="3" />
        </NativePicker>
    );
  }
}

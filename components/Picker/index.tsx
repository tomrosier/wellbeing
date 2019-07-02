import React from "react";
import { Picker as NativePicker }  from "react-native";
import { ButtonGroup } from 'react-native-elements';

export default class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
  }

  buttons = [
    "Not at all",
    "Several days",
    "Half the days",
    "Every day"
  ]

  render() {
    return (
      <ButtonGroup
        onPress={(selectedIndex) => {
          this.setState({selected: selectedIndex});
          this.props.onValueChange(selectedIndex);
        }}
        selectedIndex={this.state.selected}
        buttons={this.buttons}
      />
    );
  }
}


/*<NativePicker
selectedValue={this.state.selected}
onValueChange={
  (itemValue, itemIndex) => {
    this.setState({selected: itemValue});
    this.props.onValueChange(itemValue);
  }
}
>
<NativePicker.Item label="Not at all" value="0" />
<NativePicker.Item label= value="1" />
<NativePicker.Item label="More than half the days" value="2" />
<NativePicker.Item label="Nearly every day" value="3" />
</NativePicker>*/
import React from "react";
import { View, Picker } from "react-native";
import { Text } from 'react-native-elements';
import { Button } from 'react-native-material-ui';
import DateTimePicker from "react-native-modal-datetime-picker";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };

  render() {
    return (
      <View>
        <Button primary raised text="Pick Time for alert" onPress={this.showDateTimePicker} />
        <Button primary raised text="Pick Day for alert" onPress={this.showDateTimePicker} />
        <DateTimePicker
          mode="time"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </View>
    );
  }
}


/*<Picker
selectedValue={this.state.selected}
onValueChange={
  (itemValue, itemIndex) => {
    this.setState({selected: itemValue});
    this.props.onValueChange(itemValue);
  }
}
>
<Picker.Item label="Not at all" value="0" />
<Picker.Item label= value="1" />
<Picker.Item label="More than half the days" value="2" />
<Picker.Item label="Nearly every day" value="3" />
</Picker>*/
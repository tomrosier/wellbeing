import React from 'react';
import { View, Picker } from 'react-native';
import { Text } from 'react-native-elements';
import { Button } from 'react-native-material-ui';
import DateTimePicker from 'react-native-modal-datetime-picker';

import DayPicker from '../../components/DayPicker';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      isDayPickerVisible: false
    };
  }

  handleDatePicked = date => {
    console.log('A date has been picked: ', date);
    this.setState({isDateTimePickerVisible: false});
    setTimeout(() => this.setState({isDayPickerVisible: true}), 500); // I'm so sorry.
  };

  render() {
    return (
      <View>
        <Button primary raised text='Pick Time for alert' onPress={() => this.setState({ isDateTimePickerVisible: true })} />
        {/*<Button primary raised text='Pick Day for alert' onPress={() => this.setState({isDayPickerVisible: true})} />*/}
        <DateTimePicker
          mode='time'
          titleIOS='Pick a time for reminder'
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={() => this.setState({ isDateTimePickerVisible: false })}
        />
        <DayPicker 
          isVisible={this.state.isDayPickerVisible} 
          closeHandler={() => this.setState({isDayPickerVisible: false})}
          onValueChange={(value) => console.log(value)} 
        />
      </View>
    );
  }
}

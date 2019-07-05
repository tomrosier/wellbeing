import React from 'react';
import { Picker, View } from 'react-native';
import { Text, Overlay } from 'react-native-elements';
import { Button } from 'react-native-material-ui';

import Question from '../Question';

export default class DayPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0 
    };
  }

  render() {
    return (
      <View>
        <Overlay 
            isVisible={this.props.isVisible} 
            onBackdropPress={this.props.closeHandler}
            height="auto"
          >
          <View>
            <Text h2 h2Style={{
              textAlign: 'center'
            }}>Day for alert</Text>
            <Picker
              selectedValue={this.state.selected}
              onValueChange={
                (itemValue, itemIndex) => {
                  this.setState({selected: itemValue});
                  this.props.onValueChange(itemValue);
                }
              }
            >
              <Picker.Item label='Monday' value='0' />
              <Picker.Item label='Tuesday' value='1' />
              <Picker.Item label='Wednesday' value='2' />
              <Picker.Item label='Thursday' value='3' />
              <Picker.Item label='Friday' value='4' />
              <Picker.Item label='Saturday' value='5' />
              <Picker.Item label='Sunday' value='6' />
            </Picker>
            <View style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0
            }}>
              <Button raised primary text='Close' onPress={this.props.closeHandler} />
            </View>
          </View>
        </Overlay>
      </View>
    );
  }
}

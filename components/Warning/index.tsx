import React from "react";
import { Linking, View } from "react-native";
import { Text, Overlay } from 'react-native-elements';
import { Button } from 'react-native-material-ui';

import Question from '../Question';

export default class Warning extends React.Component {
  render() {
    return (
      <View>
        <Overlay isVisible={this.props.isVisible} onBackdropPress={this.props.closeHandler}>
          <View style={{height: '100%'}}>
            <Text h2>Please seek help.</Text>
            <Text>Information for services that can help can be found below.</Text>
            <Button primary
              onPress={() => Linking.openURL('https://www.nhs.uk/conditions/suicide/')}
              text="NHS UK" 
            />
            <View style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0
            }}>
              <Button raised primary text="Close" onPress={this.props.closeHandler} />
            </View>
          </View>
        </Overlay>
      </View>
    );
  }
}

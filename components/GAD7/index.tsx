import React from "react";
import { View } from "react-native";
import { Text } from 'react-native-elements';

import Question from '../Question';

export default class GAD7 extends React.Component {
  questions = {
    "nervous": {
      "text": "Feeling nervous, anxious or on edge",
      "value": "0"
    },
    "stop": {
      "text": "Not being able to stop or control worrying",
      "value": "0"
    },
    "worrying": {
      "text": "Worrying too much about different things",
      "value": "0"
    },
    "relaxing": {
      "text": "Trouble relaxing",
      "value": "0"
    },
    "restless": {
      "text": "Being so restless that it is hard to sit still",
      "value": "0"
    },
    "irritable": {
      "text": "Becoming easily annoyed or irritable",
      "value": "0"
    },
    "afraid": {
      "text": "Feeling afraid as if something awful might happen",
      "value": "0"
    }
  };

  onValueChange(key, value) {
    this.questions[key].value = value;
  }

  render() {
    return (
      <View>
        <Text h2>GAD-7 Anxiety</Text>
        {Object.keys(this.questions).map(key => 
          <Question key={key} text={this.questions[key].text} onValueChange={(value) => this.onValueChange(key, value)}/>)}
      </View>
    );
  }
}

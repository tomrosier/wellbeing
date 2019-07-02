import React from "react";
import { View } from "react-native";
import { Text } from 'react-native-elements';

import Question from '../Question';

export default class GAD7 extends React.Component {
  questions = [
    {
      "text": "Feeling nervous, anxious or on edge"
    },
    {
      "text": "Not being able to stop or control worrying"
    },
    {
      "text": "Worrying too much about different things"
    },
    {
      "text": "Trouble relaxing"
    },
    {
      "text": "Being so restless that it is hard to sit still"
    },
    {
      "text": "Becoming easily annoyed or irritable"
    },
    {
      "text": "Feeling afraid as if something awful might happen"
    }
  ];


  render() {
    return (
      <View>
        <Text h2>GAD-7 Anxiety</Text>
        {this.questions.map((value) => <Question text={value.text} />)}
      </View>
    );
  }
}

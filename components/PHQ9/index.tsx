import React from "react";
import { View } from "react-native";
import { Text } from 'react-native-elements';


import Question from '../Question';
import Warning from '../Warning';

export default class PHQ9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWarningVisable: false,
      warningHasShown: false
    };
  } 

  questions = {
    "pleasure": {
      "text": "Little interest or pleasure in doing things",
      "value": "0"
    },
    "hopeless": {
      "text": "Feeling down, depressed, or hopeless",
      "value": "0"
    },
    "sleep": {
      "text": "Trouble falling or staying asleep, or sleeping too much",
      "value": "0"
    },
    "energy": {
      "text": "Feeling tired or having little energy",
      "value": "0"
    },
    "appetite": {
      "text": "Poor appetite or overeating",
      "value": "0"
    },
    "failure": {
      "text": "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
      "value": "0"
    },
    "concentration": {
      "text": "Trouble concentrating on things, such as reading the newspaper or watching television",
      "value": "0"
    },
    "movement": {
      "text": "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving .around a lot more than usual",
      "value": "0"
    },
    "suicide": {
      "text": "Thoughts that you would be better off dead or of hurting yourself in some way",
      "value": "0"
    }
  };

  onValueChange(key, value) {
    this.questions[key].value = value;

    if (key == "suicide" && value != "0" && !this.state.warningHasShown) {
      this.setState({
        isWarningVisable: true,
        warningHasShown: true
      });
    }
    
    this.props.putResults(this.questions)
  }

  render() {
    return (
      <View>
        <Text h2>PHQ-9 Depression</Text>
        {Object.keys(this.questions).map(key => 
          <Question key={key} text={this.questions[key].text} onValueChange={(value) => this.onValueChange(key, value)}/>)}
        <Warning isVisible={this.state.isWarningVisable} closeHandler={() => this.setState({isWarningVisable: false})} />
      </View>
    );
  }
}

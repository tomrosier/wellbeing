import React from "react";
import { ScrollView } from "react-native";
import { Button, Divider } from 'react-native-elements';


import GAD7 from '../../components/GAD7';
import PHQ9 from '../../components/PHQ9';

export default class Survey extends React.Component {
  results = {
    gad7scores: null,
    phq9scores: null
  };

  render() {
    return (
      <ScrollView>
        <GAD7 putResults={(results) => this.results.gad7scores = results}/>
        <Divider />
        <PHQ9 putResults={(results) => this.results.phq9scores = results}/>
        <Divider />
        <Button raised primary text="Complete" onPress={() => console.log(this.results)} />
        <Divider />
      </ScrollView>
    );
  }
}

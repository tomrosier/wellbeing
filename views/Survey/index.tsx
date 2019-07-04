import React from "react";
import { ScrollView } from "react-native";
import { Divider } from 'react-native-elements';
import { Button } from 'react-native-material-ui';


import GAD7 from '../../components/GAD7';
import PHQ9 from '../../components/PHQ9';
import Impact from '../../components/Impact';

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
        <Impact onValueChange={(blah) => console.log(blah)}/>
        <Divider />
        <Button raised primary text="Complete" onPress={() => console.log(this.results)} />
        <Divider />
      </ScrollView>
    );
  }
}

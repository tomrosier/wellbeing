import React from "react";
import { ScrollView } from "react-native";
import { Divider } from 'react-native-elements';


import GAD7 from '../../components/GAD7';
import PHQ9 from '../../components/PHQ9';

export default class Survey extends React.Component {
  render() {
    return (
      <ScrollView>
        {/*<GAD7 />*/}
        <Divider />
        <PHQ9 />
      </ScrollView>
    );
  }
}

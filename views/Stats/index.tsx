import React from "react";
import { View, Dimensions } from "react-native";
import { Text } from 'react-native-elements';
import { withTheme } from 'react-native-material-ui'
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartSize: 220,
      chartSizeSet: false
    };
  }

  chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => this.props.theme.palette.primaryColor,
    strokeWidth: 2 // optional, default 3
  }

  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      data: [ 20, 45, 28, 80, 99, 43 ],
    }]
  }

  calculateChartSize(event) {
    const {x, y, width, height} = event.nativeEvent.layout;

    let calculatedHight = (height / 2) - 50;

    if (this.state.chartSizeSet == false) {
      this.setState({
        chartSize: calculatedHight,
        chartSizeSet: true
      });
    }
  }

  render() {
    return (
      <View onLayout={(event) => this.calculateChartSize(event)} style={{flex: 1}}>
        <Text h2>GAD7 Scores</Text>
        <LineChart
          data={this.data}
          width={screenWidth}
          height={this.state.chartSize}
          chartConfig={this.chartConfig}
          withDots={false}
          withInnerLines={false}
          fromZero={true}
        />
        <Text h2>PHQ9 Scores</Text>
        <LineChart
          data={this.data}
          width={screenWidth}
          height={this.state.chartSize}
          chartConfig={this.chartConfig}
          withDots={false}
          withInnerLines={false}
          fromZero={true}
        />
      </View>
    );
  }
}

export default withTheme(Stats);

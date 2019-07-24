import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

import CareButton from '../../Components/UI/CareButton';
import Icon from "react-native-vector-icons/Ionicons";

class CareScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if(event.type === "NavBarButtonPress"){
      if(event.id === "sideDrawerToggle"){
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }

  goToPetshop = () => {
    Promise.all([
      Icon.getImageSource("md-add", 30)
    ]).then(sources => {
      this.props.navigator.push({
        screen: "snapet.PetShopScreen",
        title: "Banho e Tosa",
        navigatorButtons: {
          rightButtons: [
            {
              icon: sources[0],
              title: "addPetshop",
              id: "addPetshopEvent"
            }
          ]
        }
      })
    })
  }

  goToVeterinario = () => {
    Promise.all([
      Icon.getImageSource("md-add", 30)
    ]).then(sources => {
      this.props.navigator.push({
        screen: "snapet.VeterinarioScreen",
        title: "Veterinario",
        navigatorButtons: {
          rightButtons: [
            {
              icon: sources[0],
              title: "addVeterinario",
              id: "addVeterinarioEvent"
            }
          ]
        }
      })
    })
  }

  goToVacinas = () => {
    Promise.all([
      Icon.getImageSource("md-add", 30)
    ]).then(sources => {
      this.props.navigator.push({
        screen: "snapet.VacinasScreen",
        title: "Vacinas",
        navigatorButtons: {
          rightButtons: [
            {
              icon: sources[0],
              title: "addVacinas",
              id: "addVacinasEvent"
            }
          ]
        }
      })
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <CareButton name='Banho e Tosa' iconName='md-cut' onPress={this.goToPetshop}/>
        <CareButton name='Veterinário' iconName='md-medkit' onPress={this.goToVeterinario}/>
        <CareButton name='Cartão de vacinas' iconName='md-pulse' onPress={this.goToVacinas}/>

        <View>
          <Text>
            Bezier Line Chart
          </Text>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [{
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }]
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel={'$'}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1
  }
});

export default CareScreen;

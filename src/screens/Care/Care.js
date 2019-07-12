import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

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
    this.props.navigator.push({
      screen: "snapet.VeterinarioScreen",
      title: "Veterinario",
    });
  }

  goToVacinas = () => {
    this.props.navigator.push({
      screen: "snapet.VacinasScreen",
      title: "Vacinas",
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <CareButton name='Banho e Tosa' iconName='md-cut' onPress={this.goToPetshop}/>
        <CareButton name='Veterinário' iconName='md-medkit' onPress={this.goToVeterinario}/>
        <CareButton name='Cartão de vacinas' iconName='md-pulse' onPress={this.goToVacinas}/>
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

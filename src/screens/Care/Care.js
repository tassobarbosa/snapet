import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import CareButton from '../../Components/UI/CareButton';


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
  render(){
    return(
      <View style={styles.container}>
        <CareButton name='Vacinas' iconName='md-pulse'/>
        <CareButton name='Banho' iconName='md-cut'/>
        <CareButton name='Veterinario' iconName='md-medkit'/>
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

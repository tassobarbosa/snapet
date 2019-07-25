import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import FoodHeader from './FoodHeader'
import FoodButton from '../../Components/UI/FoodButton';

class FoodScreen extends Component {
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
        <FoodHeader />
        <Text>Food Screen</Text>
        <View style={styles.addButtonContainer}>
          <FoodButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#eee",
    },
    addButtonContainer: {
      position: 'absolute',
      bottom: 30,
      width: "100%",
      justifyContent: 'center',
      alignItems: "center",
    }
});

export default FoodScreen;

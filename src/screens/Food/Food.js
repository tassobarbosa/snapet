import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import FoodHeader from './FoodHeader';
import FoodModal from './FoodModal';
import FoodEventItem from './FoodEventItem';
import FoodList from './FoodList';
import FoodButton from '../../Components/UI/FoodButton';


class FoodScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    modalVisible: null,
    meals: [
      {
        chosenName: 'fdgh',
        chosenTime: 'fdgh',
        chosenPortion: 'fdgh',
        key: Math.random().toString()
      },
      {
        chosenName: '4re',
        chosenTime: '1223',
        chosenPortion: '3ww',
        key: Math.random().toString()
      }
    ]
  };


  modalClosedHandler = () => {
    this.setState({
      modalVisible: null
    });
  };

  modalOpenHandler = () => {
    this.setState({
      modalVisible: true
    });
  };

  onNavigatorEvent = event => {
    if(event.type === "NavBarButtonPress"){
      if(event.id === "sideDrawerToggle"){
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }

  eventSelectedHandler = key => {
    alert(key)
  }

  render(){
    return(
      <View style={styles.container}>
        <FoodModal
          openModal={this.state.modalVisible}
          onModalClosed={this.modalClosedHandler}
        />
        <FoodHeader />

        <View style={styles.bodyContainer}>
          <Text>Food Screen</Text>
          <FoodList
            meals={this.state.meals}
            onItemSelected={this.eventSelectedHandler}
          />
        </View>

        <View style={styles.addButtonContainer}>
          <FoodButton onPress={this.modalOpenHandler}/>
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
    bodyContainer:{
      padding: 10
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

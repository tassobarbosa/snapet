import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import FoodHeader from './FoodHeader';
import FoodModal from './FoodModal';
import FoodEventItem from './FoodEventItem';
import FoodList from './FoodList';
import FoodButton from '../../Components/UI/FoodButton';

import { serverUrl } from '../../Config/Settings.js'

class FoodScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    modalVisible: null,
    meals: [],
  };

  componentDidMount() {
      this.getEvents();
  }

  getEvents = () => {
    fetch(serverUrl+"meals.json")
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes)
      const dataEvents = [];
      for(let key in parsedRes){
        dataEvents.push({
          ...parsedRes[key],
          key: key
        })
      }
      this.setState({ meals: dataEvents});
    })
  }

  modalClosedHandler = () => {
    this.setState({
      modalVisible: null
    });
    this.getEvents();
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
      flexDirection: 'column',
      backgroundColor: "#eee",
    },
    bodyContainer:{
      padding: 10,
      height: 380,
    },
    addButtonContainer: {
      position: 'absolute',
      bottom: 10,
      width: "100%",
      justifyContent: 'center',
      alignItems: "center",
    }
});

export default FoodScreen;

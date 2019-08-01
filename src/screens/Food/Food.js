import React, {Component} from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet} from 'react-native';

import FoodHeader from './FoodHeader';
import FoodModal from './FoodModal';
import FoodEventItem from './FoodEventItem';
import FoodList from './FoodList';
import FoodButton from '../../Components/UI/FoodButton';
import CommonStyles from '../../Stylesheets/Common';

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

        global.checkBalanceTimer = setInterval(() => {
          this.getEvents();
        }, 20000)
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

    const selMeal = this.state.meals.find(meal =>  {
      return meal.key === key;
    });

    if(selMeal) console.log(selMeal)

      Alert.alert(
      'Petshop',
      'Deseja excluir este evento?',
        [
          {},
          {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => this.deleteEvent(key)},
        ],
      {cancelable: true},
    );
  }

  deleteEvent(key){
    console.log("Delete pressed");
    console.log(key);

      fetch(serverUrl + 'meals/' + key + '.json', {
        method: "DELETE"
      })
      .catch(err => console.log(err))
      .then(res => res.json())

      this.getEvents();
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
          <FoodList
            meals={this.state.meals}
            onItemSelected={this.eventSelectedHandler}
          />
        </View>

          <View style={styles.buttonContainer}>
            <FoodButton onPress={this.modalOpenHandler}/>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: CommonStyles.screenBackgroundColor,
    },
    bodyContainer:{
      flex: 2,
      padding: 10,
    },
    buttonContainer: {
      width: "100%",
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: "center"
    }
});

export default FoodScreen;

import React, {Component}  from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

import CloseButton from '../../Components/UI/CloseButton';
import FoodForm from './FoodForm';
import CommonStyles from '../../Stylesheets/Common';
import DefaultButton from "../../Components/UI/DefaultButton";

import { serverUrl } from '../../Config/Settings.js'

export default class FoodModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mealName: '',
        mealTime: '',
        mealPortion: 1
      };
  }

  updateName(mealName){
    this.setState({mealName});
  }

  updateTime(mealTime){
    this.setState({mealTime});
  }

  updatePortion(mealPortion){
    this.setState({mealPortion});
  }

  submitHandler = () => {
    console.log("hey");

    fetch(serverUrl+"meals.json",{
      method: "POST",
      body: JSON.stringify({
        //Estou usando do do FIREBASE
        //key: Math.random().toString(),
        chosenName: this.state.mealName,
        chosenTime: this.state.mealTime,
        chosenPortion: this.state.mealPortion,
      })
    })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes);
      this.props.onModalClosed();
      this.clearState();
    });
  }

  clearState(){
    this.setState({
      mealName: '',
      mealTime: '',
      mealTime: 1
    });
  }

  render(){
    return (

        <Modal
          onRequestClose={this.props.onModalClosed}
          visible={this.props.openModal !== null}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.buttonContainer}>
              <CloseButton onPress={this.props.onModalClosed} />
              <DefaultButton label="Salvar" onPress={this.submitHandler} style={[{width: "35%", height: 40}]}/>
            </View>
            <FoodForm
              currentMealName = {this.updateName.bind(this)}
              currentMealTime={this.updateTime.bind(this)}
              currentMealPortion={this.updatePortion.bind(this)}
            />
          </View>
        </Modal>
      )
    }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
    //alignItems: "center"
  },
});

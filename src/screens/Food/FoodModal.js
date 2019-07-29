import React, {Component}  from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

import CloseButton from '../../Components/UI/CloseButton';
import FoodImage from '../../assets/Images/comida.jpeg';
import FoodForm from './FoodForm';

export default class FoodModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mealName: '',
        mealTime: '',
        mealPortion: 0
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
            </View>
            <Image source={FoodImage} style={styles.foodImage}/>
            <FoodForm
              currentMealName = {this.updateName.bind(this)}
              currentMealTime={this.updateTime.bind(this)}
              currentMealPortion={this.updatePortion.bind(this)}
            />

            <Text>{this.state.mealName}</Text>
            <Text>{this.state.mealTime}</Text>
            <Text>{this.state.mealPortion}</Text>
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
  foodImage: {
    width: "100%",
    height: 200,
    paddingBottom: 20,
  },
});

import React, {Component}  from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

import CloseButton from '../../Components/UI/CloseButton';
import PetForm from './PetForm';

import { serverUrl } from '../../Config/Settings.js'

export default class PetModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: '',
      petBreed: '',
      petBirth: ''
      };
  }

  updateName(petName){
    this.setState({petName});
  }

  updateBreed(petBreed){
    this.setState({petBreed});
  }

  updateBirth(petBirth){
    this.setState({petBirth});
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
          <PetForm
            currentPetName = {this.updateName.bind(this)}
            currentPetBreed={this.updateBreed.bind(this)}
            currentPetBirthDate={this.updateBirth.bind(this)}
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
  foodImage: {
    width: "100%",
    height: 200,
    paddingBottom: 20,
  },
});

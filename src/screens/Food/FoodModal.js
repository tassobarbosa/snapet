import React, {Component}  from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

import CloseButton from '../../Components/UI/CloseButton';

export default class FoodModal extends Component {

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

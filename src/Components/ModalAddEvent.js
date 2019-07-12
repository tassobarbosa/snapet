import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";
import CloseButton from './UI/CloseButton';

const modalAddEvent = props => {

  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.addingEvent !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.buttonContainer}>
          <CloseButton onPress={props.onModalClosed} />
          <Button title="Salvar"/>
        </View>
        <Image source={require("../Assets/Images/banho-tosa.jpeg")} style={styles.eventImage} />
        <Text style={styles.eventName}>{props.name}</Text>
      </View>
    </Modal>
  );
};

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
  eventImage: {
    width: "100%",
    height: 200
  },
  eventName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default modalAddEvent;

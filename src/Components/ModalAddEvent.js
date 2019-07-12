import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const modalAddEvent = props => {

  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.addingEvent !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <Image source={require("../Assets/Images/banho-tosa.jpeg")} style={styles.eventImage} />
        <Text style={styles.eventName}>{props.name}</Text>        
        <Button title="Close" onPress={props.onModalClosed} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
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

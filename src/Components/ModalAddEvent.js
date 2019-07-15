import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";
import CloseButton from './UI/CloseButton';
import EventDataForm from './EventDataForm';

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
        <EventDataForm
          formImage={props.eventImage}
          formName={props.eventName}
          placeholder="Quanto será pago?"
        />
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
});

export default modalAddEvent;

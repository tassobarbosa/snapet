import React, {Component}  from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";
import CloseButton from './UI/CloseButton';
import EventDataForm from './EventDataForm';

export default class ModalAddEvent extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View>
        <Modal
          onRequestClose={this.props.onModalClosed}
          visible={this.props.addingEvent !== null}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.buttonContainer}>
              <CloseButton onPress={this.props.onModalClosed} />
              <Button title="Salvar"/>
            </View>
            <EventDataForm
              formImage={this.props.eventImage}
              formName={this.props.eventName}
              placeholder="Quanto será pago?"
            />
          </View>
        </Modal>
      </View>
    );
  }
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

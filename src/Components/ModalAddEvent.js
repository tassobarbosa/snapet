import React, {Component}  from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";
import CloseButton from './UI/CloseButton';
import EventDataForm from './EventDataForm';

import { serverUrl } from '../Config/Settings.js'

export default class ModalAddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        valor: '',
        chosenTime: '',
        chosenDate: ''
      };
  }

  updateValue(valor){
    this.setState({valor});
  }

  updateTime(chosenTime){
    this.setState({chosenTime});
  }

  updateDate(chosenDate){
    this.setState({chosenDate});
  }

  submitHandler = () => {
    console.log("hey");

    fetch(serverUrl+this.props.eventAddress+".json",{
      method: "POST",
      body: JSON.stringify({
        valor: this.state.valor,
        chosenTime: this.state.chosenTime,
        chosenDate: this.state.chosenDate
      })
    })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes);
    });


    this.props.superClose(false);
    this.clearState();
  }

  clearState(){
    this.setState({
      valor: '',
      chosenTime: '',
      chosenDate: ''
    });
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
              <Button title="Salvar" onPress={this.submitHandler}/>
            </View>
            <EventDataForm
              formImage={this.props.eventImage}
              formName={this.props.eventName}
              placeholder="Quanto será pago?"
              currentEventValue={this.updateValue.bind(this)}
              currentEventTime={this.updateTime.bind(this)}
              currentEventDate={this.updateDate.bind(this)}
            />
            <Text>Valor: {this.state.valor}</Text>
            <Text>Tempo: {this.state.chosenTime}</Text>
            <Text>Data: {this.state.chosenDate}</Text>
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

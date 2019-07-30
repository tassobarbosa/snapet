import React, {Component}  from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

import CloseButton from '../../Components/UI/CloseButton';
import UserForm from './UserForm';

import { serverUrl } from '../../Config/Settings.js'

export default class UserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      birthDate: ''
      };
  }

  updateName(userName){
    this.setState({userName});
  }

  updateEmail(userEmail){
    this.setState({userEmail});
  }

  updateBirth(birthDate){
    this.setState({birthDate});
  }

  submitHandler = () => {
    this.deleteUserData(this.props.internKey)

      fetch(serverUrl+"userdata.json",{
        method: "POST",
        body: JSON.stringify({
          //Estou usando do do FIREBASE
          //key: Math.random().toString(),
          userName: this.state.userName,
          userEmail: this.state.userEmail,
          birthDate: this.state.birthDate,
        })
      })
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
      });

      this.props.onModalClosed();
      this.clearState();
  }

  clearState(){
    this.setState({
      userName: '',
      userEmail: '',
      birthDate: ''
    });
  }

  deleteUserData(key){
    console.log("Delete pressed");
    console.log(key);

      fetch(serverUrl + 'userdata/' + key + '.json', {
        method: "DELETE"
      })
      .catch(err => console.log(err))
      .then(res => res.json())
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
            <Button title="Salvar" onPress={this.submitHandler}/>
          </View>
          <UserForm
            currentUserName = {this.updateName.bind(this)}
            currentUserEmail = {this.updateEmail.bind(this)}
            currentBirthDate = {this.updateBirth.bind(this)}
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

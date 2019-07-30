import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import UserModal from './UserModal';
import { serverUrl } from '../../Config/Settings.js'

class DadosUserScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    modalVisible: null,
    userName: '',
    userEmail: '',
    birthDate: '',
    key: ''
  };

  onNavigatorEvent = event => {
    if(event.type === "NavBarButtonPress"){
      if(event.id === "sideDrawerToggle"){
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }

  componentDidMount() {
      this.getUserData();
  }

  getUserData = () => {
    fetch(serverUrl+"userdata.json")
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes)
      const dataEvents = [];
      for(let key in parsedRes){
        dataEvents.push({
          ...parsedRes[key],
          key: key
        })
      }
       this.setState({
         userName: dataEvents[0].userName,
         userEmail: dataEvents[0].userEmail,
         birthDate: dataEvents[0].birthDate,
         key: dataEvents[0].key
     });

    })
  }

  modalClosedHandler = () => {
    this.setState({
      modalVisible: null
    });
    //Refresh List
    this.getUserData();
  };

  modalOpenHandler = () => {
    this.setState({
      modalVisible: true
    });
  };


  render(){
    return(
      <View style={styles.container}>
        <UserModal
          openModal={this.state.modalVisible}
          onModalClosed={this.modalClosedHandler}
          internKey={this.state.key}
        />

        <Text> Nome: {this.state.userName}</Text>
        <Text> Data de nascimento: {this.state.userEmail}</Text>
        <Text> Email: {this.state.birthDate}</Text>
        <Text> chave: {this.state.key}</Text>
        <Text> Foto</Text>
        <View>
          <Button title="Alterar foto"/>
          <Button title="Alterar dados" onPress={this.modalOpenHandler}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1
  }
});

export default DadosUserScreen;

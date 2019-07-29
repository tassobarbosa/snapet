import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import PetModal from './PetModal';
import { serverUrl } from '../../Config/Settings.js'

class DadosPetScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    modalVisible: null,
    petName: '',
    petBreed: '',
    petBirth: ''
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
      this.getPetData();
  }

  getPetData = () => {
    fetch(serverUrl+"petdata.json")
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
         petName: dataEvents[0].chosenPetName,
        petBreed: dataEvents[0].chosenPetBreed,
         petBirth: dataEvents[0].chosenPetBirth,
     });

    })
  }

  modalClosedHandler = () => {
    this.setState({
      modalVisible: null
    });
  };

  modalOpenHandler = () => {
    this.setState({
      modalVisible: true
    });
  };

  render(){
    return(
      <View style={styles.container}>
        <PetModal
          openModal={this.state.modalVisible}
          onModalClosed={this.modalClosedHandler}
        />

        <Text> Nome: {this.state.petName}</Text>
        <Text> Raça: {this.state.petBreed}</Text>
        <Text> Nascimento: {this.state.petBirth}</Text>
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

export default DadosPetScreen;

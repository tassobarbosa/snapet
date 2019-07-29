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

class DadosPetScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    modalVisible: null,
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

        <Text> Nome</Text>
        <Text> Raça</Text>
        <Text> Idade</Text>
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

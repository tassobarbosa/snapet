import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import ModalAddEvent from "../../Components/ModalAddEvent";

class PetShopScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    addingEvent: null
  };

  modalClosedHandler = () => {
    this.setState({
      addingEvent: null
    });
  };

  onNavigatorEvent = event => {
    if(event.type === "NavBarButtonPress"){
      if(event.id === "addPetshopEvent"){
        this.setState({
          addingEvent: true
        });
      }
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <ModalAddEvent
          name='HALLO'
          addingEvent={this.state.addingEvent}
          onModalClosed={this.modalClosedHandler}
        />
        <Text>PET SHOP</Text>
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

export default PetShopScreen;

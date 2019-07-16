import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import ModalAddEvent from "../../Components/ModalAddEvent";
import EventList from "../../Components/EventList";

class PetShopScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    addingEvent: null,
    events: [
      {
        key: 't34',
        name: 'pet',
        value: '35',
        chosenTime: '14:34',
        chosenDate: '02/03/1999'
      },
      {
        key: 'b14',
        name: 'pet',
        value: '23',
        chosenTime: '11:23',
        chosenDate: '07/03/1934'
      }
    ]
  };

  modalSuperClose(e){
    this.setState({
      addingEvent: null
    });
  }

  modalClosedHandler = () => {
    this.setState({
      addingEvent: null
    });
  };

  modalOpenHandler = () => {
    this.setState({
      addingEvent: true
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

renderEventList(){
  return(
    <EventList
      events={this.state.events}
    />
  )
}

  render(){
    return(
      <View style={styles.container}>
        <ModalAddEvent
          eventImage='banho_bg'
          eventName='Hora de ir ao Pet :)'
          eventAddress='/petshop'
          addingEvent={this.state.addingEvent}
          onModalClosed={this.modalClosedHandler}
          superClose={this.modalSuperClose.bind(this)}
        />
        {this.renderEventList()}
        <Button title="Open" onPress={this.modalOpenHandler} />
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

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
import ModalTitle from "../../Components/UI/ModalTitle";

class PetShopScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    addingEvent: null,
    events: []
  };

  modalSuperClose(e){
    this.setState({
      addingEvent: null
    });
    //Refresh List
    this.getEvents();
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

  componentDidMount() {
      this.getEvents();
  }

  getEvents = () => {
    fetch("https://teste3-235e2.firebaseio.com/petshop.json")
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes)
      const dataEvents = [];
      for(let key in parsedRes){
        dataEvents.push({
          ...parsedRes[key]
        })
      }
      this.setState({ events: dataEvents});
    })
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
        <ModalTitle />
        {this.renderEventList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1
  }
});

export default PetShopScreen;

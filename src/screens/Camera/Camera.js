import React, {Component} from 'react';
import {View, Button, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraVideoModal from "./CameraVideoModal";
import DefaultButton from "../../Components/UI/DefaultButton";

class CameraScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    videoVisible: null
  }

  onNavigatorEvent = event => {
          this.videoClosedHandler();
    if(event.type === "NavBarButtonPress"){
      if(event.id === "sideDrawerToggle"){
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }

  videoClosedHandler = () => {
    this.setState({
      videoVisible: null
    });
  };

  videoOpenHandler = () => {
    this.setState({
      videoVisible: true
    });
  };

  renderVideo(){
    if(this.state.videoVisible){
      return(
        <CameraVideoModal
          onModalClosed={this.videoClosedHandler}
          videoVisible={this.state.videoVisible}
        />
      )
    }
    else{
      return(
        <View style={styles.buttonContainer}>
          <DefaultButton label='Acessar camera' style={[{width: "40%"}]} onPress={this.videoOpenHandler}/>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderVideo()}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer:{
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CameraScreen;

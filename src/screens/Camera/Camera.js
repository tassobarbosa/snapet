import React, {Component} from 'react';
import {View, Button, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import { RNCamera } from 'react-native-camera';
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
    if(event.type === "NavBarButtonPress"){
      this.videoClosedHandler();
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
        <TouchableOpacity onPress={this.videoClosedHandler}>
          <Video source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}   // Can be a URL or a local file.
               ref={(ref) => {
                 this.player = ref
               }}                                      // Store reference
             onBuffer={this.onBuffer}                // Callback when remote video is buffering
             onError={this.videoError}               // Callback when video cannot be loaded
             style={styles.backgroundVideo}
           />
        </TouchableOpacity>
      )
    }
    else{
      return(
        <View>
          <DefaultButton label='Acessar' style={[{width: "40%"}]} onPress={this.videoOpenHandler}/>
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
    flex: 1
  },
  backgroundVideo: {
    height: 300,
    width: 300
  },
});

export default CameraScreen;

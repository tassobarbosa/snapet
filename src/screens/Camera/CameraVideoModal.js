import React, {Component}  from "react";
import { Modal, View, Image, Text, Button,TouchableOpacity, StyleSheet } from "react-native";
import Video from 'react-native-video';
import CloseButton from '../../Components/UI/CloseButton';

export default class CameraVideoModal extends Component {
  constructor(props) {
    super(props);
  }


  render(){
    return (
      <View>
        <Modal
          onRequestClose={this.props.onModalClosed}
          visible={this.props.videoVisible !== null}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.buttonContainer}>
              <CloseButton onPress={this.props.onModalClosed} />
            </View>
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
  backgroundVideo: {
    height: 300,
    width: 300
  },  
});

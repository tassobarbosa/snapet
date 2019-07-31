import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Platform
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import CommonStyles from '../../Stylesheets/Common';

const defaultButton = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.buttonContainer}>
    <View style={styles.buttonContainer}>
      <Text style={styles.text}>{props.label}</Text>
    </View>
  </TouchableOpacity>
)


const styles = StyleSheet.create({
  buttonContainer: {
      height: 50,
      width: "100%",  //The Width must be the same as the height
      backgroundColor: CommonStyles.screenBackgroundColor,
      justifyContent: 'center',
      alignItems: "center",
  },
  buttonIcon: {
    marginRight: 20
  },
  text: {
    fontFamily: 'sans-serif',
    color: '#444',
    fontSize: 14
  }
});

export default defaultButton;

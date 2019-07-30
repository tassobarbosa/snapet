import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  Button,
  Image,
  ImageBackground
} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import backgroundImage from "../../assets/Images/login-screen.jpeg";
import DefaultInput from "../../Components/UI/DefaultInput";
import DefaultButton from "../../Components/UI/DefaultButton";

class AuthScreen extends Component {

loginHandler = () => {
  startMainTabs();
}

  render(){
    const backgnd = "https://thehappypuppysite.com/wp-content/uploads/2019/05/cute-dog-quotes-HP-long.jpg";
    return(
      <ImageBackground source={{uri: backgnd}} style={styles.backgroundImage}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
              <View style={styles.inputContainer}>
                <DefaultInput
                  placeholder="usuario"
                />
                <DefaultInput
                  placeholder="senha"
                />
                <Button title="login" onPress={this.loginHandler} />
                <DefaultButton label='ola'/>
              </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    width: "80%"
  },
}
)


export default AuthScreen;

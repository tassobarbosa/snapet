import React, {Component} from "react";
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  TextInput,
  StyleSheet,
  DatePickerAndroid,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


export default class UserForm extends Component {

  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
    this.state = {
        chosenDate: new Date(),
        androidDate: `${new Date().getUTCDate()}/${new Date().getUTCMonth() + 1}/${new Date().getUTCFullYear()}`,
        userName: '',
        userEmail: '',
      };
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  setDateAndroid = async () => {
    try {
      const {
        action, year, month, day,
      } = await DatePickerAndroid.open({
      date: new Date(),
      //minDate: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ androidDate: `${day}/${month + 1}/${year}` });
        //this.onUpdateDate();
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };


  render(){
    return(
      <View style={styles.container}>
        <TextInput
            style={styles.inputText}
            placeholder='Nome do Usuário'
            //onChangeText={value => this.onUpdatePetName(value)}
            value={this.state.userName}
          />
          <TextInput
              style={styles.inputText}
              placeholder='Email'
              //onChangeText={value => this.onUpdatePetBreed(value)}
              value={this.state.userEmail}
            />

            <TouchableOpacity onPress={() => this.setDateAndroid()}>
              <View style={styles.pickerContainer}>
                <Icon name="ios-calendar" size={25} style={styles.iconPicker}/>
                <Text style={{ fontSize: 16 }}>
                  {this.state.androidDate}
                </Text>
              </View>
            </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {

  }
});

import React, {Component} from "react";
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  TextInput,
  StyleSheet,
  TimePickerAndroid,
  Slider
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


export default class FoodForm extends Component {
  state = {
    mealName: "",
    mealTime: '00:00',
    mealPortion: 1
  };

  onUpdateMealName(mealName){
    this.setState({mealName});
    this.props.currentMealName(mealName);
  }

  onUpdateTime(){
    this.props.currentMealTime(this.state.mealTime);
  }

  onUpdateMealPortion(mealPortion){
    this.setState({mealPortion});
    this.props.currentMealPortion(mealPortion);
  }

  setTimeAndroid = async () => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false, // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
        const m = (minute < 10) ? `0${minute}` : minute;
        const h = (hour < 10) ? `0${hour}` : hour;
        console.log(`time: ${hour}:${minute}`);
        this.setState({ mealTime: `${h}:${m}` });
        this.onUpdateTime();
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  };

  render(){
    return(
      <View style={styles.container}>
        <TextInput
            style={styles.inputText}
            placeholder='Nome da refeicao'
            onChangeText={value => this.onUpdateMealName(value)}
            value={this.state.mealName}
          />

          <TouchableOpacity onPress={() => this.setTimeAndroid()}>
            <View style={styles.pickerContainer}>
              <Icon name="ios-time" size={25} style={styles.iconPicker}/>
              <Text style={{fontSize: 16 }}>
                {this.state.mealTime}
              </Text>
            </View>
          </TouchableOpacity>


          <Slider
            style={{width: 200, height: 40}}
            minimumValue={1}
            maximumValue={5}
            step={1}
            minimumTrackTintColor="#456456"
            maximumTrackTintColor="#000000"
            onValueChange={value => this.onUpdateMealPortion(value)}
          />
          <Text>{this.state.mealPortion}</Text>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {

  }
});

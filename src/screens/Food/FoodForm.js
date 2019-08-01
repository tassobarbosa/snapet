import React, {Component} from "react";
import {
  ScrollView,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TimePickerAndroid,
  Slider
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CommonStyles from '../../Stylesheets/Common';
import FoodImage from '../../assets/Images/comida.jpeg';

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
      <ScrollView style={styles.formContainer}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <Image source={FoodImage} style={styles.foodImage}/>
        <TextInput
            style={[styles.pickerContainer, styles.inputText]}
            placeholder='Nome da refeição'
            onChangeText={value => this.onUpdateMealName(value)}
            value={this.state.mealName}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={() => this.setTimeAndroid()}>
            <View style={styles.pickerContainer}>
              <Icon name="ios-time" size={25} style={styles.iconPicker}/>
              <Text style={{fontSize: 16 }}>
                {this.state.mealTime}
              </Text>
            </View>
          </TouchableOpacity>

      <View style={styles.sliderContainer}>
        <Slider
          style={styles.sliderStyle}
          minimumValue={1}
          maximumValue={5}
          step={1}
          minimumTrackTintColor="#456456"
          maximumTrackTintColor="#000000"
          onValueChange={value => this.onUpdateMealPortion(value)}
        />
        <View>
          <Text style={styles.textItem}>{this.state.mealPortion}</Text>
          <Text style={styles.textTitle}>porções</Text>
        </View>
      </View>

        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 10,
    marginBottom: 50,
  },
  foodImage: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  eventName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
    paddingBottom: 10,
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee",
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  inputText: {
    fontSize: 18,
  },
  iconPicker: {
    marginRight: 20
  },
  sliderStyle: {
    width: "100%",
  },
  sliderContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  textItem: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: CommonStyles.mainColor,
    paddingTop: 10,
},
textTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
}
});

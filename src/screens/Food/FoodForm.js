import React, {Component} from "react";
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  TextInput,
  StyleSheet,
  Platform
} from "react-native";


export default class FoodForm extends Component {
  state = {
    mealName: ""
  };

  onUpdateMealName(mealName){
    this.setState({mealName});
    this.props.currentMealName(mealName);
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
            style={styles.inputText}
            placeholder='Nome da refeicao'
            onChangeText={value => this.onUpdateMealName(value)}
            value={this.state.mealName}
          />


        <Text>Hora</Text>
        <Text>Procao</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {

  }
});

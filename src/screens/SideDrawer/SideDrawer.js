import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

class SideDrawer extends Component {
  render(){
    return(
      <View style={[
        styles.container,
        {width: Dimensions.get("window").width*0.8}
      ]} >
        <Text>Esse eh o side</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: "white",
  }
})


export default SideDrawer;

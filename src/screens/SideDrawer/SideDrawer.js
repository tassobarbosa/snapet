import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";

import DrawerButton from '../../Components/UI/DrawerButton';
import Icon from "react-native-vector-icons/Ionicons";

class SideDrawer extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Icon name="md-contact" size={50} color="#aaa" style={styles.headerIcon}/>
          <Text style={styles.headerText}>Tasso Barbosa</Text>
        </View>

        <DrawerButton name='Dados Pet' iconName='md-paw' onPress={this.goToVeterinario}/>
        <DrawerButton name='Configurar conta' iconName='md-settings' onPress={this.goToPetshop}/>
        <DrawerButton name='Sair' iconName='md-log-out' onPress={this.goToVacinas}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1,
    width: Dimensions.get("window").width * 0.7
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee",
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  headerIcon: {
    marginRight: 20
  },
  headerText: {
    fontSize: 18,
  },
});

export default SideDrawer;

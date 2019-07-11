import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

class SideDrawer extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.7 }
        ]}
      >
        <View style={[styles.drawerItem, {backgroundColor: "white"}]}>
          <Icon
            name="md-contact"
            size={50}
            color="#aaa"
            style={styles.drawerItemIcon}
          />
          <Text style={styles.drawerItemText}>Tasso Barbosa</Text>
        </View>
        <TouchableOpacity onPress={this.props.onLogout}>
          <View style={styles.drawerItem}>
            <Icon
              name="md-settings"
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <Text>Configurar conta</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onLogout}>
          <View style={styles.drawerItem}>
            <Icon
              name="md-paw"
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <Text>Configurar dados Pet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onLogout}>
          <View style={styles.drawerItem}>
            <Icon
              name="md-log-out"
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <Text>Sair</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee"
  },
  drawerItemIcon: {
    marginRight: 10
  },
  drawerItemText: {
    fontSize: 18,
    fontWeight: 'bold',    
  }
});

export default SideDrawer;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
  <TouchableOpacity>
    <View style={styles.listItem}>
      <View>
        <Text style={styles.textItem}>{props.eventDate}</Text>
        <Text style={styles.textItem}>{props.eventTime}</Text>
      </View>
      <View>
        <Text style={styles.textItem}>Valor: {props.eventValue}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 5,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    textItem: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    placeImage: {
      marginRight: 8,
      height: 30,
      width: 30
    }
});

export default listItem;

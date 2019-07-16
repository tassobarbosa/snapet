import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
  <TouchableOpacity>
    <View style={styles.listItem}>
        <Text>{props.eventName}</Text>
        <Text>{props.eventTime}</Text>
        <Text>{props.eventDate}</Text>
        <Text>{props.eventValue}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
      marginRight: 8,
      height: 30,
      width: 30
    }
});

export default listItem;

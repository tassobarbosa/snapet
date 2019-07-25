import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const foodEventItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <View>
        <Text style={styles.textItem}>{props.mealName}</Text>
        <Text style={styles.textItem}>{props.mealTime}</Text>
        <Text style={styles.textItem}>{props.mealPortion}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        marginBottom: 10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    textItem: {
      fontSize: 18,
      fontWeight: 'bold'
    }
});

export default foodEventItem;

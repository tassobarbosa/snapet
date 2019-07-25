import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const foodHeader = (props) => (

    <View style={styles.headerContainer}>
    </View>

);

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 120,
        backgroundColor: "#0bccde",
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold'
    },
});

export default foodHeader;

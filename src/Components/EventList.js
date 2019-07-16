import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const eventList = props => {
    return (
        <FlatList
          style={styles.listContainer}
          data={props.events}
          keyExtractor={item => item.key}
          renderItem={(info) => (
            <ListItem
              eventName={info.item.name}
              eventDate={info.item.chosenDate}
              eventTime={info.item.chosenTime}
              eventValue={info.item.value}
             />
          )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default eventList;

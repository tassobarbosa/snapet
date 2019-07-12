import React, { Component } from 'react';

import {
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class CloseButton extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <Icon name='md-close' size={30} />
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  closeIconContainer: {
    alignItems: 'flex-end'
  }
});

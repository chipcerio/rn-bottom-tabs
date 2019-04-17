import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class MessageDetailsContainer extends Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default MessageDetailsContainer;

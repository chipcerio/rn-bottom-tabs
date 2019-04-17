import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CHEESES } from '../../constants';

export class MessagesContainer extends Component {
  static navigationOptions = {
    title: 'Hola',
    header: null,
  };

  renderItem = ({ item }) => (
    <ListItem key={item} title={item} onPress={() => this.props.navigation.navigate('Details')} />
  );

  render() {
    return <FlatList data={CHEESES} renderItem={this.renderItem} keyExtractor={item => item} />;
  }
}

export default MessagesContainer;

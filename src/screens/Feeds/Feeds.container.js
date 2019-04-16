import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { CHEESES } from '../../constants';

export class FeedsContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'Feeds',
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Icon
        name={focused ? 'list' : 'list'}
        size={horizontal ? 20 : 26}
        iconStyle={{ color: tintColor }}
        type="MaterialIcons"
      />
    ),
  };

  renderItem = ({ item }) => <ListItem key={item} title={item} onPress={() => {}} />;

  render() {
    return <FlatList data={CHEESES} renderItem={this.renderItem} keyExtractor={item => item} />;
  }
}

export default FeedsContainer;

import React, { Component } from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import HomeTabs from './Tabs.container';

export class TabNavigator extends Component {
  static router = HomeTabs.router;

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" />
        <SafeAreaView style={{ flex: 1 }} forceInset={{ horizontal: 'always', top: 'always' }}>
          <HomeTabs navigation={navigation} />
        </SafeAreaView>
      </View>
    );
  }
}

export default TabNavigator;

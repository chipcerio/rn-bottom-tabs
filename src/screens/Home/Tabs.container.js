import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { ListItem, Icon } from 'react-native-elements';
import Messages from '../Messages/Messages.container';
import MessageDetails from '../Messages/Details.container';
import Feeds from '../Feeds/Feeds.container';
import People from '../People/People.container';
import Notifications from '../Notifications/Notifications.container';

const MessagesStack = createStackNavigator(
  {
    MessagesList: Messages,
    Details: MessageDetails,
  },
  {
    navigationOptions: () => ({
      tabBarLabel: 'Messages',
      tabBarIcon: ({ tintColor, focused, horizontal }) => (
        <Icon
          name={focused ? 'message' : 'message'}
          size={horizontal ? 20 : 26}
          iconStyle={{ color: tintColor }}
          type="MaterialIcons"
        />
      ),
    }),
  },
);

// https://github.com/react-navigation/react-navigation/blob/master/examples/NavigationPlayground/app/CustomTabUI.tsx
const TabNavigator = createBottomTabNavigator(
  {
    Messages: MessagesStack,
    Feeds,
    People,
    Notifications,
  },
  {
    navigationOptions: options => {
      console.log(options);
      return { header: null };
    },
  },
);

export default TabNavigator;

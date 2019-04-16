import { createBottomTabNavigator } from 'react-navigation';
import Messages from '../Messages/Messages.container';
import Feeds from '../Feeds/Feeds.container';
import People from '../People/People.container';
import Notifications from '../Notifications/Notifications.container';

// https://github.com/react-navigation/react-navigation/blob/master/examples/NavigationPlayground/app/CustomTabUI.tsx
const TabNavigator = createBottomTabNavigator({
  Messages,
  Feeds,
  People,
  Notifications,
});

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;

  return {
    headerTitle,
  };
};

export default TabNavigator;

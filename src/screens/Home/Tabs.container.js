import { createBottomTabNavigator } from 'react-navigation';
import Messages from '../Messages/Messages.container';
import Feeds from '../Feeds/Feeds.container';
import People from '../People/People.container';
import Notifications from '../Notifications/Notifications.container';

// https://github.com/react-navigation/react-navigation/blob/master/examples/NavigationPlayground/app/CustomTabUI.tsx
const TabLayout = createBottomTabNavigator({
  Messages,
  Feeds,
  People,
  Notifications,
});

export default TabLayout;

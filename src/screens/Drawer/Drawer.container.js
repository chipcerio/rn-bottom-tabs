import { createDrawerNavigator } from 'react-navigation';
import Profile from './Profile.container';
import Settings from './Settings.container';
import Support from './Support.container';

// https://github.com/react-navigation/react-navigation/blob/master/examples/NavigationPlayground/app/Drawer.tsx
const DrawerLayout = createDrawerNavigator({
  Profile,
  Settings,
  Support,
});

export default DrawerLayout;

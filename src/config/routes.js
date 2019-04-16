import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/Auth/Login.container';
import FeedsScreen from '../screens/Feeds/Feeds.container';
import AuthLoadingScreen from '../screens/Auth/AuthLoading/AuthLoading.container';

const AppStack = createStackNavigator({
  Login: LoginScreen,
  Feeds: FeedsScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
});

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  }),
  {
    initialRouteName: 'AuthLoading',
  },
);

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/Auth/Login.container';
import AuthLoadingScreen from '../screens/Auth/AuthLoading/AuthLoading.container';
import HomeTabNavigator from '../screens/Home/TabNavigator';

const AppStack = createStackNavigator({
  // Login: LoginScreen,
  Home: HomeTabNavigator,
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

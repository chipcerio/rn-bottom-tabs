import React, { Component } from 'react';
import AuthLoading from './AuthLoading.component';

class AuthLoadingContainer extends Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = () => {
    // const userToken = await AsyncStorage.getItem('userToken');
    // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    this.props.navigation.navigate('App');
  };

  render() {
    return <AuthLoading />;
  }
}

export default AuthLoadingContainer;

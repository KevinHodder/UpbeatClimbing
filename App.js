import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppNavigator from './src/app.navigator';
import {Provider} from 'mobx-react';
import stores from './src/stores';


export default class App extends React.Component {
  
  render() {
    console.log('test debugging');
    return (
      <Provider stores={stores}>
        <AppNavigator />
      </Provider>
    );
  }
}
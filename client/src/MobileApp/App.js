/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import { createStackNavigator } from 'react-navigation'; 
import { Switch, Route, Link } from "react-router-dom";
import { NativeRouter, Platform, StyleSheet, Text, View, Button } from 'react-native';
import Questionnaire from './components/questionaire/questionaire';
import Question from './components/question/question';
import Test from './components/testing/testing'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


// const Navigation = createStackNavigator(
//   {
//   First: {screen: Home},
//   Second: {screen: Questionnaire}
// },
// {
//   initialRouteName: 'First',
// }
// )


export default class App extends Component {
  render() {
    const language = "English"
    return (
      <View style={styles.container}>
        <Questionnaire language={language}></Questionnaire>
        {/* <Text>hi</Text> */}
        {/* <Test></Test> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

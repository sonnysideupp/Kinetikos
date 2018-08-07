/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { NativeRouter, Platform, StyleSheet, Text, View, Button,AsyncStorage } from 'react-native';
import Questionnaire from './components/questionaire/questionaire';
import Question from './components/question/end';
import Test from './components/testing/testing'
import { ApolloLink } from "apollo-link"
import { createStackNavigator } from 'react-navigation';
import Home from "./components/homepage/Home"
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Sensor from "./components/Sensor/sensor"
import Done from "./components/question/end"
import Login from "./components/entry/login"
import Signup from "./components/entry/signup"
import { setContext } from "apollo-link-context"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Navigation = createStackNavigator(
  {
    First: {screen: Home},
    Second: {screen: Questionnaire},
    Third: {screen: Sensor},
    Fourth: {screen: Done},
    Fifth: {screen: Login},
    Sixth: {screen: Signup},
  },
  {
    initialRouteName: 'First',
  }
);

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const httpLink = new HttpLink({uri: `http://10.0.2.2:4000`})

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
cache: new InMemoryCache(),
});

export default () => (
  <ApolloProvider client={client}>
    <Navigation language={"English"}/>
    </ApolloProvider>
);

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

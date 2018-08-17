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
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Sensor from "./components/Sensor/sensor"
import Done from "./components/question/end"
import Login from "./components/entry/login"
import Signup from "./components/entry/signup"
import { setContext } from "apollo-link-context"
import HomePage from "./trial2/src/screens/HomePage"
import Activity from "./trial2/src/screens/ActivityMonitor"
import Settings from "./components/settings/settings"
import Language from "./components/language/language"
import QuestionnaireEntry from "./questions/screens/Questionnaire2"
import Q3 from "./trial3/screens/QTextcopy"

import Fonts from "./components/fonts/fonts"
import Profile from "./components/profile/profile"
import Loading from "./components/loading/loading"
import Clinician from "./components/clinician/clinician"

const Navigation = createStackNavigator(
  {
    First: {screen: Login},
    Second: {screen: Questionnaire},
    Third: {screen: Sensor},
    Fourth: {screen: Done},
    Fifth: {screen: HomePage},
    Sixth: {screen: Signup},
    Seventh: {screen: Activity},
    Eighth: {screen: Settings},
    Ninth: {screen: Language},
    Tenth: {screen: Fonts},
    Eleventh: {screen: Profile},
    Twelveth: {screen: Loading},
    Thirdteen: {screen: Clinician},
    Fourteenth: {screen: QuestionnaireEntry},
  },
  {
    initialRouteName: 'Twelveth',
    navigationOptions:{
      headerStyle: {
        backgroundColor: 'transparent'
      },
      headerTitleStyle:{
        fontSize:17
      },
      headerTransparent: true,
    }
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
const httpLink = new HttpLink({uri: `http://192.168.1.175:4000`})

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

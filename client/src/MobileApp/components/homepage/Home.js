import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { AsyncStorage } from "react-native"


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });


export default class Home extends React.Component {
    static navigationOptions = {
        title: "Home"
    }
    
    render() {
  
        var {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
        <Button onPress= {async() => {
           
          navigate("Second")}} title ="Go to questionnaire"/>
        <Text/>
         <Button onPress= {()=> navigate("Third")} title ="Go to sensor"/>
        <Text/>
        <Button onPress= {async() => {
           
           navigate("Fifth")}} title ="Go to Login"/>
        <Text/>
        <Button onPress= {async() => {
           
           navigate("Sixth")}} title ="Go to Sign up"/>
        {/* <Button onPress= {()=> navigate("Fourth")} title ="Go to Test"/>  */}
          <Text style={styles.welcome}>Hello!</Text>
          <Text style={styles.instructions}>testing</Text>
          <Text style={styles.instructions}></Text>
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
  
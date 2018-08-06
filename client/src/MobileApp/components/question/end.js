//use query for question type
import React, { Component } from 'react'
import RadioForm, { RadioButton, RadioButtonInput } from 'react-native-simple-radio-button'
import { Text, View, StyleSheet,Button } from 'react-native'
import { Query, ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'


export default class Done extends Component {


    render(){
        var {navigate} = this.props.navigation;
        return(

    <View>
    <Text>Congradualtions you are finished!</Text>
    <Button onPress= {()=> navigate("First")} title ="Go to Homepage"/>
    </View>


        )
    }

}
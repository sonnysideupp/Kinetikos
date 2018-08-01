//use query for question type
import React, { Component } from 'react'
import RadioForm, { RadioButton, RadioButtonInput } from 'react-native-simple-radio-button'
import { Text, View, StyleSheet } from 'react-native'
import { Query, ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'
import Options from '../options/options'

const GET_ALT = gql`
query alternatives($listID: ID) {
    alternatives(listID: $listID) {
       id
       description
       value
       order
       listID
    }
}
`


export default class Question extends Component {

    radio_props = [
        {label: 'param1', value: 0 },
        {label: 'param2', value: 1 }
    ]



    questionType(data) {
        if(data.question.questionTypeID === "cjk9udmj618c60b0683u1uzfh") {
            return (
                
                <View>
                <Query query={GET_ALT}
                variables={{
                    listID: data.question.listID
                }}>
                {({ loading, error, data, refetch }) => {
                    if (loading) {
                        return(<Text>Loading</Text>);
                    }
                    if (error) {
                        return(<Text>`Error! ${error.message}`</Text>);
                    }
                    
                    return (
                        <View>
                           <Options alternatives={data.alternatives}/>
                        </View>
                    )
                }}
                </Query>
                </View>
              
              );
        } else {
            return (
                <View style={styles.question}>
                    <Text>place input</Text>
                </View>
            )
        }
    }

    function(data) {
        return (
            <Text>testing the function</Text>
        )
    }

    render () {

        type = this.questionType(this.props)

        return (
            <View style={styles.container}>

                <Text style={styles.question}>{this.props.index}) {this.props.questionText.text}</Text>
                {type}               

            </View>
        )
    }
}

const styles = StyleSheet.create({
    question: {
        fontSize: 25,
        textAlign: "center",
        color: "#00008b"
    },

    container: {
        alignSelf: "flex-start", 
        justifyContent: "flex-start",
        borderStyle: "solid",
        borderColor: "#ff8c00"
    }
});
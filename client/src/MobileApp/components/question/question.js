//use query for question type
import React, { Component } from 'react'
import RadioForm, { RadioButton, RadioButtonInput } from 'react-native-simple-radio-button'
import { Text, View, StyleSheet } from 'react-native'
import { Query, ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const GET_OPTIONS = gql`
query questionOptions {
    questionOptions(data: [{language: {name: "English"}}]) {
        id
        QuestionID
        QuestionTypeID
        options
        language {
            name
          }
    }
}
`


export default class Question extends Component {

    radio_props = [
        {label: 'param1', value: 0 },
        {label: 'param2', value: 1 }
    ]

    questionType(data, arg) {
        if(data.question.questionType.id === "cjk2f4oee8zjz0b29m50j3odw") {
            return (
                <View>
                    {() => {
                        if(arg.args) {
                            <Text>{arg}</Text>
                        }
                    }}
                    <Text>I am in the function questionType</Text>
                    <Text>args: {arg} end of args</Text>
                  {/* <RadioForm
                    radio_props={this.radio_props}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                  /> */}
                </View>
              );
        } else {
            return (
                <View style={styles.question}>
                    <Text>HELLO</Text>
                </View>
            )
        }
    }

    render () {

        // this.state = {
        //     data: [
        //         {QuestionID: this.props.question.questionID},
        //         {QuestionTypeID: this.props.question.questionTypeID},
        //         {language: {name: this.props.question.language.name}}
        //     ]
        //     //args: "hello"
        // }

        const hello = this.props

        const client = new ApolloClient({
            link: new HttpLink({uri: `http://10.0.2.2:4000`}),
            cache: new InMemoryCache(),
        });

        type = this.questionType(this.props, this.state)

        return (
            <ApolloProvider client={client}>
            <View style={styles.container}>

                <Text style={styles.question}>{this.props.index}) {this.props.question.text}</Text>

                {() => {
                    if(true) {
                        return(<Text>TRUE</Text>)
                    }
                }}

                <Query query={GET_OPTIONS}>
                {({ loading, error, data, refetch }) => {
                    if (loading) {
                        return(<Text>Loading</Text>);
                    }
                    if (error) {
                        return(<Text>`Error! ${error.message}`</Text>);
                    }
                    
                    return (
                        <View>
                            {/* {questionType(this.props, data.questionOptions[0].options)} */}
                            {/* will only access the first from the array  */}

                            {/* <Text>{data.questionOptions[0].options}</Text> */}

                            {() => {
                                this.setState({
                                    ...this.state,
                                    args: data.questionOptions[0].options
                                })

                                return(<Text>data: {data.questionOptions[0].options} end</Text>)
                            }}

                            {/* {type} */}


                            {/* {data.questionOptions.map((question, idx) => {
                                const index = idx + 1
                                //need to pass thing information to radio props
                                return (
                                    
                                <Text>{question.options}</Text>
                                )
                            })} */}
                        </View>
                    )
                }}
                </Query>

                {/* {type}               */}

            </View>
            </ApolloProvider>
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
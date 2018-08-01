//use query for all questions
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Query, ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'
import Question from '../question/question2'

const GET_QUES = gql`
query questionnaire {
    questionnaire {
        id
        description
        questionTypeID
        listID
    }
}
`

const GET_TEXTS = gql`
query questionTexts($language: String, $questionID: ID) {
    questionTexts(language: {name: $language}, questionID: $questionID) {
        id
        text
        questionID
        language {
            id
            name
        }
    }
}
`

export default class Questionaire extends Component {
    render() {  

        return (
           
            <View>
                <Query query={GET_QUES} key="quesQuery"
                variables= {{
                    language: this.props.language
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
                            {data.questionnaire.map((question, idx) => {
                                const index = idx + 1
                                return (
                                <Query query={GET_TEXTS} key="textsQuery"
                                variables= {{
                                    //language: this.props.language,
                                    questionID: question.id
                                }}>
                                {({ loading, error, data, refetch }) => {
                                    if (loading) {
                                        return(<Text>Loading</Text>);
                                    }
                                    if (error) {
                                        return(<Text>`Error! ${error.message}`</Text>);
                                    }

                                    if(data.questionTexts) {
                                        return (
                                            <View>
                                                <Text>language is    {this.props.language}</Text>
                                            <Question index={index} question={question} questionText={data.questionTexts[0]}/>
                                            </View>
                                        )
                                    }
                                
                                }}
                             </Query>
                            )
                        })}
                        </View>
                    )
                }}
                </Query>
                </View>
           

        )
    }
}
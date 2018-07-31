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
query questionTexts($language: String) {
    questionTexts(language: {name: $language}) {
        id
        text
        questionID
        questionType {
            id
            description
        }
        language {
            id
            name
        }
    }
}
`

export default class Questionaire extends Component {
    render() {

        const client = new ApolloClient({
            link: new HttpLink({uri: `http://10.0.2.2:4000`}),
          cache: new InMemoryCache(),
        });

        return (
            <ApolloProvider client={client}>
            <View>
                <Query query={GET_QUES} 
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
                            {data.questionTexts.map((question, idx) => {
                                const index = idx + 1
                                return (
                                <Question key={index} index={index} question={question} client={client}/>
                                )
                            })}
                        </View>
                    )
                }}
                </Query>
                </View>
            </ApolloProvider>

        )
    }
}
//use query for all questions
import React, { Component } from 'react'
import { View, Text } from 'react-native'
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
// query questionOptions {
//     questionOptions(data: [{language: {name: "English"}}]) {
//         id
//         QuestionTypeID
//         QuestionID
//         options
//         language {
//             id
//             name
//         }
//     }
// }
// `

export default class Test extends Component {
    render() {

        const client = new ApolloClient({
            link: new HttpLink({uri: `http://10.0.2.2:4000`}),
          cache: new InMemoryCache(),
        });

        return (
            <ApolloProvider client={client}>
            <View>
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
                            {data.questionOptions.map((question, idx) => {
                                const index = idx + 1
                                return (
                                <Text>{question.id}</Text>
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
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RadioForm from 'react-native-radio-form'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_ALT_TEXT = gql`
query alternativeTexts($alternativeID: ID!, $language: LanguageWhereInput!) {
    alternativeTexts(language: $language, alternativeID: $alternativeID) {
        id
        alternativeID
        text
        language {
            id
            name
        }
    }
}
`

export default class Options extends Component {


    onPress = (active) => this.setState({selected: value})


    onSelect(index, value){
        this.setState({
          text: `Selected index: ${index} , value: ${value}`
        })
      }
      

    render() {

        const options = []

        return (
            <View>           
                {this.props.alternatives.map((option, index) => {
                    return (
                    <Query query={GET_ALT_TEXT}
                    variables={{
                        alternativeID: option.id,
                        language: {name: this.props.language}
                    }}>
                    {({ loading, error, data, refetch }) => {
                        if (loading) {
                            return(<Text>Loading</Text>);
                        }
                        if (error) {
                            return(<Text>`Error! ${error.message}`</Text>);
                        }
                        
                        if (data.alternativeTexts) {
                            options.push({label: data.alternativeTexts[0].text, value: data.alternativeTexts[0].text})
                            
                            return (
                                <Text>options so far  {options[0].label}</Text>
                            )
                        }
                    }}
                    </Query>
                    )
                    
                })}
                <Text>ABOVE RADIO</Text>
                <Text>{options[0]}</Text>
                <RadioForm
                    key="options-display"
                    dataSource={options}
                    itemShowKey="label"
                    itemRealKey="value"
                    onPress={this.onPress}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    radio: {
        fontSize: 15,
        position: "relative",
        color: "#00008b"
    },

    container: {
        alignSelf: "flex-start", 
        justifyContent: "flex-start",
        borderStyle: "solid",
        borderColor: "#ff8c00"
    }
});
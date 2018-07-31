import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import gql from 'graphql-tag'

const GET_ALT_TEXT = gql`
query alternativeTexts($alternativeID: ID!, $language: String!) {
    alternativeTexts(language: {name: $language}, alternativeID: $alternativeID) {
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

    formatOptions = (arg) => {
        let newArr = []
        arg.map((item, index) => newArr.push({label: item, value: item}))
        return newArr
    }

    onPress = (active) => this.setState({selected: value})


    onSelect(index, value){
        this.setState({
          text: `Selected index: ${index} , value: ${value}`
        })
      }

      options = (element) => array.push(element)

    render() {

        const radioOptions = this.formatOptions(this.props.options)

        return (
            <View>              
                iterate through alternatives, query, and make the first a radio option
                {this.props.alternatives.map((option, index) => {
                    <Query query={GET_ALT_TEXT}
                    variables={{
                        alternativeID: option.alternativeID,
                        language: this.props.language
                    }}>
                    {({ loading, error, data, refetch }) => {
                        if (loading) {
                            return(<Text>Loading</Text>);
                        }
                        if (error) {
                            return(<Text>`Error! ${error.message}`</Text>);
                        }
                        
                        if (data.alternativeTexts) {
                            options(data.alternativeTexts[0])
                        }
                    }}
                    </Query>
                    
                })}

                <RadioForm
                    radio_props={radioOptions}
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
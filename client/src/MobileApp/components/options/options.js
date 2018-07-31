import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

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

    render() {

        const radioOptions = this.formatOptions(this.props.options)

        return (
            <View>              

                {this.props.options.map((option, index) => {
                    return (
                        <RadioForm
                            radio_props={radioOptions}
                            itemShowKey="label"
                            itemRealKey="value"
                            onPress={this.onPress}
                            />
                    )
                    
                })}

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
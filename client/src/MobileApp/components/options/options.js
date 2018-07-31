import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class Options extends Component {

    radio_props = [
        {label: 'param1', value: 0 },
        {label: 'param2', value: 1 }
    ]

    state = {
        options: [
            {label: 'param1', value: 0 },
            {label: 'param2', value: 1 }
        ]
    }

    onSelect(index, value){
        this.setState({
          text: `Selected index: ${index} , value: ${value}`
        })
      }

    render() {
        return (
            <View>
                <Text>{this.props.options}</Text>
                <RadioGroup style={styles.radio} onSelect={(index, value) => this.onSelect(index, value)}>
                <RadioButton key={"1"} value={"1"}>
                             <Text>This is item 1</Text>
                </RadioButton>
                </RadioGroup>

                

                {this.props.options.map((option, index) => {
                    // val = this.state.options
                    // val.push({label: option, value: option})
                    // this.setState({
                    //     ...this.state,
                    //     options: val
                    // })
                    // return (
                    //     <RadioButton key={index} value={option}>
                    //         <Text>This is item {option}</Text>
                    //     </RadioButton>
                    // )
                    // <Text>{option}</Text>
                    
                })}
                {/* </RadioGroup> */}

                {/* <RadioForm
                    radio_props={this.state.options}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                  /> */}
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
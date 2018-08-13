//use query for question type
import React, { Component } from 'react'
import RadioForm, { RadioButton, RadioButtonInput } from 'react-native-simple-radio-button'
import { Text, View, StyleSheet,TouchableOpacity,Button } from 'react-native'
import { Query, ApolloProvider } from 'react-apollo'
import { FormLabel, FormInput } from "react-native-elements"
import gql from 'graphql-tag'
import { AsyncStorage } from "react-native"
import { CheckBox } from 'react-native-elements'
import SelectMultiple from 'react-native-select-multiple'

const GET_LANGUAGES = gql`
query languages($where:LanguageWhereUniqueInput) {
    languages(where:$where) {
     name
    }
}
`


export default class Language extends Component {

   
    state = { 
            value:0,
            number:0
        }
    onSelectionsChange = (selectedAnswers) => {
        // selectedFruits is array of { label, value }
        this.setState({ selectedAnswers })
      }
   
    render () {
        
        var {navigate} = this.props.navigation;
            var options = []
            return (
                
                <View>  
               
                    <Query query={GET_LANGUAGES} key="altTextQuery"
                    variables={{
                        where:{}
                    }}>
                    {({ loading, error, data, refetch }) => {
                        if (loading) {
                            return(<Text>Loading</Text>);
                        }
                        if (error) {
                            return(<Text>`Error! ${error.message}`</Text>);
                        }
                        for(var i = 0; i < data.languages.length; i ++)
                        {
                            options.push({label:data.languages[i].name,value:i})
                        }
                        
                            return (
                                <View>
                                <RadioForm
                                sytle={styles.radio} 
                                radio_props = {options}
                                onPress={(label, value) => {
                        
                                    this.setState({ answer: label, number:value})}}
                                />
                                <TouchableOpacity
                                style={styles.signinButton}
                                onPress={async () => {
                                    await  AsyncStorage.setItem("Language", data.languages[this.state.number].name)
                                    await navigate("Fifth") }}
                              >
                                <Text style={styles.signinButtonText}>Submit!</Text>
                              </TouchableOpacity>
                              </View>
                            )
                        }
                    }
                    </Query>
                    
                

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
    radio: {
        width: "100%",
    },
    signinButton: {
        width: "75%",
        borderRadius: 15,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 7.5,
        paddingBottom: 7.5
      },

    container: {
        alignSelf: "flex-start", 
        justifyContent: "flex-start",
        borderStyle: "solid",
        borderColor: "#ff8c00"
    },
    label: {
        color: "purple",
        fontSize: 18
      },
      buttonContainer: {
        alignSelf: "center",
        justifyContent: "center",
        width: "100%",
        paddingTop: 50,
        flexDirection: "row"
      }
});
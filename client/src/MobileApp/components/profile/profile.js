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

const GET_USER = gql`
query {
    me {
        name
        email
        birthday
        idtype
}
}
`


export default class Profile extends Component {

   
    state = { 
            value:0,
            number:0
        }

   
    render () {
        
        var {navigate} = this.props.navigation;

            return (
                
                <View>  
               
                    <Query query={GET_USER} key="altTextQuery">
                    {({ loading, error, data, refetch }) => {
                        if (loading) {
                            return(<Text>Loading</Text>);
                        }
                        if (error) {
                            return(<Text>`Error! ${error.message}`</Text>);
                        }
                        
                            return (
                                <View style ={{justifyContent: "center"}}>
                                <Text>
                                    Name: {data.me.name}
                                </Text>
                                <Text>
                                    email: {data.me.email}
                                </Text>
                                <Text>
                                    date of birth: {data.me.birthday}
                                </Text>
                                <Text>
                                    ID Number: {data.me.idtype}
                                </Text>
                              </View>
                            )
                        }
                    }
                    </Query>
                    
                    <TouchableOpacity
                                style={styles.signinButton}
                                onPress={async () => {
                                    await navigate("Thirdteen") }}
                              >
                                <Text style={styles.signinButtonText}>Clinician Info!</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={styles.signinButton}
                                onPress={async () => {
                                    await navigate("Fifth") }}
                              >
                                <Text style={styles.signinButtonText}>Go Home!</Text>
                              </TouchableOpacity>

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
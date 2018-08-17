//use query for question type
import React, { Component } from 'react'
import RadioForm, { RadioButton, RadioButtonInput } from 'react-native-simple-radio-button'
import { Text, View, StyleSheet,TouchableOpacity,Button ,Image} from 'react-native'
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
            number:null
        }
    onSelectionsChange = (selectedAnswers) => {
        // selectedFruits is array of { label, value }
        this.setState({ selectedAnswers })
      }
   
    render () {
        
        var {navigate} = this.props.navigation;
            var options = []
            var buttons = []
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
                        for(let i = 0; i < data.languages.length; i ++)
                        {
                            options.push({label:data.languages[i].name,value:i});
                            var number = i;
                            var opacity = null;
                            var image = "Gradient_QvTTfdx.png";
                            if (this.state.number === i) {
                                opacity = 0.1;
                                image = "Gradient_eUSP669.png";
                        }       
                        buttons.push(
                            <TouchableOpacity
                            style={styles.radioButton}
                            onPress={() => {
                            this.setState({number:i})}}>
                                    <Image
                                    style={styles.radioImage}
                                    source={require(`../../trial1/assets/Gradient_QvTTfdx.png`)}
                                    opacity={opacity}
                                />
                                    <Text style={{position: "absolute",
                                    backgroundColor: "transparent",
                                    marginBottom: 0,
                                    padding: 0,
                                    fontSize: 25,
                                    fontFamily: "Aller-Bold",
                                    textAlign: "center",
                                    color: "rgba(255,255,255,1)"}}>{data.languages[i].name}</Text>
                            </TouchableOpacity>
                            
                        )
                    }
                            return (
                                <View>

                                <View style={styles.radioGroup}>
                                {buttons}
                                </View>
                        
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
    },
    multiple: {
        width: "85%",
        alignSelf: "center",
        padding: 25,
    },
    row: {
        padding: 15,
        
    },
    radioImage: {
        top: 0,
        left: 0,
        bottom: 0,
        width: 132,
        height: 38,
        backgroundColor: "transparent",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    },
    radioGroup: {
        flexWrap: "wrap",
        justifyContent: "space-between",
        justifyContent: "space-around",
        paddingBottom: 10,
        paddingTop: 10,
        height: "80%"
    },
    radioButton: {
        alignContent: "center",
        alignItems: "center",
    },
    text: {
        // top: 5,
        // bottom: 5,
        // left: "22.73%",
        // width: 72,
        // height: 40,
        position: "absolute",
        backgroundColor: "transparent",
        marginBottom: 0,
        padding: 0,
        fontSize: 20,
        fontFamily: "Aller-Bold",
        textAlign: "center",
        color: "rgba(255,255,255,1)"
    }
});
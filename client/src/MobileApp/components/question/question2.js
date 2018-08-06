//use query for question type
import React, { Component } from 'react'
import RadioForm, { RadioButton, RadioButtonInput } from 'react-native-simple-radio-button'
import { Text, View, StyleSheet,TouchableOpacity, } from 'react-native'
import { Query, ApolloProvider } from 'react-apollo'
import { FormLabel, FormInput } from "react-native-elements"
import gql from 'graphql-tag'
import { AsyncStorage } from "react-native"
import { CheckBox } from 'react-native-elements'

const GET_ALT_TEXT = gql`
query alternativeTexts($where:AlternativeTextWhereInput) {
    alternativeTexts(where:$where) {
        id
        alternativeID{
            question{
              number
            }
          }
        text
        language {
            id
            name
        }
    }
}
`


export default class Question extends Component {

   
    state = {checked: false}
   
    render ()
{
    if( this.props.questiontype == "Input"){
return(
        <View>  
        <FormLabel labelStyle={styles.label}>Answer</FormLabel>
                <FormInput
                  onChangeText={text => {
                    this.setState({ answer: text });
                  }}
                />
         <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signinButton}
            onPress={() => {

                if(this.props.state.number == this.props.numberofquestions - 1){
                    this.props.navigate.navigate("Fourth")
                }
                else{
                this.props.function(this.props.state.number+1)
                this.props.navigate.navigate("Second") }}}
          >
            <Text style={styles.signinButtonText}>Submit!</Text>
          </TouchableOpacity>

        </View>
        </View>
)
    }
    if( this.props.questiontype == "Select Multiple"){
        const 
        var options = []
        return(
                <View>  
            <Query query={GET_ALT_TEXT} key="altTextQuery1"
                    variables={{
                        where:{language:{name:this.props.language},alternativeID:{question:{number:this.props.number}}}
                    }}>
                    {({ loading, error, data, refetch }) => {
                        if (loading) {
                            return(<Text>Loading</Text>);
                        }
                        if (error) {
                            return(<Text>`Error! ${error.message}`</Text>);
                        }
                        for(var i = 0; i < data.alternativeTexts.length; i ++)
                        {
                            options.push(<CheckBox title ={data.alternativeTexts[i].text} checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'checked={this.state.checked} onPress={() => this.setState({checked: !this.state.checked})}/>)
                        }
                        
                            return (
                                <View>
                                {options}
                                <TouchableOpacity
                                style={styles.signinButton}
                                onPress={() => { 

                                    if(this.props.state.number == this.props.numberofquestions - 1){
                                    this.props.navigate.navigate("Fourth")
                                }
                                else{
                                this.props.function(this.props.state.number + 1)
                                this.props.navigate.navigate("Second") }}}
                                
                                   
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


        if( this.props.questiontype == "Multiple Choice") {
            var options = []
            return (
                
                <View>  
               
                    <Query query={GET_ALT_TEXT} key="altTextQuery"
                    variables={{
                        where:{language:{name:this.props.language},alternativeID:{question:{number:this.props.number}}}
                    }}>
                    {({ loading, error, data, refetch }) => {
                        if (loading) {
                            return(<Text>Loading</Text>);
                        }
                        if (error) {
                            return(<Text>`Error! ${error.message}`</Text>);
                        }
                        for(var i = 0; i < data.alternativeTexts.length; i ++)
                        {
                            options.push({label:data.alternativeTexts[i].text,value:data.alternativeTexts[i].alternativeID.value})
                        }
                        
                            return (
                                <View>
                                <RadioForm 
                                radio_props = {options}
                                onPress={(label) => this.setState({ answer: label })}
                                />
                                <TouchableOpacity
                                style={styles.signinButton}
                                onPress={() => {
                
                                    if(this.props.state.number == this.props.numberofquestions - 1){
                                        this.props.navigate.navigate("Fourth")
                                    }
                                    else{
                                    this.props.function(this.props.state.number+1)
                                    this.props.navigate.navigate("Second") }}}
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
 

    retrieveData = async () => {
        try {
    
         const x = await AsyncStorage.getItem('number');
         return JSON.parse(x);
        } catch (error) {
          console.log("error")
        }
      }   
}


const styles = StyleSheet.create({
    question: {
        fontSize: 25,
        textAlign: "center",
        color: "#00008b"
    },
    signinButton: {
        width: "45%",
        borderRadius: 15,
        justifyContent: "center",
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
        color: "white",
        fontSize: 14
      },
      buttonContainer: {
        justifyContent: "space-between",
        width: "75%",
        paddingTop: 50,
        flexDirection: "row"
      }
});
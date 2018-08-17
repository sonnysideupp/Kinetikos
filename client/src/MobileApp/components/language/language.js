//use query for question type
import React, { Component } from 'react'
import RadioForm, { RadioButton, RadioButtonInput } from 'react-native-simple-radio-button'
import { Text, View, StyleSheet,TouchableOpacity,Button ,Image} from 'react-native'
import { Query, ApolloProvider } from 'react-apollo'
import { FormLabel, FormInput } from "react-native-elements"
import gql from 'graphql-tag'
import { AsyncStorage } from "react-native"
import { Svg, Path } from "react-native-svg";
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
                
                <View style={styles.root}>  
               
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
                                <Text>Submit!</Text>
                              </TouchableOpacity>
                              </View>
                            )
                        }
                    }
                    </Query>
                    
        <View style={styles.header} /*locked*/>
          <View style={styles.rectangle7} />
          <Image
            source={require("../../trial2/src/assets/953f88ea27175375d51167f2e35e70b3aa71adc3.png")}
            style={styles.kinetikosIconTransparent85Balck}
          />
          <Svg
            viewBox="0 0 360.90 2.90"
            preserveAspectRatio="none"
            style={styles.lineCopy}
          >
            <Path
              strokeWidth={0.45}
              fill="transparent"
              stroke="rgba(179,179,179,1)"
              isClosed={false}
              d="M0.23 1.23 L360.23 1.23 "
            />
          </Svg>
          <Text style={styles.homePage}>Change Font</Text>
        </View>

            </View>
              
              )
        }
    
    
 
 
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 0
      },
    header: {
        height: 97,
        width: 360
      },
      rectangle7: {
        position: "absolute",
        top: "0.00%",
        left: "-50%",
        height: "97.94%",
        width: "200.00%",
        backgroundColor: "rgba(248,248,248,1)"
      },   
      kinetikosIconTransparent85Balck: {
        position: "absolute",
        top: "36.08%",
        left: "85.00%",
        height: "46.39%",
        width: "10.00%",
        backgroundColor: "transparent"
      },
      lineCopy: {
        position: "absolute",
        height: "2.53%",
        width: "100.13%",
        top: "97.71%",
        left: "-0.06%",
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
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
    text: {
        top: 5,
        bottom: 5,
        left: "19%",
        width: 72,
        height: 40,
        position: "absolute",
        alignSelf: "center",
        backgroundColor: "transparent",
        marginBottom: 0,
        padding: 0,
        fontSize: 20,
        fontFamily: "Aller-Bold",
        textAlign: "center",
        color: "rgba(255,255,255,1)"
      },

    container: {
        alignSelf: "flex-start", 
        justifyContent: "flex-start",
        borderStyle: "solid",
        borderColor: "#ff8c00"
    },  homePage: {
        position: "absolute",
        top: "46.39%",
        left: "4.44%",
        height: "48.45%",
        width: "80.56%",
        backgroundColor: "transparent",
        color: "rgba(0,0,0,1)",
        fontSize: 36,
        fontFamily: "Aller-Bold"
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
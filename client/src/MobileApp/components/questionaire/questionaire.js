//use query for all questions
import React, { Component } from 'react'
import { View, Text ,StyleSheet, Button, AsyncStorage, Image} from 'react-native'
import { Svg, Path } from "react-native-svg"
import { Query, Mutation } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'
import Question from '../question/question2'
import MultipleChoice from "../../trial3/screens/MultipleChoice"
import Input from "../../trial3/screens/Input"
import SelectMultiple from "../../trial3/screens/SelectMultiple"

const GET_TEXTS = gql`
query questionTexts($where:QuestionTextWhereInput) {
    questionTexts(where:$where) {
        id
        text
        language{
          name
        }
        question{
          number
          questionType{
            type
          }
        }
    }
}
`

const Questionnaire = gql`
query questionnaires($where:QuestionnaireWhereInput) {
    questionnaires(where:$where) {
        numberID
        questions{
          number
          questionType{
            type
          }
          questionText{
            text
          }
        }
        questionairename{
          text
          language{
            name
          }
        }
    }
}
`
const SUBMIT_ANSWERS = gql`
mutation submitanswer($value:String!,$questionnumber:Int!,$alternativeId:String) {
    submitanswer(value:$value,questionnumber:$questionnumber,alternativeId:$alternativeId) {
      name
      email
    }
}
`
export default class Questionaire extends Component {
 
state = {number:0,
    answers:[],
    language:"English",
    font: 25
}

    constructor(props) {
        super(props)

        this.Update = this.Update.bind(this)
    }

   
    
 Update(value) {
    this.setState({number: value})
}

UpdateAnswer(value,questionNumber,alternativeId){
    this.state.answers.push({value:value,questionNumber:questionNumber,alternativeId:alternativeId})

}
componentWillMount() {
    var reallanguage
    var font
    var font1
    (async ()=> {
      try{
     
     reallanguage =  await  AsyncStorage.getItem("Language");
     font =  await  AsyncStorage.getItem("Font");
     font1 = JSON.parse(font)
     console.log("font" + font)
    if(reallanguage == undefined)
      {
    reallanguage = "English"
      };
      this.setState({language:reallanguage});
      this.setState({font:font1});
   
           }
           catch (err) {
             console.warn(err)
           }
    })()
  }


    render() {  

        var {navigate} = this.props.navigation;
       

     


    return (
            
            <View style={styles.margin}> 
            
               
                <Query query = {Questionnaire} key= "questionnaireQuery"
                 variables= {{
                    where: {numberID:1}
                }}>
                { ({ loading, error, data, refetch }) => {
                   
                    if (loading) {
                        return(<Text>Loading</Text>);
                    }
                    if (error) {
                        return(<Text>`Error! ${error.message}`</Text>);
                    }
                    const number = data.questionnaires[0].questions.length;
                   
                  
                      
                    if(this.state.number == number) {
                        console.log(this.state)
                        return(

                    <View>
                    <Mutation mutation={SUBMIT_ANSWERS}>
                    {submitanswer => {return (
                    <View>  
                    <Text>Congradualtions you are finished!</Text>
                    <Button onPress= {async e => {
                                e.preventDefault()
                                for(var i =0; i < this.state.answers.length; i ++)
                                {
                                try {
                                const { data } = await submitanswer({
                                    variables: {
                                        value: this.state.answers[i].value,
                                        questionnumber: this.state.answers[i].questionNumber,
                                        alternativeId: this.state.answers[i].alternativeId
                                    }
                                })
                                
                                } catch (error) {
                                
                                }}
                                navigate("Fifth")
                            }} title ="Complete Questionnaire"/>
                    </View>
                    
                    ) }}
                    </Mutation>

                    </View>
                
                        )
                     } else {
    
                    return (
                        
                <Query query={GET_TEXTS} key="quesQuery" 
                variables= {{
                    where: {language:{name:this.state.language},
                    question:{number:data.questionnaires[0].questions[this.state.number].number}}
                }}>
                {({ loading, error, data, refetch }) => {
                   
                    if (loading) {
                        return(<Text>Loading</Text>);
                    }
                    if (error) {
                        return(<Text>`Error! ${error.message}`</Text>);
                    } 
                    console.log("language1"+this.state.language)
                    console.log(data.questionTexts[0].question.questionType.type)

                    if(data.questionTexts[0].question.questionType.type == "Multiple Choice") {
                        return (
                            <View>
                            <MultipleChoice
                            questionText = {data.questionTexts[0].text}
                            number={data.questionTexts[0].question.number}
                            language={this.state.language} 
                            state={this.state} 
                            updateAnswer = {this.UpdateAnswer} 
                            updateQuestion={this.Update} 
                            navigate = {this.props.navigation}
                            />
                            </View>
                        )
                    } else if (data.questionTexts[0].question.questionType.type == "Input") {
                        return (
                            <View>
                            <Input
                            questionText = {data.questionTexts[0].text}
                            number={data.questionTexts[0].question.number}
                            language={this.state.language} 
                            state={this.state} 
                            updateAnswer = {this.UpdateAnswer} 
                            updateQuestion={this.Update} 
                            navigate = {this.props.navigation}
                            />
                            </View>
                        )
                    } else if (data.questionTexts[0].question.questionType.type == "Select Multiple") {
                        return (
                            <View>
                            <SelectMultiple
                            questionText = {data.questionTexts[0].text}
                            number={data.questionTexts[0].question.number}
                            language={this.state.language} 
                            state={this.state} 
                            updateAnswer = {this.UpdateAnswer} 
                            updateQuestion={this.Update} 
                            navigate = {this.props.navigation}
                            />
                            </View>
                        )
                    }
                    else {
                        return (
                            <Question 
                 state={this.state} 
                 function1 = {this.UpdateAnswer} 
                 function={this.Update} 
                 navigate = {this.props.navigation} 
                 questiontype= {data.questionTexts[0].question.questionType.type}
                 language={this.state.language} 
                 numberofquestions={number} number={data.questionTexts[0].question.number}
                 questionText = {data.questionTexts[0].text}
                 font={this.state.font}
                 />
                        )
                    }
                    
                    
                }}
                </Query>)}
                }}
                </Query>
               
                </View>
           

        )
    }

}

    
const styles = StyleSheet.create({
    margin: {
        top: 50,
    },
    question: {
        fontSize: 25,
        textAlign: "center",
        color: "#00008b"
    },

    container: {
        alignSelf: "flex-start", 
        justifyContent: "flex-start",
        borderStyle: "solid",
        borderColor: "#ff8c00"
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
    homePage: {
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
      lineCopy: {
        position: "absolute",
        height: "2.53%",
        width: "100.13%",
        top: "97.71%",
        left: "-0.06%",
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      kinetikosIconTransparent85Balck: {
        position: "absolute",
        top: "36.08%",
        left: "85.00%",
        height: "46.39%",
        width: "10.00%",
        backgroundColor: "transparent"
      },
      root: {
        // backgroundColor: "white",
        // flex: 1,
        // flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 0
      },
})
//use query for all questions
import React, { Component } from 'react'
import { View, Text ,StyleSheet, Button} from 'react-native'
import { Query, Mutation } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'
import Question from '../question/question2'

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
    answers:[]}

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

    render() {  

        var {navigate} = this.props.navigation;
    
        return (
           
            <View>
               
                <Query query = {Questionnaire} key= "questionnaireQuery"
                 variables= {{
                    where: {numberID:1}
                }}>
                {({ loading, error, data, refetch }) => {
                   
                    if (loading) {
                        return(<Text>Loading</Text>);
                    }
                    if (error) {
                        return(<Text>`Error! ${error.message}`</Text>);
                    }
                    const number = data.questionnaires[0].questions.length
                    if(this.state.number == number)
        {
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
                    navigate("First")
                  }} title ="Complete Questionnaire"/>
        </View>
         ) }}
        </Mutation>


        </View>
    
            )
        }
          else{
                    return (
                        
                <Query query={GET_TEXTS} key="quesQuery" 
                variables= {{
                    where: {language:{name:"English"},question:{number:data.questionnaires[0].questions[this.state.number].number}}
                }}>
                {({ loading, error, data, refetch }) => {
                   
                    if (loading) {
                        return(<Text>Loading</Text>);
                    }
                    if (error) {
                        return(<Text>`Error! ${error.message}`</Text>);
                    }
                    
                    return (
                        <View >
                         <Text style={styles.question}>{data.questionTexts[0].text}</Text>
                 <Question state={this.state} function1 = {this.UpdateAnswer} function={this.Update} navigate = {this.props.navigation} questiontype= {data.questionTexts[0].question.questionType.type}language={data.questionTexts[0].language.name} numberofquestions={number} number={data.questionTexts[0].question.number}/>
                            
                        </View>
                    )
                }}
                </Query>)}
                }}
                </Query>
                </View>
           

        )
    }

    


    //   retrieveData = async () => {
    //     try {
    
    //      const x = await AsyncStorage.getItem('number');
    //      return JSON.parse(x);
    //     } catch (error) {
    //       console.log("error")
    //     }
    //   }
}

    
const styles = StyleSheet.create({
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
    }
})
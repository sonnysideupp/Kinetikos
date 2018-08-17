 //use query for question type
import React, { Component } from 'react'
import RadioForm, { RadioButton, RadioButtonInput } from 'react-native-simple-radio-button'
import { Text, View, StyleSheet,TouchableOpacity,Button, Image } from 'react-native'
import { Query, ApolloProvider } from 'react-apollo'
import { FormLabel, FormInput } from "react-native-elements"
import gql from 'graphql-tag'
import { AsyncStorage } from "react-native"
import { CheckBox } from 'react-native-elements'
import SelectMultiple from 'react-native-select-multiple'

        const GET_ALT_TEXT = gql`
        query alternativeTexts($where:AlternativeTextWhereInput) {
            alternativeTexts(where:$where) {
                id
                alternativeID{
                    id
                    question{
                    number
                    }
                    value
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

        
            state = { selectedAnswers: [] ,
                    answer:"",
                    value:0,
                    number: null
                }
            onSelectionsChange = (selectedAnswers) => {
                // selectedFruits is array of { label, value }
                this.setState({ selectedAnswers })
            }
            radioSelection = (info) => {
                console.log("printing info")
                console.log(info.Button)
            }
        
            render () {

            if( this.props.questiontype == "Input"){
            return(
                <View>  
                <FormLabel labelStyle={styles.label}>Answer</FormLabel>
                        <FormInput
                        underlineColorAndroid="black"
                        onChangeText={text => {
                            this.setState({ answer: text });
                        }}
                        />
                <View >
                <TouchableOpacity
                    style={styles.signinButton}
                    onPress={() => {
                        this.props.function1(this.state.answer,this.props.number,null)     
                        this.props.function(this.props.state.number+1)
                        this.props.navigate.navigate("Second") }}
                >
                    <Text style={styles.signinButtonText}>Submit!</Text>
                </TouchableOpacity>
                <View/>
                <TouchableOpacity
                                        style={styles.signinButton}
                                        onPress={() => {
                                            console.log("statenumber" + this.props.state.number)
                                            if(this.props.state.number == 0){
                                                this.props.navigate.navigate("Fifth") 
                                            }
                                            else{
                                            this.props.function(this.props.state.number-1)
                                            this.props.navigate.navigate("Second") }}}
                                    >
                                        <Text style={styles.signinButtonText}>Previous</Text>
                                    </TouchableOpacity>
                </View>
                </View>
        )
            }
            if( this.props.questiontype == "Select Multiple"){
                const answers = []
                return(
                        <View>  
                    <Query query={GET_ALT_TEXT} key="altTextQuery1"
                            variables={{
                                where:{language:{name:this.props.language},
                                alternativeID:{question:{number:this.props.number}}}
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
                                    answers.push({label:data.alternativeTexts[i].text,value:i})
                                }


                            
                                
                                    return (
                                        <View>
                                        
                                        <SelectMultiple
                                        items={answers}
                                        selectedItems={this.state.selectedAnswers}
                                        onSelectionsChange={this.onSelectionsChange}
                                        style={styles.multiple}
                                        rowStyle={styles.row}
                                        checkboxStyle={{justifyContent: "space-between", height: 30}}
                                        labelStyle={{fontSize: this.props.font}} />
                                        <TouchableOpacity
                                        style={styles.signinButton}
                                        onPress={() => { 
                                        console.log(this.state.selectedAnswers)
                                        for(var j = 0; j < this.state.selectedAnswers.length; j++){
                                        this.props.function1(data.alternativeTexts[this.state.selectedAnswers[j].value].alternativeID.value,this.props.number,data.alternativeTexts[this.state.selectedAnswers[j].value].alternativeID.id)
                                        }
                                    
                                        this.props.function(this.props.state.number+1)
                                    
                                        this.props.navigate.navigate("Second") }}
                                        
                                        
                                    >
                                        <Text style={styles.signinButtonText}>Submit!</Text>
                                        <View/>
                                            <TouchableOpacity
                                        style={styles.signinButton}
                                        onPress={() => {
                                            console.log("statenumber" + this.props.state.number)
                                            if(this.props.state.number == 0){
                                                this.props.navigate.navigate("Fifth") 
                                            }
                                            else{
                                            this.props.function(this.props.state.number-1)
                                            this.props.navigate.navigate("Second") }}}
                                    >
                                        <Text style={styles.signinButtonText}>Previous</Text>
                                    </TouchableOpacity>
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
                    var buttons = []
                    return (
                        
                        <View>  
                    
                            <Query query={GET_ALT_TEXT} key="altTextQuery"
                            variables={{
                                where:{language:{name:this.props.language},
                                alternativeID:{question:{number:this.props.number}}}
                            }}>
                            {({ loading, error, data, refetch }) => {
                                if (loading) {
                                    return(<Text>Loading</Text>);
                                }
                                if (error) {
                                    return(<Text>`Error! ${error.message}`</Text>);
                                }
                                for(let i = 0; i < data.alternativeTexts.length; i ++)
                                {
                                    options.push({label:data.alternativeTexts[i].text,value:i});
                                    var number = i;
                                    var opacity = null;
                                    var image = "Gradient_QvTTfdx.png";
                                    var text = data.alternativeTexts[i].text;
                                    var integer= options[i].value
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
                                                fontSize: this.props.font,
                                                fontFamily: "Aller-Bold",
                                                textAlign: "center",
                                                color: "rgba(255,255,255,1)"}}>{data.alternativeTexts[i].text}</Text>
                                        </TouchableOpacity>
                                        
                                    )
                                }
                                
                                console.log(buttons)
                                    return (
                                        <View>

                                            <View style={styles.radioGroup}>
                                            {buttons}
                                            </View>
                                        
                                        
                                        {/* <RadioForm
                                        style={styles.radio} 
                                        radio_props = {options}
                                        onPress={(label, value) => {
                                            console.log(value)
                                            this.setState({ answer: label, number:value})}}
                                        /> */}

                                        <TouchableOpacity
                                        style={styles.signinButton}
                                        onPress={() => {
                                            console.log(this.state)
                                            console.log(data.alternativeTexts)
                                            this.props.function1(data.alternativeTexts[this.state.number].alternativeID.value,this.props.number,data.alternativeTexts[this.state.number].alternativeID.id)
                                            this.props.function(this.props.state.number+1)
                                            this.props.navigate.navigate("Second") }}
                                    >
                                        <Text style={styles.signinButtonText}>Submit!</Text>
                                    </TouchableOpacity>

                                        <View/>
                                    <TouchableOpacity
                                        style={styles.signinButton}
                                        onPress={() => {
                                            console.log("statenumber" + this.props.state.number)
                                            if(this.props.state.number == 0){
                                                this.props.navigate.navigate("Fifth") 
                                            }
                                            else{
                                            this.props.function(this.props.state.number-1)
                                            this.props.navigate.navigate("Second") }}}
                                    >
                                        <Text style={styles.signinButtonText}>Previous</Text>
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
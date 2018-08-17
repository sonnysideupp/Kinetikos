import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import KinetikosIconTransparent85Balck1 from "../symbols/KinetikosIconTransparent85Balck1";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { FormInput } from "react-native-elements"
import gql from 'graphql-tag'
import { Query, ApolloProvider } from 'react-apollo'
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


export default class QText extends Component {

    state = {
        number:  null
     }



  render() {

    var options = []
    var buttons = []

    return (
      <View style = {styles.radioGroup}>
      <View style={styles.root}>
        <View style={styles.rectangle} />
        <View style={styles.rectangleCopy} />

        <View style={styles.body}>

        <Text style = {{  width: "89.42%",
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    color: "rgba(0,0,0,1)",
    fontSize: this.props.font,
    fontFamily: "Aller",
    // lineHeight: 120,
    letterSpacing: 0.1}}>{this.props.questionText}</Text>


       
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
                           opacity = 0.2;
                           image = "Gradient_eUSP669.png";
                       }
                       
                      
                       buttons.push(
                        <View style={styles.rectangle4Copy8} key={i}>
                        <TouchableOpacity onPress={() => {
                                this.setState(
                                  {number:i,
                                  value: data.alternativeTexts[i].alternativeID.value,
                                  id: data.alternativeTexts[i].alternativeID.id}
                                  )}}>
                        <Image
                          style={styles.container4}
                          source={require("../assets/Gradient_JITHUo5.png")}
                          opacity={opacity}
                        />
                        <Text style={{fontSize:this.props.font,
                                position: "absolute",
                                top: "27.78%",
                                left: "26.88%",
                                height: "72.22%",
                                width: "46.88%",
                                backgroundColor: "transparent",
                                textAlign: "center",
                                color: "rgba(0,0,0,1)",
                                fontFamily: "Aller"
                            }}>{data.alternativeTexts[i].text}</Text>
                        </TouchableOpacity>
                        </View>                           
                       )
                   }
                   
                   console.log(buttons)
                       return (
                         <View style={styles.style3}>
                         <ScrollView>
                           {buttons}
                        </ScrollView>
                        </View>
                       )
                   }
               }
               </Query>
       </View>


        </View>

        <View style={styles.next}>
        <TouchableOpacity
        onPress={() => {
          this.props.updateAnswer(this.state.value,this.props.number,this.state.id)
          this.props.updateQuestion(this.props.state.number+1)
          this.props.navigate.navigate("Second") }}
          >
          <Image
            style={styles.rectangle8}
            source={require("../assets/Gradient_tUOtY99.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"BA8E0F41-5522-487C-956C-890D196FFAC9","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(129,150,201,1)","style":{}},{"offset":1,"stopColor":"rgba(86,110,190,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.next1}>Next </Text>
          <Svg
            viewBox="0 0 12.34 20.84"
            preserveAspectRatio="none"
            style={styles.arrow}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              isClosed={true}
              d="M1.91 12.32 L0.00 10.41 L0.95 9.46 L9.46 0.95 L10.41 0.00 L12.32 1.91 L11.36 2.86 L3.82 10.41 L4.36 10.95 L11.95 18.54 L12.90 19.49 L10.99 21.40 L10.04 20.45 L2.45 12.86 L1.91 12.32 L1.91 12.32 Z"
            />
          </Svg>
          </TouchableOpacity>
        </View>


        <View style={styles.back}>
        <TouchableOpacity
        onPress={() => {
            if (this.props.state.number == 0) {
                this.props.navigate.navigate("Fifth")
            } else {
                this.props.updateQuestion(this.props.state.number-1)
                this.props.navigate.navigate("Second")
            }
        }}
        >
          <Image
            style={styles.rectangle81}
            source={require("../assets/Gradient_jGWag0U.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"AD20E144-7369-4D33-8171-E2AE62F36A25","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(129,150,201,1)","style":{}},{"offset":1,"stopColor":"rgba(86,110,190,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.back1}>Back</Text>
          <Svg
            viewBox="0 0 12.34 20.84"
            preserveAspectRatio="none"
            style={styles.combinedShapeCopy1}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              isClosed={true}
              d="M1.91 12.32 L0.00 10.41 L0.95 9.46 L9.46 0.95 L10.41 0.00 L12.32 1.91 L11.36 2.86 L3.82 10.41 L4.36 10.95 L11.95 18.54 L12.90 19.49 L10.99 21.40 L10.04 20.45 L2.45 12.86 L1.91 12.32 L1.91 12.32 Z"
            />
          </Svg>
          </TouchableOpacity>
        </View>

        
       


        <View style={styles.header}>
          <View style={styles.rectangle7} />
          <KinetikosIconTransparent85Balck1
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
          <Text style={styles.questionnaire}>Questionnaire</Text>
          {/* <View style={styles.toHome}>
            <Svg
              viewBox="0 0 11.46 20.43"
              preserveAspectRatio="none"
              style={styles.combinedShape}
            >
              <Path
                strokeWidth={0}
                fill="rgba(86,110,190,1)"
                isClosed={true}
                d="M-0.54 9.92 L0.39 8.96 L8.65 0.39 L9.58 -0.57 L11.43 1.36 L10.51 2.32 L3.17 9.92 L3.70 10.47 L11.08 18.11 L12.00 19.07 L10.15 21.00 L9.22 20.03 L1.85 12.39 L0.92 11.43 L0.92 11.43 L-0.54 9.92 Z"
              />
            </Svg>
            <Text style={styles.homePage}>Home Page</Text>
          </View> */}
        </View>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  body: {
    top: "20%",
    // flexDirection: "column",
  },
  radioGroup: {
    flexWrap: "wrap",
    // justifyContent: "space-between",
    // justifyContent: "space-around",
    height: "98%"
  },
  rectangle: {
    position: "absolute",
    top: "15.47%",
    left: "0.00%",
    height: "1.88%",
    width: "100.00%",
    borderWidth: 1,
    borderColor: "rgba(179,179,179,1)",
    backgroundColor: "transparent"
  },
  rectangleCopy: {
    position: "absolute",
    top: "15.47%",
    left: "0.00%",
    height: "1.88%",
    width: "33.33%",
    backgroundColor: "rgba(86,110,190,1)"
  },
  question: {
    // position: "absolute",
    // top: "18.75%",
    // left: "5.57%",
    // height: "20%",
    width: "89.42%",
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "Aller",
    // lineHeight: 120,
    letterSpacing: 0.1
  },
  next: {
    // position: "absolute",
    top: "86.56%",
    left: "65.65%",
    height: "7.81%",
    width: "28.81%",
    justifyContent: "center"
  },
  rectangle8: {
    // position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    // backgroundColor: "transparent"
  },
  next1: {
    position: "absolute",
    top: "18%",
    left: "0%",
    height: "72%",
    width: "83.65%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Aller-Bold",
    alignSelf: "center"
  },
  arrow: {
    position: "absolute",
    top: 15,
    left: 76,
    right: 15.66,
    bottom: 15.16,
    width: "15%",
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        scaleX: -1
      }
    ]
  },
  back: {
    position: "absolute",
    top: "89.38%",
    left: "5.28%",
    height: "7.97%",
    width: "28.89%",
    display: "none"
  },
  rectangle81: {
    // position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    // backgroundColor: "transparent"
  },
  back1: {
    position: "absolute",
    top: "18%",
    left: "13.46%",
    height: "72.55%",
    width: "86.54%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Aller-Bold"
  },
  combinedShapeCopy1: {
    position: "absolute",
    top: 15,
    left: 14,
    right: 77.66,
    bottom: 15.16,
    width: "15%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  never: {
    position: "absolute",
    top: "36.88%",
    left: "5.56%",
    height: "8.44%",
    width: "88.89%"
  },
  rectangle4: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderWidth: 0.5,
    borderColor: "rgba(179,179,179,1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    borderBottomLeftRadius: 11,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowRadius: 1,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  container: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent",
    display: "none"
  },
  never1: {
    position: "absolute",
    top: "27.78%",
    left: "26.88%",
    height: "72.22%",
    width: "46.88%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  style: {
    position: "absolute",
    top: "46.41%",
    left: "5.56%",
    height: "8.44%",
    width: "88.89%"
  },
  rectangle4Copy5: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderWidth: 0.5,
    borderColor: "rgba(179,179,179,1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    borderBottomLeftRadius: 11,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowRadius: 1,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  container1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent",
    display: "none"
  },
  times: {
    position: "absolute",
    top: "27.78%",
    left: "26.88%",
    height: "72.22%",
    width: "46.88%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  style1: {
    position: "absolute",
    top: "55.94%",
    left: "5.56%",
    height: "8.44%",
    width: "88.89%"
  },
  rectangle4Copy6: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderWidth: 0.5,
    borderColor: "rgba(179,179,179,1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    borderBottomLeftRadius: 11,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowRadius: 1,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  container2: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent",
    display: "none"
  },
  times1: {
    position: "absolute",
    top: "27.78%",
    left: "26.88%",
    height: "72.22%",
    width: "46.88%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  style2: {
    position: "absolute",
    top: "65.47%",
    left: "5.56%",
    height: "8.44%",
    width: "88.89%"
  },
  rectangle4Copy7: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderWidth: 0.5,
    borderColor: "rgba(179,179,179,1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    borderBottomLeftRadius: 11,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowRadius: 1,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  container3: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent",
    display: "none"
  },
  times2: {
    position: "absolute",
    top: "27.78%",
    left: "26.88%",
    height: "72.22%",
    width: "46.88%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  style3: {
    justifyContent: "space-between",
    // paddingBottom: 20,
    // paddingTop: 10,
  },
  rectangle4Copy8: {
    // position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    top: "0.00%",
    left: "0.00%",
    height: 60,
    width: "80.00%",
    // borderWidth: 0.5,
    padding: 10,
    borderColor: "rgba(179,179,179,1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    borderBottomLeftRadius: 11,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowRadius: 1,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  container4: {
    // position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 10,
    // backgroundColor: "transparent",
    // display: "none"
  },
  times3: {
    position: "absolute",
    top: "27.78%",
    left: "26.88%",
    height: "72.22%",
    width: "46.88%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  header: {
    position: "absolute",
    top: "-2.50%",
    left: "0.00%",
    height: "18%",
    width: "100.00%"
  },
  rectangle7: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "97.94%",
    width: "100.00%",
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
  questionnaire: {
    // position: "absolute",
    top: "46.39%",
    left: "4.44%",
    height: "48.45%",
    width: "80.56%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 36,
    fontFamily: "Aller-Bold"
  },
  toHome: {
    position: "absolute",
    top: "8.25%",
    left: "2.22%",
    height: "24.74%",
    width: "40.00%"
  },
  combinedShape: {
    position: "absolute",
    top: 1.57,
    left: 0.54,
    right: 132,
    bottom: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  homePage: {
    position: "absolute",
    top: "0.00%",
    left: "12.50%",
    height: "100.00%",
    width: "87.50%",
    backgroundColor: "transparent",
    color: "rgba(86,110,190,1)",
    fontSize: 20,
    fontFamily: "Aller"
  },
  rectangleCopy: {
    position: "absolute",
    top: "15.63%",
    left: "0.00%",
    height: "1.88%",
    width: "100.00%",
    backgroundColor: "rgba(86,110,190,1)"
  },
  doYouFeelYourCon: {
    position: "absolute",
    top: "18.75%",
    left: "6.09%",
    height: "8.78%",
    width: "88.37%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "Aller",
    lineHeight: 140,
    letterSpacing: 0.1
  },
  next: {
    position: "absolute",
    top: "86.72%",
    left: "65.28%",
    height: "7.97%",
    width: "29.44%"
  },
  finish: {
    position: "absolute",
    top: "32%",
    left: "8.57%",
    height: "74%",
    width: "83.81%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Aller-Bold"
  },
  back: {
    position: "absolute",
    top: "86.72%",
    left: "5.56%",
    height: "7.97%",
    width: "28.89%"
  },
  combinedShapeCopy: {
    position: "absolute",
    top: 15,
    left: 14,
    right: 77.66,
    bottom: 15.16,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  helpless: {
    // position: "absolute",
    // top: "29.69%",
    left: "2.77%",
    height: "58.13%",
    width: "93.91%"
  },
  rectangle4Copy: {
    position: "absolute",
    top: "9.41%",
    left: "0%",
    height: "81.45%",
    width: "100%",
    borderWidth: 0.5,
    borderColor: "rgba(179,179,179,1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    borderBottomLeftRadius: 11,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowRadius: 1,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  helpless1: {
    position: "absolute",
    top: "0%",
    left: "2.63%",
    height: "7.4%",
    width: "93.27%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 21,
    fontFamily: "Aller"
  },
  combinedShape: {
    position: "absolute",
    top: 1.57,
    left: 0.54,
    right: 132,
    bottom: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  helplessCopy: {
    top: "12.1%",
    left: "3.56%",
    width: "93.28%",
    height: "12.37%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "Aller",
    color: "rgba(179,179,179,1)"
  },
  input: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 10,
    fontSize: 20,
  }
});
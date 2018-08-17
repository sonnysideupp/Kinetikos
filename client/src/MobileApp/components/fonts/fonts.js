import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import Question from "../../trial2/src/symbols/Question";
import {
  AsyncStorage,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";






export default class Fonts extends Component {
  static navigationOptions = {


}
state = {number:null,
    answers:[],
    language:"English"
  }

  
  render() {
  
 
 
    
 var {navigate} = this.props.navigation;

 var opacity = null
 var opacity1 = null
 var opacity2 = null

 if(this.state.number == 1)
 {
    opacity = 0.1
    opacity1 = null
    opacity2 = null
 }
 if(this.state.number == 2)
 {
    opacity1 = 0.1
    opacity = null
    opacity2 = null
 }


 if(this.state.number == 3)
 {
    opacity2 = 0.1
    opacity = null
    opacity1 = null
 }

    return (
    




      <View style={styles.root}>


        <View style={styles.questionnaire}>
        <TouchableOpacity
        style={styles.radioButton}
        onPress={async () => {
            await  AsyncStorage.setItem("Font",JSON.stringify(40))
            await this.setState({number:1})}}>
        <Image
        style={styles.radioImage}
        source={require(`../../trial1/assets/Gradient_QvTTfdx.png`)}
        opacity={opacity}
        />
        <Text style={styles.text}>Big</Text>
        </TouchableOpacity>
        </View>


        <View style={styles.questionnaire}>
        <TouchableOpacity
        style={styles.radioButton}
        onPress={async() => {
            await  AsyncStorage.setItem("Font",JSON.stringify(32))
            await this.setState({number:2})}}>
        <Image
        style={styles.radioImage}
        source={require(`../../trial1/assets/Gradient_QvTTfdx.png`)}
        opacity={opacity1}
        />
        <Text style={styles.text}>Medium</Text>
        </TouchableOpacity>
        </View>


         <View style={styles.questionnaire}>
        <TouchableOpacity
        style={styles.radioButton}
        onPress={async () => {
            await  AsyncStorage.setItem("Font",JSON.stringify(25))
            await this.setState({number:3})}}>
        <Image
        style={styles.radioImage}
        source={require(`../../trial1/assets/Gradient_QvTTfdx.png`)}
        opacity={opacity2}
        />
        <Text style={styles.text}>Small</Text>
        </TouchableOpacity>
        </View>

        
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
    );
}
}const styles = StyleSheet.create({
    root: {
      backgroundColor: "white",
      flex: 1,
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: 0
    },
    settings: {
      height: 97,
      width: 320,
      marginLeft: 6,
      marginBottom: 5,
      marginRight: 6,
      marginTop: 5
    },
    rectangleCopy2: {
      // position: "absolute",
      top: "0.00%",
      left: "0.00%",
      height: "100.00%",
      width: "100.00%",
      borderRadius: 8,
      backgroundColor: "transparent"
    },
    settings1: {
      position: "absolute",
      top: "8.25%",
      left: "3.13%",
      height: "55.67%",
      width: "72.19%",
      backgroundColor: "transparent",
      color: "rgba(255,255,255,1)",
      fontSize: 32,
      fontFamily: "Aller"
    },
    settings2: {
      position: "absolute",
      top: "7.22%",
      left: "70.31%",
      height: "86.60%",
      width: "26.56%",
      backgroundColor: "transparent"
    },
    profile: {
      height: 97,
      width: 320,
      marginLeft: 6,
      marginBottom: 5,
      marginRight: 6,
      marginTop: 5
    },
    rectangleCopy4: {
      // position: "absolute",
      top: "0.00%",
      left: "0.00%",
      height: "100.00%",
      width: "100.00%",
      borderRadius: 8,
      backgroundColor: "transparent"
    },
    myProfile: {
      position: "absolute",
      top: "11.34%",
      left: "3.13%",
      height: "55.67%",
      width: "72.19%",
      backgroundColor: "transparent",
      color: "rgba(255,255,255,1)",
      fontSize: 32,
      fontFamily: "Aller"
    },
    user: {
      position: "absolute",
      top: "6.19%",
      left: "73.75%",
      height: "86.60%",
      width: "20.94%",
      backgroundColor: "transparent"
    },
    group: {
      position: "absolute",
      top: "31.55%",
      left: "79.94%",
      height: "12.37%",
      width: "5.94%",
      display: "none"
    },
    oval8: {
      position: "absolute",
      height: "66.67%",
      width: "68.42%",
      top: "25.00%",
      left: "15.79%",
      backgroundColor: "transparent",
      borderColor: "transparent"
    },
    oval8Copy: {
      position: "absolute",
      height: "50.00%",
      width: "78.95%",
      top: "16.67%",
      left: "10.53%",
      backgroundColor: "transparent",
      borderColor: "transparent"
    },
    oval8Copy2: {
      position: "absolute",
      height: "63.90%",
      width: "89.47%",
      top: "15.98%",
      left: "2.82%",
      backgroundColor: "transparent",
      borderColor: "transparent",
      display: "none",
      transform: [
        {
          rotate: "-10deg"
        }
      ]
    },
    rectangle5: {
      position: "absolute",
      top: "52.72%",
      left: "10.66%",
      height: "4.17%",
      width: "10.53%",
      backgroundColor: "rgba(153,152,152,1)",
      transform: [
        {
          rotate: "-20deg"
        }
      ]
    },
    rectangle5Copy: {
      position: "absolute",
      top: "52.60%",
      left: "78.42%",
      height: "4.17%",
      width: "10.53%",
      borderRadius: 0.25,
      backgroundColor: "rgba(153,152,152,1)",
      transform: [
        {
          scaleX: -1
        },
        {
          rotate: "-20deg"
        }
      ]
    },
    questionnaire: {
      height: 97,
      width: 320,
      marginLeft: 6,
      marginBottom: 5,
      marginRight: 6
    },
    questionContainer: {
      // position: "absolute",
      top: "0.00%",
      left: "0.00%",
      height: "100.00%",
      width: "100.00%",
      borderRadius: 8,
      backgroundColor: "transparent"
    },
    questionnaire1: {
      position: "absolute",
      top: "10.31%",
      left: "2.81%",
      height: "55.67%",
      width: "72.19%",
      backgroundColor: "transparent",
      color: "rgba(255,255,255,1)",
      fontSize: 28,
      fontFamily: "Aller"
    },
    question: {
      position: "absolute",
      top: "9.28%",
      left: "76.88%",
      height: "82.47%",
      width: "17.19%",
      backgroundColor: "transparent"
    },
    button: {
      height: 100,
      width: 320,
      margin: 10
    },
    rectangleCopy3: {
      // position: "absolute",
      top: "0.00%",
      left: "0.00%",
      height: "97.98%",
      width: "100.00%",
      borderRadius: 8,
      backgroundColor: "transparent"
    },
    activityMonitor: {
      position: "absolute",
      top: "8.08%",
      left: "3.13%",
      height: "54.55%",
      width: "79.38%",
      backgroundColor: "transparent",
      color: "rgba(255,255,255,1)",
      fontSize: 32,
      fontFamily: "Aller"
    },
    footprint: {
      position: "absolute",
      top: "0.00%",
      left: "78.13%",
      height: "100.00%",
      width: "19.38%",
      backgroundColor: "transparent"
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
    logout: {
      width: 132,
      height: 30,
      alignSelf: "center",
      marginTop: 10
    },
    rectangle8: {
      top: 0,
      left: 0,
      bottom: 0,
      width: 132,
      height: 38,
      // position: "absolute",
      backgroundColor: "transparent",
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      borderTopLeftRadius: 8
    },
    text: {
      top: 5,
      bottom: 5,
      left: "22.73%",
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
    }
  });
  
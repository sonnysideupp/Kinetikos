import React, { Component } from "react";
import Setting from "../symbols/Settings";
import User from "../symbols/User.js";
import { Svg, Path } from "react-native-svg";
import Question from "../symbols/Question";
import Footprint1 from "../symbols/Footprint1";
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

export default class HomePage extends Component {
  static navigationOptions = {
    title: "Home",
    header: null
}

  
  
  render() {
  




 
 
 
    
 var {navigate} = this.props.navigation;

    return (
    




      <View style={styles.root}>


        <View style={styles.logout}>
        <TouchableOpacity onPress= {async() => {
          this.signOut()
          navigate("First")}}>
          <Image
            style={styles.rectangle8}
            source={require("../assets/Gradient_FcnSNCE.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"8FF95A09-FDA1-4230-8E57-EF958F62C253","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(129,150,201,1)","style":{}},{"offset":1,"stopColor":"rgba(86,110,190,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.text}>Log Out</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.settings}>
        <TouchableOpacity onPress= {async() => {
          navigate("Eighth")}}>
          <Image
            style={styles.rectangleCopy2}
            source={require("../assets/Gradient_gQRlBCs.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.14"},"gradientType":"LinearGradient","id":"820C6536-B8A0-4824-A202-9091D0582C1F","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(146,223,178,1)","style":{}},{"offset":1,"stopColor":"rgba(123,214,160,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.settings1}>Settings</Text>
          <Setting style={styles.settings2} />
          </TouchableOpacity>
        </View>


        <View style={styles.profile}>
          <Image
            style={styles.rectangleCopy4}
            source={require("../assets/Gradient_eUSP669.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"1104293A-226E-409B-941F-D1009305AD23","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(106,225,212,1)","style":{}},{"offset":1,"stopColor":"rgba(70,205,182,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.myProfile}>My Profile</Text>
          <User style={styles.user} />
          
          {/* <View style={styles.group}>
            <Svg
              viewBox="0 0 13.00 8.00"
              preserveAspectRatio="none"
              style={styles.oval8}
            >
              <Path
                strokeWidth={0}
                fill="rgba(153,152,152,1)"
                isClosed={true}
                d="M6.50 8.00 C10.09 8.00 13.00 6.21 13.00 4.00 C13.00 1.79 10.09 0.00 6.50 0.00 C2.91 0.00 0.00 1.79 0.00 4.00 C0.00 6.21 2.91 8.00 6.50 8.00 Z"
              />
            </Svg>
            <Svg
              viewBox="0 0 15.00 6.00"
              preserveAspectRatio="none"
              style={styles.oval8Copy}
            >
              <Path
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                isClosed={true}
                d="M7.50 6.00 C11.64 6.00 15.00 4.66 15.00 3.00 C15.00 1.34 11.64 0.00 7.50 0.00 C3.36 0.00 0.00 1.34 0.00 3.00 C0.00 4.66 3.36 6.00 7.50 6.00 Z"
              />
            </Svg>
            <Svg
              viewBox="0 0 17.00 7.67"
              preserveAspectRatio="none"
              style={styles.oval8Copy2}
            >
              <Path
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                isClosed={true}
                d="M8.63 7.67 C13.32 7.67 17.00 5.43 17.00 3.50 C17.00 1.57 13.19 0.00 8.50 0.00 C3.81 0.00 0.00 1.57 0.00 3.50 C0.00 5.43 3.94 7.67 8.63 7.67 Z"
              />
            </Svg>
            <View style={styles.rectangle5} />
            <View style={styles.rectangle5Copy} />
          </View> */}

        </View>


        <View style={styles.questionnaire}>
        <TouchableOpacity onPress= {async() => {
          navigate("Second")}}>
          <Image
            style={styles.questionContainer}
            source={require("../assets/Gradient_Fppwvc3.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"11D407E8-F25B-4216-B420-F3A69B34CFE0","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(84,175,200,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.questionnaire1}>Questionnaire</Text>
          <Question style={styles.question} />
          </TouchableOpacity>
        </View>


        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.push("Third");
          }}
        >
          <Image
            style={styles.rectangleCopy3}
            source={require("../assets/Gradient_QvTTfdx.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.15"},"gradientType":"LinearGradient","id":"77BA93AB-6ABC-430E-9FB9-3BA0260989E2","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(138,187,231,1)","style":{}},{"offset":1,"stopColor":"rgba(96,164,226,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.activityMonitor}>Activity Monitor</Text>
          <Footprint1 style={styles.footprint} />
        </TouchableOpacity>

        
        <View style={styles.header} /*locked*/>
          <View style={styles.rectangle7} />
          <Image
            source={require("../assets/953f88ea27175375d51167f2e35e70b3aa71adc3.png")}
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
          <Text style={styles.homePage}>Home Page</Text>
        </View>
      </View>
    );
  }
  signOut = async() => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("email");
    await AsyncStorage.removeItem("name");
    
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
    fontSize: 32,
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

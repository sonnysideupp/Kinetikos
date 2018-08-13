import React, { Component } from "react";
import Settings from "../symbols/Settings";
import User from "../symbols/User";
import { Svg, Path } from "react-native-svg";
import Question from "../symbols/Question";
import Footprint from "../symbols/Footprint";
// import { Center } from "@builderx/utils";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default class HomePage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.settings}>
          <ImageBackground
            style={styles.rectangleCopy2}
            source={require("../assets/Gradient_IS0WXIO.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.14"},"gradientType":"LinearGradient","id":"A89BEB24-5A8C-449D-A203-D7DBC980A82C","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(146,223,178,1)","style":{}},{"offset":1,"stopColor":"rgba(123,214,160,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.settings1}>Settings</Text>
          <Settings style={styles.settings2} />
        </View>
        <View style={styles.profile}>
          <ImageBackground
            style={styles.rectangleCopy4}
            source={require("../assets/Gradient_N7V7by9.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"A94466E8-2CF0-4725-98D9-5862B2B7903E","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(106,225,212,1)","style":{}},{"offset":1,"stopColor":"rgba(70,205,182,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.myProfile}>My Profile</Text>
          <User style={styles.user} />
          <View style={styles.group}>
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
          </View>
        </View>
        <View style={styles.questionnaire}>
          <ImageBackground
            style={styles.questionContainer}
            source={require("../assets/Gradient_xPp3ZoV.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"5576DFE1-F6E3-4075-8441-8F04A6F3BC10","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(84,175,200,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.questionnaire1}>Questionnaire</Text>
          <Question style={styles.question} />
        </View>
        <View style={styles.activity}>
          <ImageBackground
            style={styles.rectangleCopy3}
            source={require("../assets/Gradient_JBUOWDS.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.15"},"gradientType":"LinearGradient","id":"DDC9C0DB-3B69-4079-BD7C-1F283DE2847D","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(138,187,231,1)","style":{}},{"offset":1,"stopColor":"rgba(96,164,226,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.activityMonitor}>Activity Monitor</Text>
          <Footprint style={styles.footprint} /*locked*/ />
        </View>
        <View style={styles.header}>
          <View style={styles.rectangle7} />
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
          <Text style={styles.homePage1}>Home Page</Text>
        </View>
        <ImageBackground
          style={styles.rectangle8}
          source={require("../assets/Gradient_SJFK8K4.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"EE27A988-9112-45F1-B11D-24451474FC42","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(129,150,201,1)","style":{}},{"offset":1,"stopColor":"rgba(86,110,190,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
        />
        <Text style={styles.logOut}>Log Out</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  settings: {
    position: "absolute",
    top: "76.25%",
    left: "5.56%",
    height: "15.16%",
    width: "88.89%"
  },
  rectangleCopy2: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent"
  },
  settings1: {
    position: "absolute",
    top: "10.71%",
    left: "3.12%",
    height: "53.57%",
    width: "70.72%",
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
    position: "absolute",
    top: "57.34%",
    left: "5.56%",
    height: "15.16%",
    width: "88.89%"
  },
  rectangleCopy4: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent"
  },
  myProfile: {
    position: "absolute",
    top: "14.29%",
    left: "3.12%",
    height: "53.57%",
    width: "70.72%",
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
    top: "52.60%",
    left: "11.11%",
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
    position: "absolute",
    top: "38.44%",
    left: "5.83%",
    height: "15.16%",
    width: "88.89%"
  },
  questionContainer: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent"
  },
  questionnaire1: {
    position: "absolute",
    top: "12.5%",
    left: "2.81%",
    height: "53.57%",
    width: "71.25%",
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
  activity: {
    position: "absolute",
    top: "19.53%",
    left: "5.56%",
    height: "15.47%",
    width: "88.89%"
  },
  rectangleCopy3: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "97.98%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent"
  },
  activityMonitor: {
    position: "absolute",
    top: "10.53%",
    left: "3.12%",
    height: "54.39%",
    width: "78.19%",
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
    position: "absolute",
    top: "0%",
    left: "0%",
    height: "17.73%",
    width: "100%"
  },
  rectangle7: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "99.12%",
    width: "100.00%",
    backgroundColor: "rgba(248,248,248,1)"
  },
  lineCopy: {
    position: "absolute",
    height: "2.17%",
    width: "100.13%",
    top: "98.03%",
    left: "-0.06%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  homePage: {
    position: "absolute",
    top: "41.59%",
    left: "35.56%",
    height: "47.79%",
    width: "58.89%",
    backgroundColor: "transparent",
    display: "none",
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    fontFamily: "Aller"
  },
  homePage1: {
    position: "absolute",
    top: "53.98%",
    left: "4.44%",
    height: "41.59%",
    width: "66.39%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 36,
    fontFamily: "Aller-Bold"
  },
  rectangle8: {
    position: "absolute",
    top: "93.59%",
    left: "31.67%",
    height: "4.84%",
    width: "36.67%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "transparent"
  },
  logOut: {
    position: "absolute",
    top: "94.46%",
    height: "3.78%",
    width: "25.28%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Aller-Bold",
    left: "37.5%"
  }
});

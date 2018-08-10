import React, { Component } from "react";
import QHome from "../symbols/QHome";
import { Svg, Path } from "react-native-svg";
import K from "../symbols/K";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";

export default class Questionnaire2 extends Component {
  render() {

    var {navigate} = this.props.navigation;

    return (
      <View style={styles.root}>
        <QHome style={styles.qHome} />
        <View style={styles.header}>
          <View style={styles.rectangle7} />
          <K style={styles.k86} />
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

        <View style={styles.body}>
        <Text style={styles.weValueYouAndYou}>
          We value you and your health. By answering the following questions,
          you allow us to understand what you’re going through in your daily
          life. You answers will be sent directly to your clinician.
        </Text>
        <View style={styles.button}>
        <TouchableOpacity onPress= {async() => {navigate("Second")}}>
        <Image
          style={styles.rectangle8}
          source={require("../assets/Gradient_fXKMdJR.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"95A68322-4761-4ADF-BAC0-30F7A83EF088","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(129,150,201,1)","style":{}},{"offset":1,"stopColor":"rgba(86,110,190,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
        />
        <Text style={styles.beginQuestionnaire}>Begin Questionnaire</Text>
        </TouchableOpacity>
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
  qHome: {
    position: "absolute",
    top: "20.63%",
    left: "5.56%",
    height: "28.91%",
    width: "88.89%",
    backgroundColor: "transparent"
  },
  header: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "15.16%",
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
  weValueYouAndYou: {
    position: "absolute",
    top: "54.45%",
    left: "5.83%",
    height: "34.17%",
    width: "88.89%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "Aller-Light",
    // lineHeight: 140,
    letterSpacing: 0.1
  },
  rectangle8: {
    // position: "absolute",
    // top: "78.56%",
    // height: "7.97%",
    // width: "60.83%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "transparent"
  },
  beginQuestionnaire: {
    position: "absolute",
    // top: "80%",
    // height: "7.97%",
    // width: "60.83%",
    alignSelf: "center",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Aller-Bold",
  },
  k86: {
    top: 35,
    left: 307,
    width: 35,
    height: 45,
    position: "absolute"
  },
  body: {
    height: "100%",
    alignItems: "center"
  },
  button: {
    top: "78.56%",
    height: "7.97%",
    width: "60.83%",
    alignItems: "center"
  }
});

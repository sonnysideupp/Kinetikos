import React, { Component } from "react";
import QHome from "../symbols/QHome";
import KinetikosIconTransparent85Balck1 from "../symbols/KinetikosIconTransparent85Balck1";
import { Svg, Path } from "react-native-svg";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default class Questionnaire extends Component {
  render() {
    return (
      <View style={styles.root}>
        <QHome style={styles.qHome} />
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
          <View style={styles.toHome}>
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
          </View>
        </View>
        <Text style={styles.weValueYouAndYou}>
          We value you and your health. By answering the following questions,
          you allow us to understand what you’re going through in your daily
          life. You answers will be sent directly to your clinician.
        </Text>
        <View style={styles.rect9}>
          <ImageBackground
            style={styles.rectangle8}
            source={require("../assets/Gradient_GSrOP4z.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"9BE2F29E-A582-481E-8EC6-C283AD12AD0C","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(129,150,201,1)","style":{}},{"offset":1,"stopColor":"rgba(86,110,190,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.beginQuestionnaire}>Begin Questionnaire</Text>
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
    top: "17.97%",
    left: "5.57%",
    height: "28.91%",
    width: "89.14%",
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
    top: "49.53%",
    left: "5.56%",
    height: "34.06%",
    width: "88.89%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "Aller-Light",
    lineHeight: "140%",
    letterSpacing: 0.1
  },
  rect9: {
    height: 51,
    width: 219,
    top: 554,
    left: 71,
    position: "absolute"
  },
  rectangle8: {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "transparent",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8
  },
  beginQuestionnaire: {
    top: "31.37%",
    left: "5.94%",
    width: "87.67%",
    height: "70.59%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontFamily: "Aller-Bold",
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  }
});

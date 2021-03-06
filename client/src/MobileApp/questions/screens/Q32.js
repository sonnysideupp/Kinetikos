import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";

import { Center } from "@builderx/utils";
import K from "../symbols/K";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default class Q32 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rectangle} />
        <View style={styles.rectangleCopy} />
        <Text style={styles.doYouFeelYourCon}>
          Do you feel your condition is getting better or worse?
        </Text>
        <View style={styles.next}>
          <ImageBackground
            style={styles.rectangle8}
            source={require("../assets/Gradient_Alnanqr.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"3620AA62-5F69-44FF-92CF-D49593833C56","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(129,150,201,1)","style":{}},{"offset":1,"stopColor":"rgba(86,110,190,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.finish}>Finish!</Text>
        </View>
        <View style={styles.back}>
          <ImageBackground
            style={styles.rectangle81}
            source={require("../assets/Gradient_fd1ILbg.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"597105B5-40E4-426F-9967-CEA65552020B","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(129,150,201,1)","style":{}},{"offset":1,"stopColor":"rgba(86,110,190,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.back1}>Back</Text>
          <Svg
            viewBox="0 0 12.34 20.84"
            preserveAspectRatio="none"
            style={styles.combinedShapeCopy}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              isClosed={true}
              d="M1.91 12.32 L0.00 10.41 L0.95 9.46 L9.46 0.95 L10.41 0.00 L12.32 1.91 L11.36 2.86 L3.82 10.41 L4.36 10.95 L11.95 18.54 L12.90 19.49 L10.99 21.40 L10.04 20.45 L2.45 12.86 L1.91 12.32 L1.91 12.32 Z"
            />
          </Svg>
        </View>
        <View style={styles.better}>
          <View style={styles.rectangle4} />
          <ImageBackground
            style={styles.container}
            source={require("../assets/Gradient_ePI6ubD.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"32C53C83-6DF5-4EB7-B2B3-C627FBED4846","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.better1}>Better</Text>
        </View>
        <View style={styles.worse}>
          <View style={styles.rectangle4Copy7} />
          <ImageBackground
            style={styles.container1}
            source={require("../assets/Gradient_DdPOPXq.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"CCC65AB3-5D06-4F49-BB86-95BADBB923AA","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.worse1}>Worse</Text>
        </View>
        <View style={styles.helpless}>
          <View style={styles.rectangle4Copy} />
          <Text style={styles.helpless1}>Please explain your answer</Text>
          <Text style={styles.helplessCopy}>Type your response here…</Text>
        </View>
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  rectangle: {
    position: "absolute",
    top: "15.63%",
    left: "0.00%",
    height: "1.88%",
    width: "100.00%",
    borderWidth: 1,
    borderColor: "rgba(179,179,179,1)",
    backgroundColor: "transparent"
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
    top: "18.88%",
    height: "9.76%",
    width: "88.89%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "Aller",
    left: "5.83%",
    lineHeight: "140%",
    letterSpacing: 0.1
  },
  next: {
    position: "absolute",
    top: "86.72%",
    left: "65.28%",
    height: "7.97%",
    width: "29.44%"
  },
  rectangle8: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "transparent"
  },
  finish: {
    position: "absolute",
    top: "31.37%",
    left: "7.62%",
    height: "72.55%",
    width: "84.76%",
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
  rectangle81: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "transparent"
  },
  back1: {
    position: "absolute",
    top: "31.37%",
    left: "13.46%",
    height: "72.55%",
    width: "84.62%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Aller-Bold"
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
  better: {
    position: "absolute",
    top: "28.59%",
    left: "2.78%",
    height: "10.00%",
    width: "46.67%"
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
  better1: {
    position: "absolute",
    top: "31.25%",
    left: "5.95%",
    height: "32.81%",
    width: "88.69%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  worse: {
    position: "absolute",
    top: "28.59%",
    left: "51.11%",
    height: "10.00%",
    width: "46.67%"
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
  worse1: {
    position: "absolute",
    top: "31.25%",
    left: "5.95%",
    height: "32.81%",
    width: "88.69%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  helpless: {
    position: "absolute",
    top: "38.75%",
    left: "2.78%",
    height: "44.22%",
    width: "95.00%"
  },
  rectangle4Copy: {
    position: "absolute",
    top: "18.73%",
    left: "0.00%",
    height: "81.27%",
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
  helpless1: {
    position: "absolute",
    top: "4.59%",
    left: "2.34%",
    height: "12.37%",
    width: "93.57%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 21,
    fontFamily: "Aller"
  },
  helplessCopy: {
    position: "absolute",
    top: "20.85%",
    left: "3.22%",
    height: "12.01%",
    width: "93.57%",
    backgroundColor: "transparent",
    color: "rgba(179,179,179,1)",
    fontSize: 18,
    fontFamily: "Aller"
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
  k86: {
    top: 35,
    left: 307,
    width: 35,
    height: 45,
    position: "absolute"
  }
});

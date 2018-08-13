import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import K from "../symbols/K";

import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default class Q12 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rectangle} />
        <View style={styles.rectangleCopy} />
        <Text style={styles.thisWeekHowOften}>
          This week, how often were your tremors so bad that you couldn’t hold
          something such as your phone?
        </Text>
        <View style={styles.next}>
          <ImageBackground
            style={styles.rectangle8}
            source={require("../assets/Gradient_oaUqSYQ.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"A2AEBD72-C998-4046-80B7-0BA13ECBCD85","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(129,150,201,1)","style":{}},{"offset":1,"stopColor":"rgba(86,110,190,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.next1}>Next</Text>
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
        <View style={styles.back}>
          <ImageBackground
            style={styles.rectangle81}
            source={require("../assets/Gradient_V0jATkz.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"D59FBDB5-835E-45AE-AA15-3A24BD7E98BF","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(129,150,201,1)","style":{}},{"offset":1,"stopColor":"rgba(86,110,190,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
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
        </View>
        <View style={styles.never}>
          <View style={styles.rectangle4} />
          <ImageBackground
            style={styles.container}
            source={require("../assets/Gradient_YBQ22w5.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"C4221BCF-EC4E-4CCA-8355-08EFFC9E2808","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.never1}>Never</Text>
        </View>
        <View style={styles.style}>
          <View style={styles.rectangle4Copy5} />
          <ImageBackground
            style={styles.container1}
            source={require("../assets/Gradient_TxJ3BLs.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"7FF467EC-EF99-44B4-A363-16AEB57C69A9","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.times}>1-3 times</Text>
        </View>
        <View style={styles.style1}>
          <View style={styles.rectangle4Copy6} />
          <ImageBackground
            style={styles.container2}
            source={require("../assets/Gradient_CqQAX9i.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"476A1111-BC9C-411F-A71C-303154AC6204","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.times1}>4-6 times</Text>
        </View>
        <View style={styles.style2}>
          <View style={styles.rectangle4Copy7} />
          <ImageBackground
            style={styles.container3}
            source={require("../assets/Gradient_AjMZQ0k.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"914B4054-8D06-4755-B7AA-BA3E32089AEE","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.times2}>7-9 times</Text>
        </View>
        <View style={styles.style3}>
          <View style={styles.rectangle4Copy8} />
          <ImageBackground
            style={styles.container4}
            source={require("../assets/Gradient_SFhTiFB.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"E6252311-22F5-4A59-BDF7-568AAFD6EF1F","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.times3}>10+ times</Text>
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
  thisWeekHowOften: {
    position: "absolute",
    top: "18.88%",
    left: "1.67%",
    height: "14.04%",
    width: "95.56%",
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
    top: "86.56%",
    left: "65.56%",
    height: "7.97%",
    width: "28.89%"
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
  next1: {
    position: "absolute",
    top: "31.37%",
    left: "0%",
    height: "47.48%",
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
    left: 76,
    right: 15.66,
    bottom: 15.16,
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
    top: "9.80%",
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
    top: "29.63%",
    left: "26.88%",
    height: "44.44%",
    width: "46.56%",
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
    top: "29.63%",
    left: "26.88%",
    height: "48.15%",
    width: "46.56%",
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
    top: "29.63%",
    left: "26.88%",
    height: "44.44%",
    width: "46.56%",
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
    top: "29.63%",
    left: "26.88%",
    height: "48.15%",
    width: "46.56%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  style3: {
    position: "absolute",
    top: "75.00%",
    left: "5.56%",
    height: "8.44%",
    width: "88.89%"
  },
  rectangle4Copy8: {
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
  container4: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent",
    display: "none"
  },
  times3: {
    position: "absolute",
    top: "29.63%",
    left: "26.88%",
    height: "50%",
    width: "46.56%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
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

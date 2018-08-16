import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import KinetikosIconTransparent85Balck1 from "../symbols/KinetikosIconTransparent85Balck1";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default class Q2 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rectangle} />
        <View style={styles.rectangleCopy} />
        <Text style={styles.thisWeekHaveYou}>
          This week, have you felt any of the following emotions/feelings?
          (select all that apply)
        </Text>
        <View style={styles.next}>
          <ImageBackground
            style={styles.rectangle8}
            source={require("../assets/Gradient_ol12Sos.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"0ADBCA0A-AF3C-4E8A-88C2-EC32DE58B8FC","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(129,150,201,1)","style":{}},{"offset":1,"stopColor":"rgba(86,110,190,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
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
            source={require("../assets/Gradient_yOJu1af.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"D786881A-6DEB-43F2-960A-386C1AD6EEA8","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(129,150,201,1)","style":{}},{"offset":1,"stopColor":"rgba(86,110,190,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
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
        <View style={styles.angry}>
          <View style={styles.rectangle4} />
          <ImageBackground
            style={styles.container}
            source={require("../assets/Gradient_tBkWbvX.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"AA91061B-9135-4A25-BB59-CE534D135435","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.angry1}>Angry</Text>
        </View>
        <View style={styles.helpless}>
          <View style={styles.rectangle4Copy} />
          <ImageBackground
            style={styles.container1}
            source={require("../assets/Gradient_d9k9vNm.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"1F5BFF58-1E2E-4C31-AFCA-A46B50126F7E","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.helpless1}>Helpless</Text>
        </View>
        <View style={styles.incompetent}>
          <View style={styles.rectangle4Copy2} />
          <ImageBackground
            style={styles.container2}
            source={require("../assets/Gradient_eCCkXQv.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"865A0351-BF1B-44AD-97E7-267F20082752","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.incompetent1}>Incompetent</Text>
        </View>
        <View style={styles.lonely}>
          <View style={styles.rectangle4Copy3} />
          <ImageBackground
            style={styles.container3}
            source={require("../assets/Gradient_HpvZhD3.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"2B6EE217-8A9A-4770-BDB0-8C1D592D0088","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.lonely1}>Lonely</Text>
        </View>
        <View style={styles.depressed}>
          <View style={styles.rectangle4Copy7} />
          <ImageBackground
            style={styles.container4}
            source={require("../assets/Gradient_bevKSJd.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"42F62EB9-84E5-4765-8531-0C1FE523FCC9","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.depressed1}>Depressed</Text>
        </View>
        <View style={styles.unmotivated}>
          <View style={styles.rectangle4Copy6} />
          <ImageBackground
            style={styles.container5}
            source={require("../assets/Gradient_fvvJaJ9.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"C607F78A-871F-4CD6-9A55-73C635244DC2","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.unmotivated1}>Unmotivated</Text>
        </View>
        <View style={styles.anxious}>
          <View style={styles.rectangle4Copy5} />
          <ImageBackground
            style={styles.container6}
            source={require("../assets/Gradient_PNc5l3Y.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"E7A0239F-763B-439F-BAAA-3CE93D1A9580","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.anxious1}>Anxious</Text>
        </View>
        <View style={styles.irritable}>
          <View style={styles.rectangle4Copy4} />
          <ImageBackground
            style={styles.container7}
            source={require("../assets/Gradient_LyS5gGX.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"70B8742D-7BDE-42D6-84A1-9A91BDEBE71A","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(68,187,219,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.irritable1}>Irritable</Text>
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
    width: "66.67%",
    backgroundColor: "rgba(86,110,190,1)"
  },
  thisWeekHaveYou: {
    position: "absolute",
    top: "18.75%",
    left: "5.56%",
    height: "16.56%",
    width: "88.61%",
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
    top: "86.56%",
    left: "5.28%",
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
    width: "85.58%",
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
  angry: {
    position: "absolute",
    top: "32.97%",
    left: "2.51%",
    height: "12.03%",
    width: "46.8%"
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
  angry1: {
    position: "absolute",
    top: "31.17%",
    left: "5.92%",
    height: "35.06%",
    width: "88.76%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  helpless: {
    position: "absolute",
    top: "46.09%",
    left: "2.51%",
    height: "11.88%",
    width: "46.8%"
  },
  rectangle4Copy: {
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
  helpless1: {
    position: "absolute",
    top: "32.89%",
    left: "5.92%",
    height: "42.11%",
    width: "88.76%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  incompetent: {
    position: "absolute",
    top: "58.91%",
    left: "2.51%",
    height: "12.03%",
    width: "46.8%"
  },
  rectangle4Copy2: {
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
  incompetent1: {
    position: "absolute",
    top: "32.47%",
    left: "5.92%",
    height: "36.36%",
    width: "88.76%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  lonely: {
    position: "absolute",
    top: "71.88%",
    left: "2.51%",
    height: "12.03%",
    width: "46.8%"
  },
  rectangle4Copy3: {
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
  lonely1: {
    position: "absolute",
    top: "32.47%",
    left: "5.92%",
    height: "36.36%",
    width: "88.76%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  depressed: {
    position: "absolute",
    top: "32.97%",
    left: "51.25%",
    height: "12.03%",
    width: "46.8%"
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
  depressed1: {
    position: "absolute",
    top: "32.47%",
    left: "5.33%",
    height: "49.35%",
    width: "88.76%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  unmotivated: {
    position: "absolute",
    top: "46.09%",
    left: "51.25%",
    height: "11.88%",
    width: "46.8%"
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
  container5: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent",
    display: "none"
  },
  unmotivated1: {
    position: "absolute",
    top: "32.89%",
    left: "5.33%",
    height: "40.79%",
    width: "88.76%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  anxious: {
    position: "absolute",
    top: "58.91%",
    left: "51.25%",
    height: "12.03%",
    width: "46.8%"
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
  container6: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent",
    display: "none"
  },
  anxious1: {
    position: "absolute",
    top: "32.47%",
    left: "5.33%",
    height: "40.26%",
    width: "88.76%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "Aller"
  },
  irritable: {
    position: "absolute",
    top: "71.88%",
    left: "51.25%",
    height: "12.03%",
    width: "46.8%"
  },
  rectangle4Copy4: {
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
  container7: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent",
    display: "none"
  },
  irritable1: {
    position: "absolute",
    top: "32.47%",
    left: "5.33%",
    height: "42.86%",
    width: "88.76%",
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
  }
});

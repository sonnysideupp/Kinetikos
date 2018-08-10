import React, { Component } from "react";
import Clipboard1 from "./Clipboard1";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default class QuestionHome extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 320,
    height: 185
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.group2} />
        <ImageBackground
          style={styles.mask}
          source={require("../assets/Gradient_JUKOp5p.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"E3DEE002-8707-4D50-899D-B60C10624034","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(84,175,200,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
        />
        <View style={styles.questionnaire1}>
          <View style={styles.rectangle31}>
            <View style={styles.clipboard}>
              <ImageBackground
                style={styles.mask1}
                source={require("../assets/Gradient_kuIYgMx.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"E87056B6-DEC4-4D67-B883-792EFFA4CBF5","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(84,175,200,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
              >
                <Clipboard1 style={styles.clipboard1} />
              </ImageBackground>
            </View>
          </View>
        </View>
        <Text style={styles.letsTalkAboutYou}>
          Let’s Talk {"\n"}About {"\n"}You!
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  group2: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  mask: {
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
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  rectangle31: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  clipboard: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  mask1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "transparent",
    display: "none"
  },
  clipboard1: {
    position: "absolute",
    top: "25.95%",
    left: "53.75%",
    height: "97.84%",
    width: "42.50%",
    backgroundColor: "transparent"
  },
  letsTalkAboutYou: {
    position: "absolute",
    top: "7.57%",
    left: "8.44%",
    height: "90.27%",
    width: "50.00%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    fontFamily: "Aller-Bold"
  }
});

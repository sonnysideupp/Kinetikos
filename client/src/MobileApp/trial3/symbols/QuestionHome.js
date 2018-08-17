import React, { Component } from "react";
import Clipboard from "./Clipboard";
import { View, Text, StyleSheet } from "react-native";

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
        <View style={styles.mask} />
        <View style={styles.questionnaire}>
          <View style={styles.rectangle31}>
            <View style={styles.clipboard}>
              <View style={styles.mask1}>
                <Clipboard style={styles.clipboard1} />
              </View>
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
  questionnaire: {
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

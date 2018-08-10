import React, { Component } from "react";
import Question2 from "./Question2";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Clipboard2 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 136,
    height: 181
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rectangle3Copy} />
        <View style={styles.rectangle3} />
        <View style={styles.rectangle4Copy2} />
        <View style={styles.rectangle4} />
        <Question2 style={styles.questionCopy2} />
        <View style={styles.group4}>
          <View style={styles.rectangleCopy3} />
          <View style={styles.rectangleCopy4} />
          <View style={styles.rectangleCopy5} />
          <View style={styles.rectangleCopy6} />
        </View>
        <View style={styles.group3}>
          <View style={styles.rectangleCopy8} />
          <View style={styles.rectangleCopy9} />
          <View style={styles.rectangleCopy10} />
        </View>
        <View style={styles.group5}>
          <Svg
            viewBox="0 0 66.05 19.15"
            preserveAspectRatio="none"
            style={styles.combinedShape1}
          >
            <Path
              strokeWidth={0}
              fill="rgba(153,152,152,1)"
              isClosed={true}
              d="M1.00 6.90 C1.00 6.90 24.39 6.90 24.39 6.90 C25.60 2.91 29.45 0.00 34.00 0.00 C38.55 0.00 42.39 2.91 43.60 6.90 C43.60 6.90 67.00 6.90 67.00 6.90 L66.00 19.00 C66.00 19.00 35.77 19.00 35.77 19.00 C35.19 19.10 34.60 19.15 34.00 19.15 C33.39 19.15 32.80 19.10 32.23 19.00 C32.23 19.00 0.00 19.00 0.00 19.00 L1.00 6.90 Z"
            />
          </Svg>
          <Svg
            viewBox="0 0 66.00 23.00"
            preserveAspectRatio="none"
            style={styles.combinedShape2}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              isClosed={true}
              d="M0.00 7.00 C0.00 7.00 24.46 7.00 24.46 7.00 C25.73 2.94 29.53 0.00 34.00 0.00 C38.48 0.00 42.27 2.94 43.54 7.00 C43.54 7.00 66.00 7.00 66.00 7.00 L66.00 23.00 L0.00 23.00 L0.00 7.00 Z"
            />
          </Svg>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rectangle3Copy: {
    position: "absolute",
    top: "10.50%",
    left: "2.21%",
    height: "89.50%",
    width: "97.79%",
    borderWidth: 6,
    borderColor: "rgba(153,152,152,1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 8,
    backgroundColor: "transparent"
  },
  rectangle3: {
    position: "absolute",
    top: "10.50%",
    left: "0.00%",
    height: "89.50%",
    width: "97.79%",
    borderWidth: 6,
    borderColor: "rgba(255,255,255,1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 8,
    backgroundColor: "transparent"
  },
  rectangle4Copy2: {
    position: "absolute",
    top: "50.83%",
    left: "14.80%",
    height: "43.65%",
    width: "69.76%",
    borderWidth: 1,
    borderColor: "rgba(153,152,152,1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
    backgroundColor: "transparent"
  },
  rectangle4: {
    position: "absolute",
    top: "50.83%",
    left: "13.97%",
    height: "43.65%",
    width: "69.76%",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
    backgroundColor: "transparent"
  },
  questionCopy2: {
    position: "absolute",
    top: "18.23%",
    left: "15.44%",
    height: "24.86%",
    width: "22.79%",
    backgroundColor: "transparent"
  },
  group4: {
    position: "absolute",
    top: "23.76%",
    left: "37.50%",
    height: "18.23%",
    width: "39.71%"
  },
  rectangleCopy3: {
    position: "absolute",
    top: "0.00%",
    left: "14.81%",
    height: "9.09%",
    width: "85.19%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rectangleCopy4: {
    position: "absolute",
    top: "30.30%",
    left: "14.81%",
    height: "9.09%",
    width: "85.19%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rectangleCopy5: {
    position: "absolute",
    top: "60.61%",
    left: "7.41%",
    height: "9.09%",
    width: "92.59%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rectangleCopy6: {
    position: "absolute",
    top: "90.91%",
    left: "0.00%",
    height: "9.09%",
    width: "100.00%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "rgba(255,255,255,1)"
  },
  group3: {
    position: "absolute",
    top: "57.46%",
    left: "21.32%",
    height: "9.39%",
    width: "53.68%"
  },
  rectangleCopy8: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "17.65%",
    width: "100.00%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rectangleCopy9: {
    position: "absolute",
    top: "41.18%",
    left: "0.00%",
    height: "17.65%",
    width: "100.00%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rectangleCopy10: {
    position: "absolute",
    top: "82.35%",
    left: "0.00%",
    height: "17.65%",
    width: "72.60%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "rgba(255,255,255,1)"
  },
  group5: {
    position: "absolute",
    top: "0.00%",
    left: "26.47%",
    height: "13.26%",
    width: "49.26%"
  },
  combinedShape1: {
    position: "absolute",
    height: "79.79%",
    width: "98.59%",
    top: "0.00%",
    left: "0.60%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  combinedShape2: {
    position: "absolute",
    height: "95.83%",
    width: "98.51%",
    top: "4.17%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});

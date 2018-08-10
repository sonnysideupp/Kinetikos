import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Play1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 118,
    height: 118
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.play1}>
          <Svg
            viewBox="0 0 118.00 118.00"
            preserveAspectRatio="none"
            style={styles.oval92}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,0.75)"
              isClosed={true}
              d="M59.00 118.00 C91.58 118.00 118.00 91.58 118.00 59.00 C118.00 26.42 91.58 0.00 59.00 0.00 C26.42 0.00 0.00 26.42 0.00 59.00 C0.00 91.58 26.42 118.00 59.00 118.00 Z"
            />
          </Svg>
          <Svg
            viewBox="0 0 64.20 57.34"
            preserveAspectRatio="none"
            style={styles.triangle1}
          >
            <Path
              strokeWidth={1}
              fill="rgba(255,255,255,1)"
              stroke="rgba(153,152,152,1)"
              isClosed={true}
              d="M31.60 -3.55 L65.60 55.84 L-2.40 55.84 L31.60 -3.55 Z"
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
  play1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  oval92: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  triangle1: {
    position: "absolute",
    height: "47.75%",
    width: "53.56%",
    top: "25.87%",
    left: "28.45%",
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "90deg"
      }
    ]
  }
});

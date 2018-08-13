import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Stop extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 118,
    height: 118
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.stop}>
          <Svg
            viewBox="0 0 118.00 118.00"
            preserveAspectRatio="none"
            style={styles.oval91}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,0.75)"
              isClosed={true}
              d="M59.00 118.00 C91.58 118.00 118.00 91.58 118.00 59.00 C118.00 26.42 91.58 0.00 59.00 0.00 C26.42 0.00 0.00 26.42 0.00 59.00 C0.00 91.58 26.42 118.00 59.00 118.00 Z"
            />
          </Svg>
          <View style={styles.rectangle2} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  stop: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  oval91: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle2: {
    position: "absolute",
    top: "25.42%",
    left: "27.12%",
    height: "49.15%",
    width: "46.48%",
    borderWidth: 1,
    borderColor: "rgba(153,152,152,1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    shadowColor: "rgba(255,255,255,1)",
    shadowRadius: 4,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOffset: {
      height: 0,
      width: 0
    }
  }
});

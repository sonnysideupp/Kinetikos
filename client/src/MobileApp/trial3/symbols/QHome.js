import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

export default class QHome extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 320,
    height: 185
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          source={require("../assets/6e5e8297dbf85bc987720e2137549344be254edd.png")}
          style={styles.bitmap}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  bitmap: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "transparent"
  }
});

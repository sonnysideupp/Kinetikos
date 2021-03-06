import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

export default class KinetikosIconTransparent85Balck extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 36,
    height: 45
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          source={require("../assets/953f88ea27175375d51167f2e35e70b3aa71adc3.png")}
          style={styles.kinetikosIconTransparent85Balck}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  kinetikosIconTransparent85Balck: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "transparent"
  }
});

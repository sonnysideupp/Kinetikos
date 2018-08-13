import React, { Component } from "react";
import KinetikosIconTransparent85Balck2 from "./KinetikosIconTransparent85Balck2";
import { View, StyleSheet } from "react-native";

export default class K extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 35,
    height: 45
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <KinetikosIconTransparent85Balck2
          style={styles.kinetikosIconTransparent85Balck}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  kinetikosIconTransparent85Balck: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent"
  }
});

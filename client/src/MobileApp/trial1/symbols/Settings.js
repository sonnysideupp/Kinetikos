import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Settings extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 85,
    height: 84
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.settingsIcon}>
          <Svg
            viewBox="0 0 81.00 81.00"
            preserveAspectRatio="none"
            style={styles.darkSettings}
          >
            <Path
              strokeWidth={0}
              fill="rgba(153,152,152,1)"
              isClosed={true}
              d="M12.99 22.69 C12.99 22.69 7.01 16.71 7.01 16.71 L16.71 7.01 C16.71 7.01 22.74 13.04 22.74 13.04 C26.02 10.93 29.70 9.38 33.64 8.53 C33.64 8.53 33.64 0.00 33.64 0.00 L47.36 0.00 C47.36 0.00 47.36 8.50 47.36 8.50 C51.32 9.32 55.03 10.86 58.33 12.97 C58.33 12.97 64.29 7.01 64.29 7.01 L73.99 16.71 C73.99 16.71 68.11 22.59 68.11 22.59 C70.31 25.90 71.93 29.63 72.82 33.64 C72.82 33.64 81.00 33.64 81.00 33.64 L81.00 47.36 C81.00 47.36 72.95 47.36 72.95 47.36 C72.12 51.45 70.54 55.27 68.36 58.66 C68.36 58.66 73.99 64.29 73.99 64.29 L64.29 73.99 C64.29 73.99 58.70 68.41 58.70 68.41 C55.31 70.64 51.47 72.26 47.36 73.12 C47.36 73.12 47.36 81.00 47.36 81.00 L33.64 81.00 C33.64 81.00 33.64 73.08 33.64 73.08 C29.55 72.21 25.74 70.57 22.37 68.34 C22.37 68.34 16.71 73.99 16.71 73.99 L7.01 64.29 C7.01 64.29 12.75 58.55 12.75 58.55 C10.60 55.19 9.05 51.41 8.23 47.36 C8.23 47.36 0.00 47.36 0.00 47.36 L0.00 33.64 C0.00 33.64 8.36 33.64 8.36 33.64 C9.24 29.68 10.83 25.98 12.99 22.69 Z M40.50 61.81 C42.90 61.81 45.21 61.41 47.36 60.66 C48.23 60.36 49.08 60.01 49.90 59.60 C54.09 57.50 57.48 54.03 59.49 49.79 C59.86 49.00 60.19 48.19 60.46 47.36 C61.14 45.30 61.50 43.10 61.50 40.81 C61.50 38.29 61.06 35.88 60.25 33.64 C59.97 32.88 59.65 32.13 59.29 31.41 C57.19 27.22 53.73 23.83 49.48 21.82 C48.79 21.49 48.09 21.20 47.36 20.95 C45.21 20.21 42.90 19.80 40.50 19.80 C38.10 19.80 35.79 20.21 33.64 20.95 C32.91 21.20 32.21 21.49 31.52 21.82 C27.27 23.83 23.81 27.22 21.71 31.41 C21.35 32.13 21.03 32.88 20.75 33.64 C19.94 35.88 19.50 38.29 19.50 40.81 C19.50 43.10 19.86 45.30 20.54 47.36 C20.81 48.19 21.14 49.00 21.51 49.79 C23.52 54.03 26.91 57.50 31.10 59.60 C31.92 60.01 32.77 60.36 33.64 60.66 C35.79 61.41 38.10 61.81 40.50 61.81 Z"
            />
          </Svg>
          <Svg
            viewBox="0 0 81.00 81.00"
            preserveAspectRatio="none"
            style={styles.lightSettings}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              isClosed={true}
              d="M12.99 22.69 C12.99 22.69 7.01 16.71 7.01 16.71 L16.71 7.01 C16.71 7.01 22.74 13.04 22.74 13.04 C26.02 10.93 29.70 9.38 33.64 8.53 C33.64 8.53 33.64 0.00 33.64 0.00 L47.36 0.00 C47.36 0.00 47.36 8.50 47.36 8.50 C51.32 9.32 55.03 10.86 58.33 12.97 C58.33 12.97 64.29 7.01 64.29 7.01 L73.99 16.71 C73.99 16.71 68.11 22.59 68.11 22.59 C70.31 25.90 71.93 29.63 72.82 33.64 C72.82 33.64 81.00 33.64 81.00 33.64 L81.00 47.36 C81.00 47.36 72.95 47.36 72.95 47.36 C72.12 51.45 70.54 55.27 68.36 58.66 C68.36 58.66 73.99 64.29 73.99 64.29 L64.29 73.99 C64.29 73.99 58.70 68.41 58.70 68.41 C55.31 70.64 51.47 72.26 47.36 73.12 C47.36 73.12 47.36 81.00 47.36 81.00 L33.64 81.00 C33.64 81.00 33.64 73.08 33.64 73.08 C29.55 72.21 25.74 70.57 22.37 68.34 C22.37 68.34 16.71 73.99 16.71 73.99 L7.01 64.29 C7.01 64.29 12.75 58.55 12.75 58.55 C10.60 55.19 9.05 51.41 8.23 47.36 C8.23 47.36 0.00 47.36 0.00 47.36 L0.00 33.64 C0.00 33.64 8.36 33.64 8.36 33.64 C9.24 29.68 10.83 25.98 12.99 22.69 Z M40.50 61.81 C42.90 61.81 45.21 61.41 47.36 60.66 C48.23 60.36 49.08 60.01 49.90 59.60 C54.09 57.50 57.48 54.03 59.49 49.79 C59.86 49.00 60.19 48.19 60.46 47.36 C61.14 45.30 61.50 43.10 61.50 40.81 C61.50 38.29 61.06 35.88 60.25 33.64 C59.97 32.88 59.65 32.13 59.29 31.41 C57.19 27.22 53.73 23.83 49.48 21.82 C48.79 21.49 48.09 21.20 47.36 20.95 C45.21 20.21 42.90 19.80 40.50 19.80 C38.10 19.80 35.79 20.21 33.64 20.95 C32.91 21.20 32.21 21.49 31.52 21.82 C27.27 23.83 23.81 27.22 21.71 31.41 C21.35 32.13 21.03 32.88 20.75 33.64 C19.94 35.88 19.50 38.29 19.50 40.81 C19.50 43.10 19.86 45.30 20.54 47.36 C20.81 48.19 21.14 49.00 21.51 49.79 C23.52 54.03 26.91 57.50 31.10 59.60 C31.92 60.01 32.77 60.36 33.64 60.66 C35.79 61.41 38.10 61.81 40.50 61.81 Z"
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
  settingsIcon: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  darkSettings: {
    position: "absolute",
    height: "96.43%",
    width: "95.29%",
    top: "3.40%",
    left: "4.71%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  lightSettings: {
    position: "absolute",
    height: "96.43%",
    width: "95.29%",
    top: "1.02%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});

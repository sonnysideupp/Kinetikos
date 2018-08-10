import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class User extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 67,
    height: 84
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.icon}>
          <Svg
            viewBox="0 0 65.00 80.40"
            preserveAspectRatio="none"
            style={styles.user}
          >
            <Path
              strokeWidth={0}
              fill="rgba(153,152,152,1)"
              isClosed={true}
              d="M39.83 42.68 C39.83 42.80 39.83 43.38 39.83 44.13 C39.83 44.61 39.83 45.59 39.83 45.72 C39.83 46.00 39.83 46.61 39.83 47.02 C39.83 47.37 39.82 47.74 39.83 48.01 C39.83 48.14 39.89 48.45 39.91 48.56 C39.94 48.67 39.95 48.69 39.97 48.79 C39.99 48.88 40.09 49.18 40.27 49.57 C40.38 49.78 40.59 50.11 40.78 50.35 C40.96 50.59 41.26 50.90 41.57 51.14 C41.78 51.30 42.02 51.46 42.33 51.60 C42.56 51.71 42.84 51.83 43.22 51.91 C43.48 51.95 43.87 52.03 44.19 52.09 C44.60 52.17 46.96 52.58 49.63 53.10 C50.62 53.28 51.61 53.42 52.70 53.70 C52.90 53.76 53.46 53.92 54.08 54.16 C54.71 54.37 55.61 54.82 55.87 54.96 C56.11 55.09 56.68 55.39 57.17 55.71 C57.67 56.03 58.14 56.35 58.35 56.51 C58.56 56.67 59.19 57.15 59.59 57.51 C59.98 57.87 61.03 58.66 62.28 60.32 C62.74 60.93 62.94 61.13 63.65 62.32 C64.16 63.19 64.36 63.68 64.62 64.32 C64.67 64.43 64.94 65.16 65.00 65.40 C65.00 65.40 65.00 65.40 65.00 65.40 L65.00 80.40 L0.00 80.40 L0.00 65.40 C0.00 65.40 0.01 65.40 0.01 65.40 C0.01 64.72 0.22 63.28 0.80 61.77 C1.33 60.37 2.14 58.92 3.09 57.86 C3.69 57.04 5.81 54.92 8.17 53.96 C8.44 53.80 9.31 53.47 10.57 53.18 C12.43 52.90 14.75 52.47 16.98 52.13 C17.54 52.04 18.43 51.91 18.69 51.86 C18.95 51.81 19.21 51.75 19.26 51.73 C19.32 51.71 19.70 51.58 19.95 51.45 C20.21 51.32 20.42 51.16 20.47 51.12 C20.66 50.98 20.96 50.72 21.08 50.57 C21.31 50.32 21.53 50.03 21.65 49.82 C21.94 49.32 22.07 48.95 22.14 48.66 C22.24 48.28 22.24 48.01 22.25 47.97 C22.25 47.30 22.24 46.80 22.25 46.26 C22.26 44.75 22.25 43.83 22.25 43.78 C22.25 43.49 22.25 42.77 22.25 42.68 C22.07 42.48 21.89 42.25 21.72 42.01 C21.33 41.45 21.18 41.10 21.05 40.87 C20.77 40.32 20.58 39.80 20.47 39.51 C20.12 38.62 19.80 37.34 19.53 36.17 C19.15 34.60 18.89 33.17 18.83 32.98 C18.69 32.47 16.80 23.56 16.75 22.57 C16.69 21.51 16.55 19.59 16.53 19.24 C16.43 17.98 16.39 16.92 16.35 16.67 C16.30 15.03 15.85 11.88 16.30 9.88 C16.73 7.88 17.57 6.60 18.25 6.09 C19.78 4.95 20.60 4.57 21.19 4.07 C22.18 3.14 25.21 1.55 25.36 1.46 C27.33 0.92 29.07 0.00 32.00 0.00 C33.99 0.00 35.56 0.47 37.46 1.33 C37.66 1.42 38.32 1.73 39.12 2.11 C39.83 2.45 41.15 3.03 41.89 3.35 C42.14 3.47 42.38 3.57 42.62 3.75 C42.82 3.89 43.23 4.20 43.56 4.59 C43.77 4.85 44.01 5.13 44.23 5.50 C44.49 5.91 44.60 6.09 44.98 6.93 C45.25 7.53 45.46 8.25 45.64 8.99 C45.71 9.33 45.82 9.88 45.90 10.40 C45.97 10.93 45.99 11.71 45.99 12.13 C45.99 13.11 45.85 14.44 45.77 15.97 C45.64 18.44 45.40 21.46 45.18 24.53 C44.95 27.59 43.61 30.35 43.12 32.96 C42.76 34.87 42.43 36.91 41.91 38.58 C41.27 40.57 40.85 41.18 40.65 41.54 C40.55 41.70 40.25 42.19 39.83 42.68 Z"
            />
          </Svg>
          <Svg
            viewBox="0 0 63.38 80.00"
            preserveAspectRatio="none"
            style={styles.userCopy}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              isClosed={true}
              d="M38.83 42.46 C38.83 42.59 38.83 43.16 38.83 43.91 C38.83 44.39 38.83 45.36 38.83 45.50 C38.83 45.77 38.83 46.38 38.83 46.78 C38.83 47.14 38.83 47.50 38.83 47.77 C38.84 47.90 38.90 48.21 38.92 48.32 C38.94 48.43 38.96 48.45 38.97 48.55 C38.99 48.64 39.09 48.94 39.27 49.32 C39.37 49.53 39.58 49.86 39.77 50.10 C39.94 50.34 40.23 50.65 40.53 50.89 C40.74 51.04 40.97 51.20 41.28 51.34 C41.50 51.46 41.78 51.57 42.14 51.65 C42.40 51.70 42.78 51.77 43.09 51.83 C43.49 51.91 45.79 52.32 48.39 52.83 C49.36 53.02 50.33 53.15 51.38 53.43 C51.59 53.49 52.13 53.65 52.73 53.89 C53.35 54.10 54.22 54.55 54.48 54.69 C54.72 54.82 55.27 55.11 55.75 55.43 C56.24 55.75 56.70 56.07 56.90 56.23 C57.10 56.39 57.72 56.86 58.10 57.22 C58.49 57.58 59.51 58.37 60.73 60.02 C61.18 60.62 61.37 60.82 62.06 62.01 C62.57 62.87 62.76 63.37 63.02 64.00 C63.06 64.11 63.32 64.84 63.38 65.07 C63.38 65.07 63.38 65.07 63.38 65.07 L63.38 80.00 L0.00 80.00 L0.00 65.07 C0.00 65.07 0.01 65.07 0.01 65.07 C0.01 64.40 0.21 62.96 0.78 61.46 C1.30 60.07 2.09 58.62 3.01 57.57 C3.59 56.75 5.67 54.65 7.97 53.69 C8.23 53.54 9.08 53.20 10.31 52.92 C12.13 52.63 14.39 52.21 16.56 51.87 C17.11 51.78 17.98 51.65 18.23 51.60 C18.48 51.55 18.74 51.49 18.78 51.47 C18.84 51.45 19.21 51.32 19.46 51.19 C19.71 51.06 19.91 50.90 19.96 50.86 C20.14 50.73 20.43 50.46 20.56 50.32 C20.78 50.07 21.00 49.78 21.11 49.58 C21.40 49.07 21.52 48.70 21.59 48.42 C21.68 48.04 21.68 47.77 21.70 47.73 C21.70 47.06 21.69 46.57 21.70 46.03 C21.70 44.53 21.70 43.61 21.70 43.56 C21.70 43.27 21.70 42.56 21.70 42.46 C21.52 42.27 21.34 42.04 21.18 41.80 C20.80 41.24 20.65 40.90 20.53 40.66 C20.25 40.12 20.07 39.60 19.96 39.31 C19.62 38.42 19.31 37.15 19.04 35.99 C18.67 34.43 18.42 33.01 18.36 32.82 C18.22 32.30 16.38 23.44 16.33 22.46 C16.28 21.40 16.14 19.49 16.12 19.14 C16.02 17.89 15.99 16.84 15.95 16.58 C15.89 14.96 15.46 11.82 15.89 9.83 C16.31 7.84 17.13 6.57 17.79 6.06 C19.29 4.93 20.09 4.54 20.66 4.05 C21.63 3.13 24.59 1.54 24.73 1.46 C26.65 0.91 28.35 0.00 31.20 0.00 C33.14 0.00 34.68 0.47 36.53 1.32 C36.72 1.42 37.36 1.72 38.15 2.10 C38.84 2.44 40.13 3.02 40.84 3.34 C41.09 3.46 41.33 3.55 41.56 3.73 C41.76 3.87 42.16 4.18 42.48 4.57 C42.68 4.82 42.92 5.10 43.13 5.47 C43.38 5.88 43.49 6.06 43.86 6.90 C44.12 7.50 44.33 8.21 44.50 8.94 C44.58 9.29 44.68 9.83 44.75 10.35 C44.82 10.88 44.85 11.65 44.85 12.07 C44.85 13.05 44.71 14.37 44.63 15.89 C44.50 18.35 44.27 21.35 44.06 24.41 C43.84 27.46 42.52 30.20 42.05 32.80 C41.69 34.70 41.37 36.73 40.87 38.39 C40.24 40.37 39.83 40.98 39.64 41.34 C39.54 41.50 39.25 41.98 38.83 42.46 Z"
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
  icon: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  user: {
    position: "absolute",
    height: "95.71%",
    width: "97.01%",
    top: "3.57%",
    left: "2.99%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  userCopy: {
    position: "absolute",
    height: "95.24%",
    width: "94.60%",
    top: "0.48%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});

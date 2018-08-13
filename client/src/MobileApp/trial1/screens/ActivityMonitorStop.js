import React, { Component } from "react";
import { Svg, Defs, ClipPath, Path } from "react-native-svg";
import Stop1 from "../symbols/Stop1";
import { Center } from "@builderx/utils";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";

export default class ActivityMonitorStop extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.activity}>
          <View style={styles.activityIconCopy2}>
            <ImageBackground
              style={styles.mask}
              source={require("../assets/Gradient_TY6upcB.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.15"},"gradientType":"LinearGradient","id":"9EED13B1-37A4-4F8E-996C-423861BE7D8D","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(138,187,231,1)","style":{}},{"offset":1,"stopColor":"rgba(96,164,226,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
            >
              <View style={styles.activityIconCopy21}>
                <View style={styles.lFoot}>
                  <Svg
                    viewBox="0 0 23.21 57.51"
                    preserveAspectRatio="none"
                    style={styles.footDarkL}
                  >
                    <Defs>
                      <ClipPath id="clipPath21">
                        <Path
                          strokeWidth={0}
                          fill="rgba(153,152,152,1)"
                          isClosed={true}
                          d="M3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                        />
                      </ClipPath>
                    </Defs>
                    <Path
                      strokeWidth={0}
                      fill="rgba(153,152,152,1)"
                      isClosed={true}
                      d="M3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                      clipPath="url(#clipPath21)"
                    />
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      isClosed={true}
                      d="M4.67 43.81 C4.64 43.67 4.58 43.45 4.50 43.18 C4.50 43.18 4.85 43.08 4.85 43.08 L9.98 41.61 C9.98 41.61 22.21 38.50 22.21 38.50 C22.22 38.56 22.24 38.63 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.02 25.27 22.31 29.37 21.83 32.10 C21.83 32.10 2.25 36.45 2.25 36.45 C1.77 34.90 1.52 33.08 1.11 31.60 Z"
                      clipPath="url(#clipPath21)"
                    />
                  </Svg>
                  <Svg
                    viewBox="0 0 23.18 55.15"
                    preserveAspectRatio="none"
                    style={styles.footLightL}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      isClosed={true}
                      d="M4.67 43.81 C4.64 43.67 4.58 43.45 4.50 43.18 C4.50 43.18 4.85 43.08 4.85 43.08 L9.98 41.61 C9.98 41.61 22.21 38.50 22.21 38.50 C22.22 38.56 22.24 38.63 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.02 25.27 22.31 29.37 21.83 32.10 C21.83 32.10 2.25 36.45 2.25 36.45 C1.77 34.90 1.52 33.08 1.11 31.60 Z"
                    />
                  </Svg>
                </View>
                <View style={styles.rFoot}>
                  <Svg
                    viewBox="0 0 23.21 57.51"
                    preserveAspectRatio="none"
                    style={styles.footDarkerR}
                  >
                    <Defs>
                      <ClipPath id="clipPath22">
                        <Path
                          strokeWidth={0}
                          fill="rgba(153,152,152,1)"
                          isClosed={true}
                          d="M14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                        />
                      </ClipPath>
                    </Defs>
                    <Path
                      strokeWidth={0}
                      fill="rgba(153,152,152,1)"
                      isClosed={true}
                      d="M14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                      clipPath="url(#clipPath22)"
                    />
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      isClosed={true}
                      d="M4.67 43.81 C4.62 43.55 4.46 43.05 4.25 42.42 C4.25 42.42 4.79 42.26 4.79 42.26 L9.93 40.80 C9.93 40.80 22.04 37.92 22.04 37.92 C22.13 38.19 22.21 38.46 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.04 24.60 22.43 28.65 21.96 31.38 C21.96 31.38 2.06 35.80 2.06 35.80 C1.70 34.41 1.46 32.88 1.11 31.60 Z"
                      clipPath="url(#clipPath22)"
                    />
                  </Svg>
                  <Svg
                    viewBox="0 0 23.18 55.15"
                    preserveAspectRatio="none"
                    style={styles.footLighterR}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      isClosed={true}
                      d="M4.67 43.81 C4.62 43.55 4.46 43.05 4.25 42.42 C4.25 42.42 4.79 42.26 4.79 42.26 L9.93 40.80 C9.93 40.80 22.04 37.92 22.04 37.92 C22.13 38.19 22.21 38.46 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.04 24.60 22.43 28.65 21.96 31.38 C21.96 31.38 2.06 35.80 2.06 35.80 C1.70 34.41 1.46 32.88 1.11 31.60 Z"
                    />
                  </Svg>
                </View>
              </View>
              <View style={styles.activityIconCopy3}>
                <View style={styles.lFoot1}>
                  <Svg
                    viewBox="0 0 23.21 57.51"
                    preserveAspectRatio="none"
                    style={styles.footDarkL1}
                  >
                    <Defs>
                      <ClipPath id="clipPath23">
                        <Path
                          strokeWidth={0}
                          fill="rgba(153,152,152,1)"
                          isClosed={true}
                          d="M3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                        />
                      </ClipPath>
                    </Defs>
                    <Path
                      strokeWidth={0}
                      fill="rgba(153,152,152,1)"
                      isClosed={true}
                      d="M3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                      clipPath="url(#clipPath23)"
                    />
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      isClosed={true}
                      d="M4.67 43.81 C4.64 43.67 4.58 43.45 4.50 43.18 C4.50 43.18 4.85 43.08 4.85 43.08 L9.98 41.61 C9.98 41.61 22.21 38.50 22.21 38.50 C22.22 38.56 22.24 38.63 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.02 25.27 22.31 29.37 21.83 32.10 C21.83 32.10 2.25 36.45 2.25 36.45 C1.77 34.90 1.52 33.08 1.11 31.60 Z"
                      clipPath="url(#clipPath23)"
                    />
                  </Svg>
                  <Svg
                    viewBox="0 0 23.18 55.15"
                    preserveAspectRatio="none"
                    style={styles.footLightL1}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      isClosed={true}
                      d="M4.67 43.81 C4.64 43.67 4.58 43.45 4.50 43.18 C4.50 43.18 4.85 43.08 4.85 43.08 L9.98 41.61 C9.98 41.61 22.21 38.50 22.21 38.50 C22.22 38.56 22.24 38.63 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.02 25.27 22.31 29.37 21.83 32.10 C21.83 32.10 2.25 36.45 2.25 36.45 C1.77 34.90 1.52 33.08 1.11 31.60 Z"
                    />
                  </Svg>
                </View>
                <View style={styles.rFoot1}>
                  <Svg
                    viewBox="0 0 23.21 57.51"
                    preserveAspectRatio="none"
                    style={styles.footDarkerR1}
                  >
                    <Defs>
                      <ClipPath id="clipPath24">
                        <Path
                          strokeWidth={0}
                          fill="rgba(153,152,152,1)"
                          isClosed={true}
                          d="M14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                        />
                      </ClipPath>
                    </Defs>
                    <Path
                      strokeWidth={0}
                      fill="rgba(153,152,152,1)"
                      isClosed={true}
                      d="M14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                      clipPath="url(#clipPath24)"
                    />
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      isClosed={true}
                      d="M4.67 43.81 C4.62 43.55 4.46 43.05 4.25 42.42 C4.25 42.42 4.79 42.26 4.79 42.26 L9.93 40.80 C9.93 40.80 22.04 37.92 22.04 37.92 C22.13 38.19 22.21 38.46 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.04 24.60 22.43 28.65 21.96 31.38 C21.96 31.38 2.06 35.80 2.06 35.80 C1.70 34.41 1.46 32.88 1.11 31.60 Z"
                      clipPath="url(#clipPath24)"
                    />
                  </Svg>
                  <Svg
                    viewBox="0 0 23.18 55.15"
                    preserveAspectRatio="none"
                    style={styles.footLighterR1}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      isClosed={true}
                      d="M4.67 43.81 C4.62 43.55 4.46 43.05 4.25 42.42 C4.25 42.42 4.79 42.26 4.79 42.26 L9.93 40.80 C9.93 40.80 22.04 37.92 22.04 37.92 C22.13 38.19 22.21 38.46 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.04 24.60 22.43 28.65 21.96 31.38 C21.96 31.38 2.06 35.80 2.06 35.80 C1.70 34.41 1.46 32.88 1.11 31.60 Z"
                    />
                  </Svg>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.activityIcon}>
            <View style={styles.lFoot2}>
              <Svg
                viewBox="0 0 23.21 57.51"
                preserveAspectRatio="none"
                style={styles.footDarkL2}
              >
                <Defs>
                  <ClipPath id="clipPath25">
                    <Path
                      strokeWidth={0}
                      fill="rgba(153,152,152,1)"
                      isClosed={true}
                      d="M3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                    />
                  </ClipPath>
                </Defs>
                <Path
                  strokeWidth={0}
                  fill="rgba(153,152,152,1)"
                  isClosed={true}
                  d="M3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                  clipPath="url(#clipPath25)"
                />
                <Path
                  strokeWidth={0}
                  fill="rgba(255,255,255,1)"
                  isClosed={true}
                  d="M4.67 43.81 C4.64 43.67 4.58 43.45 4.50 43.18 C4.50 43.18 4.85 43.08 4.85 43.08 L9.98 41.61 C9.98 41.61 22.21 38.50 22.21 38.50 C22.22 38.56 22.24 38.63 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.02 25.27 22.31 29.37 21.83 32.10 C21.83 32.10 2.25 36.45 2.25 36.45 C1.77 34.90 1.52 33.08 1.11 31.60 Z"
                  clipPath="url(#clipPath25)"
                />
              </Svg>
              <Svg
                viewBox="0 0 23.18 55.15"
                preserveAspectRatio="none"
                style={styles.footLightL2}
              >
                <Path
                  strokeWidth={0}
                  fill="rgba(255,255,255,1)"
                  isClosed={true}
                  d="M4.67 43.81 C4.64 43.67 4.58 43.45 4.50 43.18 C4.50 43.18 4.85 43.08 4.85 43.08 L9.98 41.61 C9.98 41.61 22.21 38.50 22.21 38.50 C22.22 38.56 22.24 38.63 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.02 25.27 22.31 29.37 21.83 32.10 C21.83 32.10 2.25 36.45 2.25 36.45 C1.77 34.90 1.52 33.08 1.11 31.60 Z"
                />
              </Svg>
            </View>
            <View style={styles.rFoot2}>
              <Svg
                viewBox="0 0 23.21 57.51"
                preserveAspectRatio="none"
                style={styles.footDarkerR2}
              >
                <Defs>
                  <ClipPath id="clipPath26">
                    <Path
                      strokeWidth={0}
                      fill="rgba(153,152,152,1)"
                      isClosed={true}
                      d="M14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                    />
                  </ClipPath>
                </Defs>
                <Path
                  strokeWidth={0}
                  fill="rgba(153,152,152,1)"
                  isClosed={true}
                  d="M14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                  clipPath="url(#clipPath26)"
                />
                <Path
                  strokeWidth={0}
                  fill="rgba(255,255,255,1)"
                  isClosed={true}
                  d="M4.67 43.81 C4.62 43.55 4.46 43.05 4.25 42.42 C4.25 42.42 4.79 42.26 4.79 42.26 L9.93 40.80 C9.93 40.80 22.04 37.92 22.04 37.92 C22.13 38.19 22.21 38.46 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.04 24.60 22.43 28.65 21.96 31.38 C21.96 31.38 2.06 35.80 2.06 35.80 C1.70 34.41 1.46 32.88 1.11 31.60 Z"
                  clipPath="url(#clipPath26)"
                />
              </Svg>
              <Svg
                viewBox="0 0 23.18 55.15"
                preserveAspectRatio="none"
                style={styles.footLighterR2}
              >
                <Path
                  strokeWidth={0}
                  fill="rgba(255,255,255,1)"
                  isClosed={true}
                  d="M4.67 43.81 C4.62 43.55 4.46 43.05 4.25 42.42 C4.25 42.42 4.79 42.26 4.79 42.26 L9.93 40.80 C9.93 40.80 22.04 37.92 22.04 37.92 C22.13 38.19 22.21 38.46 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.04 24.60 22.43 28.65 21.96 31.38 C21.96 31.38 2.06 35.80 2.06 35.80 C1.70 34.41 1.46 32.88 1.11 31.60 Z"
                />
              </Svg>
            </View>
          </View>
          <View style={styles.activityIconCopy}>
            <View style={styles.lFoot3}>
              <Svg
                viewBox="0 0 23.21 57.51"
                preserveAspectRatio="none"
                style={styles.footDarkL3}
              >
                <Defs>
                  <ClipPath id="clipPath27">
                    <Path
                      strokeWidth={0}
                      fill="rgba(153,152,152,1)"
                      isClosed={true}
                      d="M3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                    />
                  </ClipPath>
                </Defs>
                <Path
                  strokeWidth={0}
                  fill="rgba(153,152,152,1)"
                  isClosed={true}
                  d="M3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                  clipPath="url(#clipPath27)"
                />
                <Path
                  strokeWidth={0}
                  fill="rgba(255,255,255,1)"
                  isClosed={true}
                  d="M4.67 43.81 C4.64 43.67 4.58 43.45 4.50 43.18 C4.50 43.18 4.85 43.08 4.85 43.08 L9.98 41.61 C9.98 41.61 22.21 38.50 22.21 38.50 C22.22 38.56 22.24 38.63 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.02 25.27 22.31 29.37 21.83 32.10 C21.83 32.10 2.25 36.45 2.25 36.45 C1.77 34.90 1.52 33.08 1.11 31.60 Z"
                  clipPath="url(#clipPath27)"
                />
              </Svg>
              <Svg
                viewBox="0 0 23.18 55.15"
                preserveAspectRatio="none"
                style={styles.footLightL3}
              >
                <Path
                  strokeWidth={0}
                  fill="rgba(255,255,255,1)"
                  isClosed={true}
                  d="M4.67 43.81 C4.64 43.67 4.58 43.45 4.50 43.18 C4.50 43.18 4.85 43.08 4.85 43.08 L9.98 41.61 C9.98 41.61 22.21 38.50 22.21 38.50 C22.22 38.56 22.24 38.63 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.02 25.27 22.31 29.37 21.83 32.10 C21.83 32.10 2.25 36.45 2.25 36.45 C1.77 34.90 1.52 33.08 1.11 31.60 Z"
                />
              </Svg>
            </View>
            <View style={styles.rFoot3}>
              <Svg
                viewBox="0 0 23.21 57.51"
                preserveAspectRatio="none"
                style={styles.footDarkerR3}
              >
                <Defs>
                  <ClipPath id="clipPath28">
                    <Path
                      strokeWidth={0}
                      fill="rgba(153,152,152,1)"
                      isClosed={true}
                      d="M14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                    />
                  </ClipPath>
                </Defs>
                <Path
                  strokeWidth={0}
                  fill="rgba(153,152,152,1)"
                  isClosed={true}
                  d="M14.53 57.51 C7.53 57.51 5.69 50.04 3.96 42.52 C3.94 42.47 3.93 42.40 3.91 42.33 C3.91 42.33 21.46 37.84 21.46 37.84 C21.69 38.86 22.31 41.25 22.43 41.93 C22.88 44.42 22.81 44.38 23.02 46.42 C23.02 50.40 22.54 54.36 19.91 55.98 C18.65 56.75 16.68 57.51 14.53 57.51 Z M1.14 31.05 C-1.14 21.75 -0.82 2.37 10.00 0.20 C17.45 -1.29 23.21 5.67 23.21 16.68 C23.06 24.21 22.43 28.28 21.95 31.01 C21.95 31.01 2.16 35.51 2.16 35.51 C1.75 34.05 1.51 32.41 1.14 31.05 Z"
                  clipPath="url(#clipPath28)"
                />
                <Path
                  strokeWidth={0}
                  fill="rgba(255,255,255,1)"
                  isClosed={true}
                  d="M4.67 43.81 C4.62 43.55 4.46 43.05 4.25 42.42 C4.25 42.42 4.79 42.26 4.79 42.26 L9.93 40.80 C9.93 40.80 22.04 37.92 22.04 37.92 C22.13 38.19 22.21 38.46 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.04 24.60 22.43 28.65 21.96 31.38 C21.96 31.38 2.06 35.80 2.06 35.80 C1.70 34.41 1.46 32.88 1.11 31.60 Z"
                  clipPath="url(#clipPath28)"
                />
              </Svg>
              <Svg
                viewBox="0 0 23.18 55.15"
                preserveAspectRatio="none"
                style={styles.footLighterR3}
              >
                <Path
                  strokeWidth={0}
                  fill="rgba(255,255,255,1)"
                  isClosed={true}
                  d="M4.67 43.81 C4.62 43.55 4.46 43.05 4.25 42.42 C4.25 42.42 4.79 42.26 4.79 42.26 L9.93 40.80 C9.93 40.80 22.04 37.92 22.04 37.92 C22.13 38.19 22.21 38.46 22.25 38.70 C22.34 39.24 22.26 38.78 22.41 39.57 C22.86 42.06 22.78 42.03 22.99 44.07 C22.99 48.04 22.51 52.00 19.88 53.61 C18.62 54.39 16.65 55.15 14.50 55.15 C7.50 55.15 6.41 51.33 4.67 43.81 Z M1.11 31.60 C-1.17 22.31 -0.72 2.35 10.10 0.19 C17.55 -1.30 23.18 6.23 23.18 17.24 C23.04 24.60 22.43 28.65 21.96 31.38 C21.96 31.38 2.06 35.80 2.06 35.80 C1.70 34.41 1.46 32.88 1.11 31.60 Z"
                />
              </Svg>
            </View>
          </View>
        </View>
        <Stop1 style={styles.stop} />
        <Text style={styles.tapStopToEndData}>
          Tap Stop to end data collection
        </Text>
        <View style={styles.header}>
          <View style={styles.rectangle7} />
          <Image
            source={require("../assets/953f88ea27175375d51167f2e35e70b3aa71adc3.png")}
            style={styles.kinetikosIconTransparent85Balck}
          />
          <Svg
            viewBox="0 0 360.90 2.90"
            preserveAspectRatio="none"
            style={styles.lineCopy}
          >
            <Path
              strokeWidth={0.45}
              fill="transparent"
              stroke="rgba(179,179,179,1)"
              isClosed={false}
              d="M0.23 1.23 L360.23 1.23 "
            />
          </Svg>
          <Text style={styles.activityMonitor}>Activity Monitor</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push("HomePage");
            }}
          >
            <Svg
              viewBox="0 0 11.46 20.43"
              preserveAspectRatio="none"
              style={styles.combinedShape}
            >
              <Path
                strokeWidth={0}
                fill="rgba(86,110,190,1)"
                isClosed={true}
                d="M-0.54 9.92 L0.39 8.96 L8.65 0.39 L9.58 -0.57 L11.43 1.36 L10.51 2.32 L3.17 9.92 L3.70 10.47 L11.08 18.11 L12.00 19.07 L10.15 21.00 L9.22 20.03 L1.85 12.39 L0.92 11.43 L0.92 11.43 L-0.54 9.92 Z"
              />
            </Svg>
            <Text style={styles.homePage}>Home Page</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text} allowFontScaling={false}>
          This feature allows us to record your movements and activity. You do
          not need to change your normal daily routine. Our software
          will\nmonitor your motions and the data will be sent directly to
          your\nclinician.
        </Text>
        <Center horizontal>
          <Text style={styles.text2}>Stop</Text>
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  activity: {
    position: "absolute",
    top: "20.47%",
    left: "5.56%",
    height: "28.91%",
    width: "88.89%"
  },
  activityIconCopy2: {
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
    overflow: "hidden",
    backgroundColor: "transparent"
  },
  activityIconCopy21: {
    position: "absolute",
    top: "55.68%",
    left: "40.00%",
    height: "53.51%",
    width: "19.38%"
  },
  lFoot: {
    position: "absolute",
    top: "-1.04%",
    left: "30.52%",
    height: "58.59%",
    width: "38.71%",
    transform: [
      {
        rotate: "53deg"
      }
    ]
  },
  footDarkL: {
    position: "absolute",
    height: "99.15%",
    width: "96.69%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  footLightL: {
    position: "absolute",
    height: "95.08%",
    width: "96.57%",
    top: "0.92%",
    left: "-19.05%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rFoot: {
    position: "absolute",
    top: "40.05%",
    left: "29.02%",
    height: "58.59%",
    width: "38.71%",
    transform: [
      {
        scaleX: -1
      },
      {
        rotate: "-43deg"
      }
    ]
  },
  footDarkerR: {
    position: "absolute",
    height: "99.15%",
    width: "96.69%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  footLighterR: {
    position: "absolute",
    height: "95.08%",
    width: "96.57%",
    top: "-2.43%",
    left: "15.88%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  activityIconCopy3: {
    position: "absolute",
    top: "84.32%",
    left: "19.38%",
    height: "53.51%",
    width: "19.38%"
  },
  lFoot1: {
    position: "absolute",
    top: "-1.04%",
    left: "30.52%",
    height: "58.59%",
    width: "38.71%",
    transform: [
      {
        rotate: "53deg"
      }
    ]
  },
  footDarkL1: {
    position: "absolute",
    height: "99.15%",
    width: "96.69%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  footLightL1: {
    position: "absolute",
    height: "95.08%",
    width: "96.57%",
    top: "0.92%",
    left: "-19.05%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rFoot1: {
    position: "absolute",
    top: "40.05%",
    left: "29.02%",
    height: "58.59%",
    width: "38.71%",
    transform: [
      {
        scaleX: -1
      },
      {
        rotate: "-43deg"
      }
    ]
  },
  footDarkerR1: {
    position: "absolute",
    height: "99.15%",
    width: "96.69%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  footLighterR1: {
    position: "absolute",
    height: "95.08%",
    width: "96.57%",
    top: "-2.43%",
    left: "15.88%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  activityIcon: {
    position: "absolute",
    top: "0.00%",
    left: "78.13%",
    height: "53.51%",
    width: "19.38%"
  },
  lFoot2: {
    position: "absolute",
    top: "-1.04%",
    left: "30.52%",
    height: "58.59%",
    width: "38.71%",
    transform: [
      {
        rotate: "53deg"
      }
    ]
  },
  footDarkL2: {
    position: "absolute",
    height: "99.15%",
    width: "96.69%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  footLightL2: {
    position: "absolute",
    height: "95.08%",
    width: "96.57%",
    top: "0.92%",
    left: "-19.05%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rFoot2: {
    position: "absolute",
    top: "40.05%",
    left: "29.02%",
    height: "58.59%",
    width: "38.71%",
    transform: [
      {
        scaleX: -1
      },
      {
        rotate: "-43deg"
      }
    ]
  },
  footDarkerR2: {
    position: "absolute",
    height: "99.15%",
    width: "96.69%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  footLighterR2: {
    position: "absolute",
    height: "95.08%",
    width: "96.57%",
    top: "-2.43%",
    left: "15.88%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  activityIconCopy: {
    position: "absolute",
    top: "28.65%",
    left: "59.38%",
    height: "53.51%",
    width: "19.38%"
  },
  lFoot3: {
    position: "absolute",
    top: "-1.04%",
    left: "30.52%",
    height: "58.59%",
    width: "38.71%",
    transform: [
      {
        rotate: "53deg"
      }
    ]
  },
  footDarkL3: {
    position: "absolute",
    height: "99.15%",
    width: "96.69%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  footLightL3: {
    position: "absolute",
    height: "95.08%",
    width: "96.57%",
    top: "0.92%",
    left: "-19.05%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rFoot3: {
    position: "absolute",
    top: "40.05%",
    left: "29.02%",
    height: "58.59%",
    width: "38.71%",
    transform: [
      {
        scaleX: -1
      },
      {
        rotate: "-43deg"
      }
    ]
  },
  footDarkerR3: {
    position: "absolute",
    height: "99.15%",
    width: "96.69%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  footLighterR3: {
    position: "absolute",
    height: "95.08%",
    width: "96.57%",
    top: "-2.43%",
    left: "15.88%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stop: {
    position: "absolute",
    top: "22.03%",
    left: "8.61%",
    height: "18.44%",
    width: "32.78%",
    backgroundColor: "transparent"
  },
  tapStopToEndData: {
    position: "absolute",
    top: "51.72%",
    left: "5.56%",
    height: "5.94%",
    width: "88.89%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "Aller-Bold"
  },

  header: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "15.16%",
    width: "100.00%"
  },
  rectangle7: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "97.94%",
    width: "100.00%",
    backgroundColor: "rgba(248,248,248,1)"
  },
  kinetikosIconTransparent85Balck: {
    position: "absolute",
    top: "36.08%",
    left: "85.00%",
    height: "46.39%",
    width: "10.00%",
    backgroundColor: "transparent"
  },
  lineCopy: {
    position: "absolute",
    height: "2.53%",
    width: "100.13%",
    top: "97.71%",
    left: "-0.06%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  activityMonitor: {
    position: "absolute",
    top: "46.39%",
    left: "4.44%",
    height: "48.45%",
    width: "80.56%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 36,
    fontFamily: "Aller-Bold"
  },
  button: {
    position: "absolute",
    top: "8.25%",
    left: "2.22%",
    height: "24.74%",
    width: "40.00%"
  },
  combinedShape: {
    position: "absolute",
    top: 1.57,
    left: 0.54,
    right: 132,
    bottom: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  homePage: {
    position: "absolute",
    top: "8%",
    left: "12.41%",
    height: "88%",
    width: "86.9%",
    backgroundColor: "transparent",
    color: "rgba(86,110,190,1)",
    fontSize: 20,
    fontFamily: "Aller"
  },
  text: {
    top: "60.94%",
    left: "5.83%",
    width: 317,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontFamily: "Aller-Light",
    lineHeight: 25,
    letterSpacing: 0.1,
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  },
  text2: {
    top: "54.69%",
    width: 317,
    height: "5.78%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontFamily: "Aller-Bold",
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  }
});

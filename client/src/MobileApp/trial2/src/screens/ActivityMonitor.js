import React, { Component } from "react";
import { Svg, Defs, ClipPath, Path } from "react-native-svg";
// import { Center } from "@builderx/utils";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";

export default class ActivityMonitor extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.activity}>
          <View style={styles.activityIconCopy2}>
            <ImageBackground
              style={styles.mask}
              source={require("../assets/GradientActivity.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.15"},"gradientType":"LinearGradient","id":"F21F3791-3E8B-4EF6-A54B-E759E73C49E5","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(138,187,231,1)","style":{}},{"offset":1,"stopColor":"rgba(96,164,226,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
            >
            <Image
                style={styles.manyFeet}
                source={require("../assets/ManyFeet.png")}
              />
            </ImageBackground>
          </View>
        </View>
        <Image
          style={styles.play}
          source={require("../assets/Play.png")}
        />
        <Text style={styles.tapPlayToCollect}>
          Tap Play to collect activity data
        </Text>
        <Text style={styles.thisFeatureAllows} allowFontScaling={false}>
          This feature allows us to record your movements and activity. You do
          not need to change your normal daily routine. Our software will
          monitor your motions and the data will be sent directly to your
          clinician.
        </Text>
        
        
        <View style={styles.header}>
          <View style={styles.HeaderContainer} />
          <Image
            style={styles.kIconBlack}
            source={require("../assets/KIconBlack.png")}
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
            style={styles.homeNav}
            onPress={() => {
              this.props.navigation.push("HomePage");
            }}
          >
          </TouchableOpacity>
        </View>
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
  tapPlayToCollect: {
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
  thisFeatureAllows: {
    position: "absolute",
    top: "60.94%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "Aller-Light",
    width: "88.89%",
    lineHeight: 25,
    letterSpacing: 0.1,
    left: "5.56%"
  },
   
  play: {
    top: 141,
    left: 31,
    width: 118,
    height: 118,
    position: "absolute"
  },

  
  manyFeet: {
    top: -3,
    left: 83,
    width: 248,
    height: 255,
    position: "absolute"
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

  header: {
    position: "absolute",
    top: "0%",
    left: "0%",
    height: "15.16%",
    width: "100%"
  },

  HeaderContainer: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "97.94%",
    width: "100.00%",
    backgroundColor: "rgba(248,248,248,1)"
  },

  lineCopy: {
    position: "absolute",
    height: "2.53%",
    width: "100.13%",
    top: "97.71%",
    left: "0%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },

  kIconBlack: {
    top: 34,
    left: 336,
    width: 36,
    height: 46,
    position: "absolute"
  },


  homeNav: {
    top: 8,
    left: 8,
    width: 144,
    height: 23,
    position: "absolute"
  },

});

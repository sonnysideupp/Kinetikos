import React, { Component } from "react";
import Setting from "../symbols/Settings";
import User from "../symbols/User.js";
import { Svg, Path } from "react-native-svg";
import {
  AsyncStorage,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class HomePage extends Component {
  static navigationOptions = {
    title: "Home",
    header: null
}



  render() {

 var {navigate} = this.props.navigation;

    return (

      <View style={styles.root}>

        <View style={styles.logout}>
        <TouchableOpacity onPress= {async() => {
          this.signOut()
          navigate("First")}}>
          <Image
            style={styles.LogOutContainer}
            source={require("../assets/GradientDarkBlueBtn.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"8FF95A09-FDA1-4230-8E57-EF958F62C253","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(129,150,201,1)","style":{}},{"offset":1,"stopColor":"rgba(86,110,190,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.text}>Log Out</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.settings}>
        <TouchableOpacity onPress= {async() => {
          navigate("Eighth")}}>
          <Image
            style={styles.SettingsContainer}
            source={require("../assets/GradientSettings.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.14"},"gradientType":"LinearGradient","id":"820C6536-B8A0-4824-A202-9091D0582C1F","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(146,223,178,1)","style":{}},{"offset":1,"stopColor":"rgba(123,214,160,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.settings1}>Settings</Text>
          <Image
            style={styles.settings2}
            source={require("../assets/Settings.png")}
          />
          </TouchableOpacity>
        </View>


        <View style={styles.profile}>
        <TouchableOpacity onPress= {async() => {
          navigate("Eleventh")}}>
          <Image
            style={styles.ProfileContainer}
            source={require("../assets/GradientProfile.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"1104293A-226E-409B-941F-D1009305AD23","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(106,225,212,1)","style":{}},{"offset":1,"stopColor":"rgba(70,205,182,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.myProfile}>My Profile</Text>
          <Image
            style={styles.user}
            source={require("../assets/User.png")}
          />
         </TouchableOpacity>
        </View>


        <View style={styles.questionnaire}>
        <TouchableOpacity onPress= {async() => {
          navigate("Fourteenth")}}>
          <Image
            style={styles.questionContainer}
            source={require("../assets/GradientQuestion.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.10"},"gradientType":"LinearGradient","id":"11D407E8-F25B-4216-B420-F3A69B34CFE0","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(124,204,227,1)","style":{}},{"offset":1,"stopColor":"rgba(84,175,200,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"0.98"}}*/
          />
          <Text style={styles.questionnaire1}>Questionnaire</Text>
          <Image
            style={styles.question}
            source={require("../assets/Question.png")}
            />
          {/* <Question style={styles.question} /> */}
          </TouchableOpacity>
        </View>

      <View style={styles.activity}>
      <TouchableOpacity onPress= {async() => {
          navigate("Seventh")}}>
          <Image
            style={styles.ActivityContainer}
            source={require("../assets/GradientActivityBtn.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.15"},"gradientType":"LinearGradient","id":"77BA93AB-6ABC-430E-9FB9-3BA0260989E2","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(138,187,231,1)","style":{}},{"offset":1,"stopColor":"rgba(96,164,226,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          <Text style={styles.activityMonitor}>Activity Monitor</Text>
          <Image
            style={styles.footprint}
            source={require("../assets/Footprint.png")}
            />
        </TouchableOpacity>
        </View>

        
        <View style={styles.header} /*locked*/>
          <View style={styles.HeaderContainer} />
          <Image
            source={require("../assets/KIconBlack.png")}
            style={styles.kIconBlack}
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
          <Text style={styles.homePage}>Home Page</Text>
        </View>
      </View>
    );
  }
  signOut = async() => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("email");
    await AsyncStorage.removeItem("name");
    
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 0
  },
  settings: {
    position: "absolute",
    top: "69%",
    left: "5.56%",
    height: "15%",
    width: "88.89%"
    // height: 97,
    // width: 320,
    // marginLeft: 6,
    // marginBottom: 5,
    // marginRight: 6,
    // marginTop: 5
  },
 SettingsContainer: {
    // position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent"
  },

  // SettingsImage: {
  //   top: 7,
  //   left: 260,
  //   width: 85,
  //   height: 84,
  //   position: "absolute"
  // },
  
  settings1: {
    position: "absolute",
    top: "8.25%",
    left: "3.13%",
    height: "55.67%",
    width: "72.19%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    fontFamily: "Aller"
  },
  settings2: {
    top: 7,
    left: 258,
    width: 85,
    height: 84,
    position: "absolute",
    // position: "absolute",
    // top: "7.22%",
    // left: "70.31%",
    // height: "86.60%",
    // width: "26.56%",
    backgroundColor: "transparent"
  },
  
  profile: {
    position: "absolute",
    top: "51.5%",
    left: "5.56%",
    height: "15%",
    width: "88.89%"
    // height: 97,
    // width: 320,
    // marginLeft: 6,
    // marginBottom: 5,
    // marginRight: 6,
    // marginTop: 5
  },

  ProfileContainer: {
    // position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent"
  },
  myProfile: {
    position: "absolute",
    top: "11.34%",
    left: "3.13%",
    height: "55.67%",
    width: "72.19%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    fontFamily: "Aller"
  },
  user: {
    top: 6,
    left: 265,
    width: 69,
    height: 86,
    position: "absolute",
    // position: "absolute",
    // top: "6.19%",
    // left: "73.75%",
    // height: "86.60%",
    // width: "20.94%",
    backgroundColor: "transparent"
  },

  // UserImage: {
  //   top: 6,
  //   left: 265,
  //   width: 69,
  //   height: 86,
  //   position: "absolute",
  //   backgroundColor: "transparent"
  // }, 

  questionnaire: {
    position: "absolute",
    top: "34%",
    left: "5.56%",
    height: "15%",
    width: "88.89%"
    // height: 97,
    // width: 320,
    // marginLeft: 6,
    // marginBottom: 5,
    // marginRight: 6
  },
  questionContainer: {
    // position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent"
  },
  questionnaire1: {
    position: "absolute",
    top: "10.31%",
    left: "2.81%",
    height: "55.67%",
    width: "72.19%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    fontFamily: "Aller"
  },
  question: {
    top: 9.58,
    left: 270,
    width: 56,
    height: 79,
    position: "absolute",
    // position: "absolute",
    // top: "9.28%",
    // left: "76.88%",
    // height: "82.47%",
    // width: "17.19%",
    backgroundColor: "transparent"
  },

  // QuestionImage: {
  //   top: 9.58,
  //   left: 270,
  //   width: 56,
  //   height: 79,
  //   position: "absolute",
  //   backgroundColor: "transparent"
  // },

  activity: {
    position: "absolute",
    top: "17%",
    left: "5.56%",
    height: "15%",
    width: "88.89%"
  },

  // button: {
  //   position: "absolute",
  //   top: "17%",
  //   left: "5.56%",
  //   height: "15%",
  //   width: "88.89%"
  //   // height: 100,
  //   // width: 320,
  //   // margin: 10
  // },


  ActivityContainer: {
    // position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "97.98%",
    width: "100.00%",
    borderRadius: 8,
    backgroundColor: "transparent"
  },
  activityMonitor: {
    position: "absolute",
    top: "8.08%",
    left: "3.13%",
    height: "54.55%",
    width: "79.38%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    fontFamily: "Aller"
  },
  footprint: {
    top: -1,
    left: 275,
    width: 62,
    height: 102,
    position: "absolute",
    // position: "absolute",
    // top: "0.00%",
    // left: "78.13%",
    // height: "100.00%",
    // width: "19.38%",
    backgroundColor: "transparent"
  },

  header: {
    height: 97,
    width: 360
  },
  HeaderContainer: {
    position: "absolute",
    top: "0.00%",
    left: "-50%",
    height: "97.94%",
    width: "200.00%",
    backgroundColor: "rgba(248,248,248,1)"
  },
  kIconBlack: {
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
    width: "200%",
    top: "97.94%",
    left: "-50%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  homePage: {
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
  logout: {
    position: "absolute",
    top: "90%",
    // left: "35%",
    // height: "5%",
    // width: "40%"

    
    // width: 132,
    // height: 30,
    // alignSelf: "center",
    // marginTop: 30
  },
  LogOutContainer: {
    top: 0,
    left: 0,
    bottom: 0,
    width: 132,
    height: 38,
    // position: "absolute",
    // backgroundColor: "transparent",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8
  },
  text: {
    top: 5,
    bottom: 5,
    // left: "19%",
    width: 130,
    height: 40,
    position: "absolute",
    alignSelf: "center",
    // backgroundColor: "transparent",
    marginBottom: 0,
    padding: 0,
    fontSize: 20,
    fontFamily: "Aller-Bold",
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  }
});
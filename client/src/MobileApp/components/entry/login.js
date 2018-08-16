import React from "react";
import { Svg, Path } from "react-native-svg";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
  Image,
  ImageBackground
} from "react-native";

import { FormLabel, FormInput } from "react-native-elements";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        name
      }
    }
  }
`;

export default class SignInScreen extends React.Component {

  static navigationOptions = {
   
    header: null
}

  state = {
    email: "",
    password: "",
    error: ""
  };
  render() {

    var token
    var {navigate} = this.props.navigation;

    async function getToken() {
      try{
       
  token =  await  AsyncStorage.getItem("token");
  

   }
   catch (err) {
     console.warn(err)
   }
 
 }

 function gotohome(){
  navigate("Fifth");
}


 (async function() {
  await  getToken();
  if(token !== null)
  {
    gotohome()
  };
})();




  return (

    <View style={styles.root}>
      <View style={styles.header}>
            <View style={styles.headerContainer} />
            <Image
            style={styles.kIconColor}
            source={require("../assets/KIconColor.png")}
            />
            <Text style={styles.homePage}>Welcome to Kinetikos Mobile</Text>
            <Svg
              viewBox="0 0 360.90 1.00"
              preserveAspectRatio="none"
              style={styles.lineCopy}
            >
              <Path
                strokeWidth={0.45}
                fill="transparent"
                stroke="rgba(179,179,179,1)"
                isClosed={false}
                d="M0.23 0.47 L360.23 0.47 "
              />
            </Svg>
          </View>
      
      <Mutation mutation={LOGIN}>
        {login => {
          return (
            
            <KeyboardAvoidingView style={styles.container} behavior="padding" enable>
            <View >
              <View>
                <Text style={styles.errorText}>{this.state.error}</Text>
                
                {/* <View style={{ alignItems: "center", marginBottom: 20 }}>
                  <Text style={{ color: "#191970", fontSize: 24 }}>
                    Log in to your account
                  </Text>
                </View> */}

              <View style={styles.email}>
              <View style={styles.emailContainer} />
                <FormLabel labelStyle={styles.emailAddress}>Email</FormLabel>
                <FormInput
                style={styles.inputForm}
                  value={this.state.email}
                  onChangeText={text => {
                    this.setState({ email: text });
                  }}
                />
                </View>

              <View style={styles.password}>
              <View style={styles.passwordContainer} />
                <FormLabel labelStyle={styles.emailAddress}>Password</FormLabel>
                <FormInput
                  secureTextEntry={true}
                  type="password"
                  value={this.state.password}
                  onChangeText={text => {
                    this.setState({ password: text });
                  }}
                />
              </View>

              {/* <View style={styles.centerContainer}>
                <View style={styles.buttonContainer}> */}
                 
                 <View style={styles.signIn}>
                  <Image
                    style={styles.signinContainer}
                    source={require("../assets/GradientLogin.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.00"},"gradientType":"LinearGradient","id":"177D61C2-EDB4-4657-ABF8-3AA9E5C4B6AA","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(3,159,206,1)","style":{}},{"offset":1,"stopColor":"rgba(8,174,182,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
                  />
                  <TouchableOpacity
                    style={styles.signinButton}
                    onPress={() => this._signInAsync(login)}
                  >
                    <Text style={styles.signIn1}>Sign In!</Text>
                    {/* <Text style={styles.buttonText}>Login!</Text> */}
                  </TouchableOpacity>
                </View>

 {/* <View style={styles.buttonContainer}>
  <TouchableOpacity
                    style={styles.signinButton}
                    onPress={() => this.props.navigation.navigate("Sixth")}
                  >
                    <Text style={styles.buttonText}>Sign Up!</Text>
                  </TouchableOpacity>

  </View> */}

              </View>
            </View>
            </KeyboardAvoidingView>
          );
        }}
      </Mutation>
      </View>
    );
  }

  _signInAsync = async login => {
    this.setState({ error: "" });
    try {
      const { data } = await login({
        variables: {
          email: this.state.email,
          password: this.state.password
        }
      });
      this.setState({ email: "", password: "" });
      await AsyncStorage.setItem("token", data.login.token);
      await AsyncStorage.setItem("email", data.login.user.email);
      await AsyncStorage.setItem("name", data.login.user.name);
      this.props.navigation.navigate("Fifth");
    } catch (e) {
      console.log(e);
      this.setState({
        email: "",
        password: "",
        error: `${e.message.replace('GraphQL error:', ' ')}`,
      });
    }
  };
}

const styles = StyleSheet.create({
  
  root: {
    backgroundColor: "white",
    flex: 1
  },
  header: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "36.25%",
    width: "100.00%"
  },
  headerContainer: {
    position: "absolute",
    top: "0%",
    left: "0%",
    height: "89.66%",
    width: "100%",
    backgroundColor: "rgba(248,248,248,1)"
  },
  homePage: {
    position: "absolute",
    top: "53.88%",
    left: "9.72%",
    height: "32.33%",
    width: "80.56%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 36,
    fontFamily: "Aller-Bold"
  },
  lineCopy: {
    position: "absolute",
    height: "0.24%",
    width: "100.13%",
    top: "99.47%",
    left: "-0.06%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  signIn: {
    position: "absolute",
    top: "83.91%",
    left: "9.44%",
    height: "10.16%",
    width: "81.11%"
  },
  signinContainer: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "transparent"
  },
  signIn1: {
    position: "absolute",
    top: "20%",
    left: "0%",
    height: "61.54%",
    width: "100%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    fontFamily: "Aller-Bold"
  },


  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  centerContainer: {
    alignItems: "center"
  },
  
  
  errorText: {
    padding: 20,
    textAlign: "center",
    color: "red"
  },
  label: {
    color: "#0000CD",
    fontSize: 18
  },
  buttonContainer: {
    justifyContent: "center",
    width: "75%",
    paddingTop: 50,
    flexDirection: "row"
  },
  
  email: {
    position: "absolute",
    top: "39.84%",
    left: "10.83%",
    height: "11.09%",
    width: "78.33%"
  },
  emailContainer: {
    position: "absolute",
    top: "36.62%",
    left: "0.00%",
    height: "70.42%",
    width: "100.00%",
    borderWidth: 0.55,
    borderColor: "rgba(74,74,74,1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    borderBottomLeftRadius: 11,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowRadius: 1,
    shadowOpacity: 0.72,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 3
  },
  emailAddress: {
    position: "absolute",
    top: "0.00%",
    left: "3.19%",
    height: 24,
    width: "69.15%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "Aller"
  },
  password: {
    position: "absolute",
    top: "59.22%",
    left: "10.83%",
    height: "11.09%",
    width: "78.33%"
  },
  passwordContainer: {
    position: "absolute",
    top: "36.62%",
    left: "0.00%",
    height: "70.42%",
    width: "100.00%",
    borderWidth: 0.55,
    borderColor: "rgba(74,74,74,1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    borderBottomLeftRadius: 11,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowRadius: 1,
    shadowOpacity: 0.72,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 3
  },
  password1: {
    position: "absolute",
    top: "0.00%",
    left: "3.19%",
    height: 24,
    width: "63.30%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "Aller"
  },
  kIconColor: {
    top: 17,
    left: 138,
    width: 84,
    height: 108,
    position: "absolute"
  }
});
  
  // signinButton: {
  //   width: "90%",
  //   borderRadius: 15,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "white",
  //   borderWidth: 1,
  //   borderStyle: "solid",
  //   borderColor: "#000080",
  //   paddingTop: 7.5,
  //   paddingBottom: 7.5
  // },
  // buttonText: {
  //   color: "#000080",
  //   fontSize: 16
  // },
  // signupButton: {
  //   width: "45%",
  //   borderRadius: 15,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderWidth: 3,
  //   borderStyle: "solid",
  //   borderColor: "#000080",
  //   paddingTop: 7.5,
  //   paddingBottom: 7.5
  // },
  // icon: {
      
  // }
// });
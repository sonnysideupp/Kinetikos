import React from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { FormLabel, FormInput } from "react-native-elements";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const SIGNUP = gql`
  mutation signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
      user {
        id
        email
        name
      }
    }
  }
`;

export default class SignUpScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
      return {
    title: "Please sign up",
    headerRight: (

        <TouchableOpacity onPress= {async() => {navigation.navigate("First")}}>
          <Image
            source={require("../../home-icon.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.50","y":"0.14"},"gradientType":"LinearGradient","id":"A89BEB24-5A8C-449D-A203-D7DBC980A82C","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(146,223,178,1)","style":{}},{"offset":1,"stopColor":"rgba(123,214,160,1)","style":{}}],"style":{},"to":{"x":"0.50","y":"1.00"}}*/
          />
          </TouchableOpacity>

      ),
    }
  };
  state = {
    email: "",
    password: "",
    name: "",
    error: ""
  };


  render() {
    return (
      <Mutation mutation={SIGNUP}>
        {signup => {
          return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enable>
            <View style={styles.container}>
            
              
                <View style={styles.container}>
                <Text style={styles.errorText}>{this.state.error}</Text>
                <View style={{ alignItems: "center", marginBottom: 20}}>
                  <Text style={{ color: "#191970", fontSize: 26 }}>
                    Make an account
                  </Text>
                </View>
               
                <FormLabel labelStyle={styles.label}>Name</FormLabel>
                <FormInput
                underlineColorAndroid="black"
                style={styles.inputForm}
                  value={this.state.name}
                  onChangeText={text => {
                    this.setState({ name: text });
                  }}
                />

                <FormLabel labelStyle={styles.label}>Email</FormLabel>
                <FormInput
                underlineColorAndroid="black"
                style={styles.inputForm}
                  value={this.state.email}
                  onChangeText={text => {
                    this.setState({ email: text });
                  }}
                />
              
                <FormLabel labelStyle={styles.label}>Password</FormLabel>
                <FormInput
                underlineColorAndroid="black"
                  secureTextEntry={true}
                  type="password"
                  value={this.state.password}
                  onChangeText={text => {
                    this.setState({ password: text });
                  }}
                />
                </View>
              

              <View style={styles.centerContainer}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.signupButton}
                    onPress={() => this._signUpAsync(signup)}
                  >
                    <Text style={styles.buttonText}>Sign Up!</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
             </View>
             </KeyboardAvoidingView>
          );
        }}
      </Mutation>
     
    );
  }

  _signUpAsync = async signup => {
    this.setState({ error: "" });
    try {
      const { data } = await signup({
        variables: {
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
        }
      });
      this.setState({ email: "", password: "" });
      await AsyncStorage.setItem("token", data.signup.token);
      await AsyncStorage.setItem("email", data.signup.user.email);
      await AsyncStorage.setItem("name", data.signup.user.name);
      this.props.navigation.navigate("First");
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
  container: {
    backgroundColor: '#F5FCFF',
   
  },
  avoidview:{
    flex: 1,
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
  buttonText: {
    color: "#000080",
    fontSize: 18
  },
  signupButton: {
    width: "90%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "#000080",
    paddingTop: 7.5,
    paddingBottom: 7.5
  }
});
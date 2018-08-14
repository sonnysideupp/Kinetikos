import React from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
  Image
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


  componentWillMount(){

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


  }
  render() {




    return (
      
      <Mutation mutation={LOGIN}>
        {login => {
          return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enable>
            <View >
              <View>
                <Text style={styles.errorText}>{this.state.error}</Text>
                <View style={{ alignItems: "center", marginBottom: 20 }}>
                  <Text style={{ color: "#191970", fontSize: 24 }}>
                    Log in to your account
                  </Text>
                </View>

                <FormLabel labelStyle={styles.label}>Email</FormLabel>
                <FormInput
                style={styles.inputForm}
                  value={this.state.email}
                  onChangeText={text => {
                    this.setState({ email: text });
                  }}
                />

                <FormLabel labelStyle={styles.label}>Password</FormLabel>
                <FormInput
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
                    style={styles.signinButton}
                    onPress={() => this._signInAsync(login)}
                  >
                    <Text style={styles.buttonText}>Login!</Text>
                  </TouchableOpacity>
                
                </View>

 <View style={styles.buttonContainer}>
  <TouchableOpacity
                    style={styles.signinButton}
                    onPress={() => this.props.navigation.navigate("Sixth")}
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
  signinButton: {
    width: "90%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000080",
    paddingTop: 7.5,
    paddingBottom: 7.5
  },
  buttonText: {
    color: "#000080",
    fontSize: 16
  },
  signupButton: {
    width: "45%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "#000080",
    paddingTop: 7.5,
    paddingBottom: 7.5
  },
  icon: {
      
  }
});
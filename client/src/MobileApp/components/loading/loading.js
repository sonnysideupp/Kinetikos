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


export default class Loading extends React.Component {

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
  }
  else{
    navigate("First")  ;
}})();


  }
  render() {




    return (
      <View>
          <Text>
              Loading
              </Text>
              
          </View>
    )
}
}
//use query for question type
import React, { Component } from "react"
import RadioForm, {
  RadioButton,
  RadioButtonInput
} from "react-native-simple-radio-button"
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Svg, Path } from "react-native-svg"
import { Query, ApolloProvider } from "react-apollo"
import { FormLabel, FormInput } from "react-native-elements"
import gql from "graphql-tag"
import { AsyncStorage } from "react-native"
import { CheckBox } from "react-native-elements"
import SelectMultiple from "react-native-select-multiple"

const GET_USER = gql`
  query {
    me {
      name
      email
      birthday
      idtype
    }
  }
`

export default class Profile extends Component {
  state = {
    value: 0,
    number: 0
  }

  render() {
    var { navigate } = this.props.navigation

    return (
      <View style={styles.root}>




    <TouchableOpacity
          style={styles.signinButton}
          onPress={async () => {
            await navigate("Fifth")
          }}
        >
          <Text style={styles.signinButtonText}>Go Home!</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.signinButton}
          onPress={async () => {
            await navigate("Thirdteen")
          }}
        >
          <Text style={styles.signinButtonText}>Clinician Info!</Text>
        </TouchableOpacity>
        <Query query={GET_USER} key="altTextQuery">
          {({ loading, error, data, refetch }) => {
            if (loading) {
              return <Text>Loading</Text>
            }
            if (error) {
              return <Text>`Error! ${error.message}`</Text>
            }

            return (
              <View style={{ justifyContent: "center" }}>
                <Text>Name: {data.me.name}</Text>
                <Text>email: {data.me.email}</Text>
                <Text>date of birth: {data.me.birthday}</Text>
                <Text>ID Number: {data.me.idtype}</Text>
              </View>
            )
          }}
        </Query>

      
    

        <View style={styles.header} /*locked*/>
          <View style={styles.HeaderContainer} />

          <Image
            source={require("../../trial2/src/assets/KIconBlack.png")}
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
          <Text style={styles.homePage}>Profile</Text>
        </View>
      </View>
    )
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
  root1: {
    backgroundColor: "white",
    flex: 1
  },
  header: {
    height: 97,
    width: "100%"
  },
  kIconBlack: {
    top: "36.08%",
    left: "85.00%",
    height: "50.39%",
    width: "10.00%",
    backgroundColor: "transparent"
  },
  HeaderContainer: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "97.94%",
    width: "100.00%",
    backgroundColor: "rgba(248,248,248,1)"
  },
  question: {
    fontSize: 25,
    textAlign: "center",
    color: "#00008b"
  },
  radio: {
    width: "100%"
  },
  signinButton: {
    width: "75%",
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 7.5,
    paddingBottom: 7.5
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
  container: {
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    borderStyle: "solid",
    borderColor: "#ff8c00"
  },
  label: {
    color: "purple",
    fontSize: 18
  },
  buttonContainer: {
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: 50,
    flexDirection: "row"
  }
})

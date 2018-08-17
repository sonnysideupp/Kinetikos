import React, { Component } from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { decorator as sensors } from "react-native-sensors"
import { Accelerometer, Gyroscope, Magnetometer } from "react-native-sensors"
import gql from "graphql-tag"
import { graphql } from "react-apollo"
import RNFetchBlob from "rn-fetch-blob"
import { PermissionsAndroid } from "react-native"
import Geolocation from "react-native-geolocation-service"

const Value = ({ name, value }) => (
  <View style={styles.valueContainer}>
    <Text style={styles.valueName}>{name}:</Text>
    <Text style={styles.valueValue}>{new String(value).substr(0, 8)}</Text>
  </View>
)

class Sensor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      csvData3: [
        {
          time: 0,
          x: 0,
          y: 0,
          z: 0,
          latitude: 0,
          longitude: 0,
          xrad: 0,
          xrad: 0,
          xrad: 0,
          x1: 0,
          x2: 0,
          x3: 0
        }
      ],
      csvData: [{ x: 0, y: 0, z: 0 }],
      csvData1: [{ x: 0, y: 0, z: 0 }],
      csvData2: [{ x: 0, y: 0, z: 0 }],
      showStart: true,
      showStop: false
    }
  }

  componentWillMount() {
    async function requestLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Cool App to display your location",
            message:
              "Cool Photo App needs access to gps " +
              "so you can save the data."
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use gps1")
        } else {
          console.log("GPS permission denied")
        }
      } catch (err) {
        console.warn("gps1 error")
      }
    }

    async function requestLocationPermission1() {
      try {
        const granted1 = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          {
            title: "Cool App to display your location",
            message:
              "Cool Photo App needs access to gps " +
              "so you can save the data."
          }
        )
        if (granted1 === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use gps")
        } else {
          console.log("GPS permission denied")
        }
      } catch (err) {
        console.warn("gps error")
      }
    }
    ;(async function() {
      await requestLocationPermission()
    })()

    ;(async function() {
      await requestLocationPermission1()
    })()

    new Accelerometer({
      updateInterval: 10 // defaults to 100ms
    })
      .then(observable => {
        observable.subscribe(({ x, y, z }) => {
          Geolocation.getCurrentPosition(
            position =>
              this.state.csvData.push({
                x: x,
                y: y,
                z: z,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              }),
            error => {
              // See error code charts below.
              console.log(error.code, error.message)
            },
            { enableHighAccuracy: true, timeout: 15000}
          )
        })
        console.log(this.state.csvData)
      })
      .catch(error => {
        console.log("The sensor is not available")
      })

    new Gyroscope({
      updateInterval: 10
    })
      .then(observable => {
        observable.subscribe(({ x, y, z }) => {
          this.state.csvData1.push({ x: x, y: y, z: z })
        })
      })
      .catch(error => {
        console.log("The sensor is not available")
      })

    new Magnetometer({
      updateInterval: 10 // defaults to 100ms
    })
      .then(observable => {
        observable.subscribe(({ x, y, z }) => {
          this.state.csvData2.push({ x: x, y: y, z: z })
        })
      })
      .catch(error => {
        console.log("The sensor is not available")
      })
  }

  startRecording() {
    //reset the state when user press start recording
    this.setState({
      csvData3: [
        {
          time: 0,
          x: 0,
          y: 0,
          z: 0,
          latitude: 0,
          longitude: 0,
          xrad: 0,
          xrad: 0,
          xrad: 0,
          x1: 0,
          x2: 0,
          x3: 0
        }
      ],
      csvData: [{ x: 0, y: 0, z: 0 }],
      csvData1: [{ x: 0, y: 0, z: 0 }],
      csvData2: [{ x: 0, y: 0, z: 0 }],
      showStart: false,
      showStop: true
    })
  }

  exportCSV() {
    async function requestWriteExternalStorage() {
      try {
        const granted2 = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: "Permission",
            message: "We need your permission."
          }
        )
        if (granted2 === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can read the external storage")
        } else {
          console.log("Read External storage permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
    }
    async function requestWriteExternalStorage1() {
      try {
        const granted3 = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Permission",
            message: "We need your permission."
          }
        )
        if (granted3 === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can write the external storage")
        } else {
          console.log("Write External storage permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
    }

    ;(async function() {
      await requestWriteExternalStorage()
    })()

    ;(async function() {
      await requestWriteExternalStorage1()
    })()

    // compressing all three data sets into one
    for (var i = 0; i < this.state.csvData2.length; i++) {
      this.state.csvData3.push({
        time: Date.now(),
        x: this.state.csvData[i].x,
        y: this.state.csvData[i].y,
        z: this.state.csvData[i].z,
        latitude: this.state.csvData[i].latitude,
        longitude: this.state.csvData[i].longitude,
        xrad: this.state.csvData1[i].x,
        yrad: this.state.csvData1[i].y,
        zrad: this.state.csvData1[i].z,
        x1: this.state.csvData2[i].x,
        x2: this.state.csvData2[i].y,
        x3: this.state.csvData2[i].z
      })
    }

    //converting data set to a csv format
    const headerString =
      "time,x,y,z,xrad,yrad,zrad,xμT,yμT,zμT,longitdue,latitude\n"
    const rowString = this.state.csvData3
      .map(
        d =>
          `${d.time},${d.x},${d.y},${d.z},${d.xrad},${d.yrad},${d.zrad},${
            d.x1
          },${d.x2},${d.x3},${d.longitude},${d.latitude}\n`
      )
      .join("")
    const csvString = `${headerString}${rowString}`
    console.log(rowString)

    const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/data.csv`
    console.log("pathToWrite", pathToWrite)
    // pathToWrite /storage/emulated/0/Download/data.csv

    //converting the data set into a csv file that is saved to the download/data.csv
    RNFetchBlob.fs
      .appendFile(pathToWrite, csvString, "utf8")
      .then(() => {
        console.log(`wrote file ${pathToWrite}`)
        // wrote file /storage/emulated/0/Download/data.csv
      })
      .catch(error => console.error(error))

    this.setState({ showStart: true, showStop: false })
  }
  render() {
    const { sensorsFound, Accelerometer, Gyroscope } = this.props

    if (!Accelerometer || !Gyroscope) {
      // One of the sensors is still initializing
      return null
    }

    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Gyroscope values</Text>
        <Value
          name="x"
          value={this.state.csvData1[this.state.csvData1.length - 1].x}
        />
        <Value
          name="y"
          value={this.state.csvData1[this.state.csvData1.length - 1].y}
        />
        <Value
          name="z"
          value={this.state.csvData1[this.state.csvData1.length - 1].z}
        />
        <Text style={styles.headline}>Accelerometer values</Text>
        <Value
          name="x"
          value={this.state.csvData[this.state.csvData.length - 1].x}
        />
        <Value
          name="y"
          value={this.state.csvData[this.state.csvData.length - 1].y}
        />
        <Value
          name="z"
          value={this.state.csvData[this.state.csvData.length - 1].z}
        />
        <Text style={styles.headline}>Magnetometer values</Text>
        <Value
          name="x"
          value={this.state.csvData2[this.state.csvData2.length - 1].x}
        />
        <Value
          name="y"
          value={this.state.csvData2[this.state.csvData2.length - 1].y}
        />
        <Value
          name="z"
          value={this.state.csvData2[this.state.csvData2.length - 1].z}
        />
        {this.state.showStart && (
          <Button
            onPress={() => this.startRecording()}
            title="Start Recording!"
          />
        )}
        <Text />
        {this.state.showStop && (
          <Button onPress={() => this.exportCSV()} title="Stop Recording!" />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headline: {
    fontSize: 30,
    textAlign: "center",
    margin: 10
  },
  valueContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  valueValue: {
    width: 200,
    fontSize: 20
  },
  valueName: {
    width: 50,
    fontSize: 20,
    fontWeight: "bold"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
})

export default sensors({
  Accelerometer: true,
  Gyroscope: true,
  Magnetometer: true
})(Sensor)
//     return (
//       <View style={styles.container}>
//       <Text style={styles.headline}>
//           Gyroscope values
//         </Text>
//         <Value name="x1" value={this.state.x1} />
//         <Value name="y1" value={this.state.y1} />
//         <Value name="z1" value={this.state.z1} />
//         <Text style={styles.headline}>
//           Accelerometer values
//         </Text>
//         <Value name="x" value={this.state.x} />
//         <Value name="y" value={this.state.y} />
//         <Value name="z" value={this.state.z} />
//       </View>
//     );
//   }
// }

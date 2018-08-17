// import React from "react"
// import { Text,View,StyleSheet } from 'react-native';
// import HTMLView from 'react-native-htmlview';

// class Sensor extends React.Component {
//     // static navigationOptions = {
//     //   title: 'Questionnaire',
//     // };
//     render() {
//         const htmlContent = `<div></div>
//         `;
//    return(
//        <View>
//         <Text>Sensor!</Text>
//         <View
//         style={styles.div}
//       />
//       </View>
//     )
//     }
    
//   }
//   const styles = StyleSheet.create({
    

//     div:{
//         color: 'red', // make links coloured pink
//         position: 'absolute',
//           width: 20,
//           height: 20,
//           top: 200,
//           left: 200,
//       borderRadius: 20,
//       backgroundColor: 'blue',
//     },
//   });


//   export default Sensor

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { decorator as sensors } from "react-native-sensors";
import { Accelerometer,Gyroscope} from "react-native-sensors";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import RNFetchBlob from 'rn-fetch-blob';
import { PermissionsAndroid } from 'react-native';

const CREATE_ABC = gql`
  mutation createABC($data:ABCCreateInput!) {
    createABC(data:$data) {
      a
      b
      c
    }
  }
`
const CREATE_XYZ = gql`
  mutation createXYZ($data:XYZCreateInput!) {
    createXYZ(data:$data) {
      x
      y
      z
    }
  }
`


const Value = ({name, value}) => (
  <View style={styles.valueContainer}>
    <Text style={styles.valueName}>{name}:</Text>
    <Text style={styles.valueValue}>{new String(value).substr(0, 8)}</Text>
  </View>
)

class Sensor extends Component{
  constructor(props) {
    super(props);
    this.state = {csvData:[{time:0,x: 0, y: 0, z: 0, latitude:0, longitude:0}],
    csvData1:[{time:0 ,a: 0, b: 0, c: 0, latitude:0, longitude:0}],
  showStart:true,showStop:false};
  }
  

componenetWillMount(){




  (async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Cool App to display your location',
          'message': 'Cool Photo App needs access to gps ' +
                     'so you can save the data.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use gps")
      } else {
        console.log("GPS permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  })()
  (async function requestLocationPermission1() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          'title': 'Cool App to display your location',
          'message': 'Cool Photo App needs access to gps ' +
                     'so you can save the data.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use gps")
      } else {
        console.log("GPS permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  })()

    new Accelerometer({
      updateInterval: 10// defaults to 100ms
    }).then(observable => {
      observable.subscribe(({x,y,z}) => { navigator.geolocation.getCurrentPosition(position =>this.state.csvData.push({time:Date.now(),x:x, y:y, z:z,latitude:position.coords.latitude,longitude:position.coords.longitude }));
    });console.log(this.state.csvData)})
      .catch(error => {
        console.log("The sensor is not available");
      });

      if ("geolocation" in navigator) {
        console.log( "geolocation is available")
      } else {
        console.log( "geolocation is Not available")
      }
     
      (async function() {
        await  requestLocationPermission();
      })();
     

      (async function() {
        await  requestLocationPermission1();
      })();
   
    

    new Gyroscope({
      updateInterval: 10
    })
      .then(observable => {
        observable.subscribe(({x,y,z}) => { navigator.geolocation.getCurrentPosition(position =>this.state.csvData1.push({time:Date.now(),a:x, b:y, c:z,latitude:position.coords.latitude,longitude:position.coords.longitude }));
      });console.log(this.state.csvData1)})
      .catch(error => {
        console.log("The sensor is not available");
      });

    }
 

  startRecording(){

    this.setState({csvData:[{time:0,x: 0, y: 0, z: 0,latitude:0, longitude:0}],
    csvData1:[{time:0 ,a: 0, b: 0, c: 0,latitude:0, longitude:0}],showStart:false,showStop:true})
   

  }
  
  exportCSV(){
    (async function requestWriteExternalStorage() {
      try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
           {
            title: 'Permission',
            message: 'We need your permission.',
          },
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can read the external storage")
        } else {
          console.log("Read External storage permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
    })()
   ( async function requestWriteExternalStorage1() {
      try {
        const granted = await PermissionsAndroid.request( 
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            
         {
            title: 'Permission',
            message: 'We need your permission.',
          },
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can write the external storage")
        } else {
          console.log("Write External storage permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
    })()
   
    (async function() {
      await  requestWriteExternalStorage();
    })();
  
    (async function() {
      await  requestWriteExternalStorage1();
    })();
  
  
    const headerString = 'time,x,y,z,longitdue,latitude\n';
    const rowString = this.state.csvData.map(d => `${d.time},${d.x},${d.y},${d.z},${d.longitude},${d.latitude}\n`).join('');
    const csvString = `${headerString}${rowString}`;
    console.log(csvString)

    const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/data.csv`;
console.log('pathToWrite', pathToWrite);
// pathToWrite /storage/emulated/0/Download/data.csv


RNFetchBlob.fs
  .appendFile(pathToWrite, csvString, 'utf8')
  .then(() => {
    console.log(`wrote file ${pathToWrite}`);
    // wrote file /storage/emulated/0/Download/data.csv
  })
  .catch(error => console.error(error));



  const headerString1 = 'time,a,b,c,longitdue,latitude\n';
    const rowString1 = this.state.csvData1.map(d => `${d.time},${d.a},${d.b},${d.c},${d.longitude},${d.latitude}\n`).join('');
    const csvString1 = `${headerString1}${rowString1}`;
    console.log(csvString1)

    const pathToWrite1 = `${RNFetchBlob.fs.dirs.DownloadDir}/data1.csv`;

   
 

    

    RNFetchBlob.fs
    .appendFile(pathToWrite1, csvString1, 'utf8')
    .then(() => {
      console.log(`wrote file ${pathToWrite1}`);
      // wrote file /storage/emulated/0/Download/data.csv
    })
    .catch(error => console.error(error));


    this.setState({showStart:true,showStop:false})

  }
  render() {
    const { sensorsFound, Accelerometer, Gyroscope } = this.props;

  if (!Accelerometer || !Gyroscope) {
    // One of the sensors is still initializing
    return null;
  }
 

  return (
    
    <View style={styles.container}>
     <Text style={styles.headline}>Gyroscope values</Text>
    <Value name="a" value={this.state.csvData1[this.state.csvData1.length-1].a} />
    <Value name="b" value={this.state.csvData1[this.state.csvData1.length-1].b} />
    <Value name="c" value={this.state.csvData1[this.state.csvData1.length-1].c} />
    <Text style={styles.headline}>Accelerometer values</Text>
    <Value name="x" value={this.state.csvData[this.state.csvData.length-1].x} />
    <Value name="y" value={this.state.csvData[this.state.csvData.length-1].y} />
    <Value name="z" value={this.state.csvData[this.state.csvData.length-1].z} />
    {this.state.showStart && <Button onPress= {()=> this.startRecording()}title ="Start Recording!"/>}
    <Text/>
   { this.state.showStop && <Button onPress= {()=> this.exportCSV()}title ="Stop Recording!"/>}
  </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headline: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  valueContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  valueValue: {
    width: 200,
    fontSize: 20
  },
  valueName: {
    width: 50,
    fontSize: 20,
    fontWeight: 'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
 });

export default sensors({
Accelerometer: {
  updateInterval: 300 // optional
},
Gyroscope: true
})(Sensor);
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


export const Createxyz = graphql(CREATE_XYZ)(Sensor);
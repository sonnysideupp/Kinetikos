//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { MyGNSS } = NativeModules

export default {
  exampleMethod () {
    return MyGNSS.exampleMethod()
  },

  EXAMPLE_CONSTANT: MyGNSS.EXAMPLE_CONSTANT
}

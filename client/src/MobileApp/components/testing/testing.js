import React, { Component } from 'react'
import { View } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'
 

const fruits = [
  { label: 'Apples', value: 1 },
  { label: 'Oranges', value: 2 },
  { label: 'Pears', value: 2 }
]
 
class Test extends Component {
  state = { selectedFruits: [] }
 
  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }
 
  render () {
    console.log(fruits)
    return (
      <View>
        <SelectMultiple
          items={fruits}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange} />
      </View>
    )
  }
}

export default Test
import React from 'react'
import LoaderKit from 'react-native-loader-kit'
import { View } from 'react-native'
function Loading() {
  return (
    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    
    }}>
        <LoaderKit
  style={{ width: 100, height: 150 }}
  name={'SemiCircleSpin'} // Optional: see list of animations below
  color={'red'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
/>
    </View>
  )
}

export default Loading

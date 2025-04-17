import React, { useState } from 'react'
import UseEffectComp from './components/UseEffectComp'
import { Switch, View } from 'react-native'

function App() {
  const[switchState, setSwitchState]=useState(true);
  return (
    <View>
      <Switch 
      value={switchState} 
      onValueChange={value=>setSwitchState(value)}

      />

     { switchState && <UseEffectComp/>}
    </View>
  )
}

export default App

import React from 'react'
import { TextInput,StyleSheet,View, useColorScheme, } from 'react-native'

function App() {
  console.log(useColorScheme())
  return (
    
      <View>
        <TextInput style={styles.textCSS} 
        placeholder="enter your name" 
        onChangeText={(e)=>{console.log(e)}}
        autoCapitalize='characters' 
        // value='manan'
        multiline={true}
        numberOfLines={4}
        keyboardType='numeric'


         />
      </View>
   
  )
}


export default App

const styles=StyleSheet.create({
  textCSS:{
    margin:50,
    borderWidth:1,
    borderColor:'red',
    borderRadius:10,
    
  }
 

})

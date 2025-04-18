import React, { useEffect } from 'react'
import { View,Text } from 'react-native';
console.log('hello')
function UseEffectComp() {
    // console.log("hello before effect");
    useEffect(()=>{
        const Id=setInterval(()=>{
            console.log("ads")
        },5000)
        // console.log("HELLO WORLD");
    },[]);
    return()=>{
        console.log("unmount")
        clearInterval(Id);
    }
  // return (
  //   <View>
  //   <Text>Use Effect</Text>
  //   </View>
  // )
}
export default UseEffectComp;

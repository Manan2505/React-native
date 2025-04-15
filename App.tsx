import {StyleSheet, View,Text, StatusBar, SafeAreaView,Image,Button, Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from "react-native";
import { useColorScheme} from "react-native";
function App(){
  const alertFunc=()=>{
    // alert("button clicked");
    console.log("HELLO")
  }
  return (
    <SafeAreaView style={styles.statusbarMarginWithFlex}>
      <TouchableHighlight onPress={alertFunc}>
      {/* <View><Text>Highlight:</Text></View> */}
        <View style={styles.btnStyling}>
        <Text>Press Me</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity onPress={alertFunc}>
        {/* <Text>Opacity:</Text> */}
        <View style={styles.btnStyling}>
        <Text>Press Me</Text>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback onPress={alertFunc}>
      {/* <Text>With Feedback:</Text> */}
        <View style={styles.btnStyling}>
        <Text>Press Me</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableWithoutFeedback onPress={alertFunc}>
      {/* <Text>Without feedback:</Text> */}
        <View style={styles.btnStyling}>
        <Text>Press Me</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}
export default App;

const styles=StyleSheet.create({
  statusbarMarginWithFlex:{
    marginTop:StatusBar.currentHeight,
    borderRadius:'10',
     alignItems:'center',
    justifyContent:'center',
    gap:'20'
  },
  btnStyling:{
    width:'200',
    height:'50',
    backgroundColor:'red',
   
  }
  
});
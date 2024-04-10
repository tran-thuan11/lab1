import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () =>{
  return(
    <View style={myStyle.container}>
      <Text style={{color:'white'}}>Hello World</Text>
    </View>
  )
}

export default App; 
var myStyle = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent:'center'
  },

}
)

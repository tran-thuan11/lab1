import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default () => {
  return(
    <View style ={myStyle.container}>
        <Button title='Button 1' onPress={() => 
            alert("Hello Thuan")} />
        <TouchableOpacity  style={myStyle.button} onPress={() => alert("Thuandeptraisieucapvippro")}>
                <Text style={myStyle.text}>Button 2</Text>
        </TouchableOpacity>
    </View>
);
};
const myStyle = StyleSheet.create(
{
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        backgroundColor:'blue',
        marginTop: 10,
        alignItems: 'center',
        padding: 10
    },
    text: {
        color: 'white',
        fontSize: 18
    }
}
)

import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import {StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
      <Text>Spuare 1</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.text1}>
      <Text>Spuare 2</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.text2}>
      <Text>Spuare 3</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'while',
    alignItems: 'center',
    justifyContent:'space-around',
    flexDirection:'row',

  },
  text:{
    color:'black',
    fontSize:20,
    width:100,
    height:100,
    backgroundColor:'blue',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text1:{
    color:'black',
    fontSize:20,
    width:100,
    height:100,
    backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text2:{
    color:'black',
    fontSize:20,
    width:100,
    height:100,
    backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
})
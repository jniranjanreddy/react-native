import React from 'react';
import { Text,
   View,
   StyleSheet,
   Button,
   Alert,
  } from 'react-native';
  import external_styles from './style'

const App = () => {
    return (
        <View>
          <Text style={ styles.textBox }> Welcome </Text>
          <Text style={ external_styles.textBox }> React Native </Text>
          <Text style={ styles.textBox }> Welcome </Text>
          <Text style={ [styles.textBox,external_styles.textBox] }> React Native </Text>

        </View>
    );    
}; 

const styles=StyleSheet.create({
   textBox: {
      color: "#fff",
      fontSize: 20,
      backgroundColor: 'blue',
      marginTop: 30,
      marginHorizontal: 10,
      padding: 10,
      borderRadius: 10,
      textAlignVertical: "center",
      textAlign: "center",
      borderColor: "red",
      borderWidth: 2


   }




})






export default App;
import React, { useState } from 'react';
import { Text,
   View,
   StyleSheet,
   Button,
   Alert,
   TextInput,
  } from 'react-native';
import style from './style';

const App = () => {
 // const [name, setName] = useState("");
    return (
        <View>
          <Text style={{ fontSize:30, margin:20 }}> Handle Text Input </Text>
          <Text style={{ fontSize:30, margin:20 }}> Your Name is: {name} </Text>
          
          <TextInput
          style={styles.TextInput}
          placeholder='Enter your Name'
          onChangeText={(text)=>setName(text)}
          
          
          />
          <Button title='Clear Input Value' onPress={()=>setName("")}/>
        </View>
    );    
}; 


const styles = StyleSheet.create({
  TextInput: {
 fontSize: 18,
 ontSize:20, 
 color:"red",
 borderWidth:2, 
 margin:10, 
 borderColor:"red",
 padding: 5
  }

})


export default App;
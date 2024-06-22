import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const App = () => {
  const [name,setName]=useState("Bruce")
  
  return (
    <View>
      <Text style={{ fontSize: 30 }}> {name} </Text>
    <Button title="Update Probs" onPress={()=>setName("Peter")}/>  
      <User name = {name}/>
    </View>
  );
};

const User=(props)=>{
    return (
        <View style={{backgroundColor: 'green', padding:10 }}>
            <Text style={{ fontSize: 30 }}> Child Component </Text>
        </View>
    );
};







export default App;

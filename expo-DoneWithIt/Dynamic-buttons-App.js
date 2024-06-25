import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";


const App = () => {
  const skills = [

     {
      id:1,
      name:'java'
     },
     {
      id:2,
      name:'mongo'
     },
     {
      id:3,
      name:'React'
     },
     {
      id:4,
      name:'NodeJS'
     },

  ]
  const [selectedRadio,setSelectedRadio] = useState(1)
  return (

    <View style={styles.main}>

    {

       skills.map((item,index)=> <TouchableOpacity onPress={()=>setSelectedRadio(item.id)}>
       <View style={styles.radioWrapper}>
           <View style={styles.radio}>
             {selectedRadio==item.id? <View style={styles.radioBg}></View>:null}
           </View>    
           <Text style={styles.radioText}>{item.name}</Text>
       </View>    
     </TouchableOpacity>)

    }



      


</View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  radioText: {
    fontSize:20,
  },

  radio: {
    height:40,
    width:40,
    borderColor:'lightblue',
    borderWidth:2,
    borderRadius:20,
    margin:10

  },
  radioWrapper:{flexDirection:'row', alignItems:'center'},
  radioBg: { 
    backgroundColor:'lightblue',
    height: 28,
    width: 28,
    borderRadius:40,
    margin:3.9 

  }, 

})

export default App;

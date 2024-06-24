import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableHighlight } from "react-native";

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, margin: 20, color: "blue" }}>Style with Button</Text>
      <TouchableHighlight>
        <Text style={ [styles.button, styles.success] }>Success</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={ [styles.button, styles.primary] }>Primary</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={ [styles.button, styles.warning] }>Warning</Text>
      </TouchableHighlight>
  
      <TouchableHighlight>
        <Text style={ [styles.button, styles.red] }>Error</Text>
      </TouchableHighlight> 
  

      




    </View>
  );
};

const styles = StyleSheet.create({

    main:{
        flex:1
    },
    button:{
        backgroundColor:'orange',
        fontSize:20,
        textAlign:'center',
        padding:10,
        margin:10,
        borderRadius:10,
        shadowColor:'red',
        elevation:10,
        shadowOpacity:1
    },
    success: { backgroundColor:'green'},
    primary: { backgroundColor:'blue'},
    warning: { backgroundColor:'gold'},
    error:  { backgroundColor:'red'}


})




export default App;

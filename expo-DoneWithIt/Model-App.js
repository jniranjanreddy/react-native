import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Alert, FlatList, Modal } from "react-native";

const App = () => {
  return (
    <View style={styles.main}>

<Modal transparent={true}
>
<View>
    <View>
        <Text> Step by Step </Text>
    </View>
</View>





</Modal>



    <View style={styles.buttonView}>
         <Button title="modal"/>
       </View>
    </View>
    // Start code from here
  );
};

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
    buttonView: {
    flex:1,
    justifyContent:"flex-end"

    },





})


export default App;

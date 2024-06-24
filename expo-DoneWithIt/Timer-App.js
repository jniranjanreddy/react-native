import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Alert, FlatList } from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Text style={{ fontSize: 30, margin: 20 }}>
        {" "}
        UseEffect on unmount Component{" "}
      </Text>
      <Button title="toggle" onPress={() => setShow(!show)} />

      {show ? <Student /> : null}
    </View>
    // Start code from here
  );
};

const Student = () => {
  let timer = setInterval(() => {
    console.warn("Timer Called");
  }, 2000)

  useEffect(() => {
    return () => clearInterval(timer)

    })

  return (
    <View>
      <Text style={{ fontSize: 30, color: "red" }}> Student </Text>
    </View>
  );
};


export default App;

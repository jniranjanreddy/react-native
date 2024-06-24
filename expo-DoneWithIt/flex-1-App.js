import React, { useState } from "react";
import { View, StyleSheet, Button, Alert, FlatList, flex } from "react-native";

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={ styles.InnerBox1 }></View>
        <View style={ styles.InnerBox2 }></View>
        <View style={ styles.InnerBox3 }></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 2,
    backgroundColor: "red",
    flexDirection: "row"
  },
  box2: {
    flex: 1,
    backgroundColor: "green",
  },
  box3: {
    flex: 1,
    backgroundColor: "blue",
  },
  InnerBox1: {
    flex: 1,
    backgroundColor: "orange",
    margin:10
  },
  InnerBox2: {
    flex: 1,
    backgroundColor: "yellow",
    margin:10
  },
  InnerBox3: {
    flex: 1,
    backgroundColor: "lightblue",
    margin:10
  },













});

export default App;

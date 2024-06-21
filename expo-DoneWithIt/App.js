import { StatusBar } from 'expo-status-bar';
import { Platform,StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.child1Container}>
      <Text>Open up App.js to start working  ! Open up App.js to start working  !</Text>
      <Text>Text Component child 1</Text>
    </View>
    <View style={styles.child2Container}>
      <Text>Open up App.js to start working  !</Text>
      <Text>Text Component child 2</Text>

    </View>


    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child1Container: {
    flex: 0.5,
    backgroundColor: 'red',
  
    justifyContent: 'center',
  },
  child2Container: {
    flex: 0.5,
    backgroundColor: 'green',
    // marginVertical:10,
    margin:30,
    paddingHorizontal:100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

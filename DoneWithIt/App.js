import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Safe , SafeAreaView } from 'react-native';

// export default function App1() {
//   return (
//     <View style={styles.container}>
//       <Text>Ram</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// };

export default function App() {
const handlePress = () => console.log("text Pressed")
  console.log("Rama and Sita")
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Sri Ram</Text>
      <Text onPress = {() => console.log("Text Clicked")}>Sri Ram</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'yellow',
     alignItems: 'center',
     justifyContent: 'center',
  },
});
import React, {useState} from 'react';
import { Text,
   View,
   StyleSheet,
   Button,
   Alert,
   FlatList,
   ActivityIndicator
  } from 'react-native';

const App = () => {
    const [load,setload] = useState(false)
    displayLoader=()=>{
        setload(true)

    setTimeout(()=>{

        setload(false)
    }, 3000);
    // Api calls for 3 seconds, so activity will load for 3 seconds

    }
    return (
    <View style={styles.main } >
    
    <ActivityIndicator size={75} color={'black'}animating={load}/>
    <Button title='indicator' onPress={displayLoader}/>
    
    </View>
    
    );    

}; 



const styles = StyleSheet.create({
      main: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",


      },



})
export default App;
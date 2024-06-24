import React from 'react';
import { Text,
   View,
   StyleSheet,
   Button,
   Alert,
   FlatList,
  } from 'react-native';

const App = () => {
    const users = [
        {
            id: 1,
            name: "niranjan",
            email: "niranjan@gmail.com"
        },
        {
            id: 2,
            name: "Rajitha",
            email: "Rajitha@gmail.com"
        },
        {
            id: 3,
            name: "Siri",
            email: "Siri@gmail.com"
        },
        {
            id: 4,
            name: "Raji",
            email: "Raji@gmail.com"
        },
    ];
    return (
    <View><Text style={{ fontSize:30, margin:20 }}> Loop with FlatList </Text>
            <FlatList
            data = {users}
            renderItem={({item})=><View style={styles.box}>
            <Text style={styles.textBox}> {item.id }</Text>
            <Text style={styles.textBox}> {item.email }</Text>
            <Text style={styles.textBox}> {item.name }</Text>
            
            {/* <Text style={styles.textBox}> {item.email }</Text> */}
            
            
            </View>}

            />
    </View>
    // Start code from here
    
    );    
}; 

const styles=StyleSheet.create({
    textBox: {
       color: "black",
       fontSize: 20, 
       flex:1,
       margin:2,
       backgroundColor:"yellow",
       textAlign:"center"
      },    
    box:{
     flexDirection:'row',
     borderWidth:2,
     borderColor: "red",
     margin:5,
     backgroundColor: "green"
    }
 
})

export default App;
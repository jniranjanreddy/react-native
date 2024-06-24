import React from 'react';
import { Text,
   View,
   StyleSheet,
   Button,
   Alert,
   FlatList,
   SectionList,
  } from 'react-native';

const App = () => {
     const users = [{
        id:1,
        name:"Niranjan",
        data: ["Php","React","Java","Linux"]
     },
     {
        id:2,
        name:"Raji",
        data: ["Php","React","tv","cook"]
     },
     {
        id:3,
        name:"Rishi",
        data: ["inter","science","fiction","Linux"]
     },
     {
        id:4,
        name:"JNR",
        data: ["Ansible","Kubernetes","Docker","babel"]
     },  
     
    ]




    return (
    <View><Text style={{ fontSize:30, margin:20 }}> Section List </Text>
    <SectionList
    sections={users}
    renderItem={({item})=><Text style={{ fontSize:20, marginLeft:20 }}>{item}</Text>}
    renderSectionHeader={({section:{name}})=>(
      <Text style={{fontSize:20, color:'red',  }}>{ name } </Text>)}
    
    />
    
    
    
    
    </View>
    
    );    
}; 


export default App;
import React, {useState} from 'react';
import { Text,
   View,
   StyleSheet,
   Button,
   Alert,
   FlatList,
  } from 'react-native';

const App = () => {
    const [show, setShow] = useState(false)
    return (
    <View><Text style={{ fontSize:30, margin:20 }}> Show/Hide Component </Text>
    <Button title='toggle' onPress={()=>setShow(!show)}/>

        {

            show ? <User /> : null
        }
    {/* <User /> */}
    
    
    </View>
    
    );    
}; 



const User = ()=> {

    return(

        <View>

          <Text style={{ fontSize:30, color:"red" }}>USer Component </Text>
      

        </View>
    )
}




export default App;
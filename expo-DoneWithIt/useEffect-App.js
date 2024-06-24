import React, { useEffect, useState } from 'react';
import { Text,
   View,
   StyleSheet,
   Button,
  } from 'react-native';

const App = () => {
    const [count,setCount] = useState(0)
    const [data,setData] = useState(100)


    // useEffect(()=>{
    //     console.warn("count")

    // },[count])
    // useEffect(()=>{
    //     console.warn("count")

    // },[data])

    return (
    <View>
        <Text style={{ fontSize:30,margin:20, }}> Hooks Count useEffect {count}</Text>
        <Text style={{ fontSize:30,margin:20 }}> Hooks Data useEffect  {data}</Text>

        <Button title='update Count' onPress={()=>setCount(count+1)}/>
        <Button title='update Data'  onPress={()=>setData(data+1)}/>
    
    <User info={{data,count}}/>
    
    </View>
    
    );    
}; 


const User=(props)=>{

    useEffect(()=>{
        console.warn("Run this code when data prop is updated.")
    },[props.info.data])

    useEffect(()=>{
        console.warn("Run this code when Count prop is updated.")
    },[props.info.count])

    return (
        <View>
            <Text style={{ fontSize:30,margin:20, color:'orange' }}> count: {props.info.count}</Text>

            <Text style={{ fontSize:30,margin:20, color:'orange' }}> data: {props.info.data}</Text>

        
        </View>
        
        );    

}


export default App;
import React from 'react';
import { Text,
   View,
   StyleSheet,
   Button,
   Alert,
   ScrollView,
  } from 'react-native';

const App = () => {
    const users = [
        {
            id: 1,
            name: "niranjan",
        },
        {
            id: 2,
            name: "Rajitha",
        },
        {
            id: 3,
            name: "Rishika",
        },
        {
            id: 4,
            name: "Rishika",
        },
{
            id: 5,
            name: "Rishika",
        },
{
            id: 6,
            name: "Rishika",
        },
{
            id: 7,
            name: "Rishika",
        },
{
            id: 8,
            name: "Rishika",
        },
{
            id: 9,
            name: "Rishika",
        },
{
            id: 10,
            name: "Rishika",
        },
{
            id: 11,
            name: "Rishika",
        },
{
            id: 12,
            name: "Rishika",
        },
{
            id: 13,
            name: "Rishika",
        },
        {
            id: 14,
            name: "Rishika14",
        },
{
            id: 15,
            name: "15 Rishika",
        },
{
            id: 16,
            name: "16Rishika",
        },
{
            id: 17,
            name: "17Rishika",
        },
{
            id: 18,
            name: "18Rishika",
        },
{
            id: 19,
            name: "19Rishika",
        },
{
            id: 20,
            name: "20Rishika",
        },
{
            id: 21,
            name: "21Rishika",
        },
{
            id: 22,
            name: "22Rishika",
        },
{
            id: 23,
            name: "23Rishika",
        },
    ];
    return (
    <View>
        <Text style={{ fontSize:30, margin:20 }}> Dynamic Grid </Text>
    
    <View style={{ flex:1, flexDirection:"row", flexWrap:"wrap" }}>
                <ScrollView>
                        {
                    users.map((item)=><Text style={styles.textBox}>{item.name}</Text>)
                }
                </ScrollView>  
    </View>
    
    
    
    
    </View>
   );    
}; 

const styles=StyleSheet.create({
    textBox: {
       color: "#fff",
       backgroundColor:"blue",
       fontSize: 25,
       margin:5,
       padding:5,
       width:120,
       height:120,
       textAlignVertical:"center",
       textAlign:"center"
 
 
    }
 })

export default App;
import React, { Component } from 'react';
import Student from './components/Student';
import { Text,
   View,
   StyleSheet,
   Button,
   Alert,
   FlatList,
   TextInput,
  } from 'react-native';
  
  class App extends Component {
    constructor(){
        super();
        this.state={
            name: "Rama",
        }
    }

    // fruit =()=>{
    //     console.warn("Aople")
    // }
    updateName(val){
        this.setState({name:val})
    }


       render(){
         return(
            <View> 
                
                
                <Text style={{fontSize:20, margin:20, color:"red" }}> {this.state.name}</Text> 
                <TextInput placeholder='Enter your Name'
                 onChangeText={(text)=> this.updateName(text)} 
                 />
                <Button title='press me' onPress={this.fruit}/>
                <Student />
            
            
            </View>


         )

       }


  }




export default App;
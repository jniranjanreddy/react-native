import React from 'react';
import { Text,
   View,
   StyleSheet,
   Button,
   Alert,
  } from 'react-native';
import CompanyData from './components/companyData'



const name = 'Niru';
let age = 30;
var email="admin@jnrlabs.com";

function fruit(){
  return "apple";

}
function myLog(){
  console.warn("Submitted");

}

const App = () => {
  return (
    <View>
      {/* <Text style={{ fontSize:30}}> Hello, React Native! </Text> */}
      <Text style={{ fontSize:30}}> Welcome, {name} </Text>
  
      <UserData />
      <CompanyData />
            <Button
                    title="Tap Me"
                    color="#841584"
                    onPress={() => Alert.alert('Button pressed')}/>
            <Button
                    title="login"
                    color=""
                    onPress={ myLog }/>        
    
    </View>

  );
};

const UserData = () =>{
 return(
 <View>
      <Text style={{ fontSize:20}}> empID: 10442</Text>
      <Text style={{ fontSize:20}}> Name: Raj </Text>
      <Text style={{ fontSize:20}}> Role: DevOps </Text>
  </View>    
);
};
const EmpData = () =>{
  return(
  <View>
       <Text style={{ fontSize:20}}> empID: 10442</Text>
       <Text style={{ fontSize:20}}> Name: Raj </Text>
       <Text style={{ fontSize:20}}> Role: DevOps </Text>
   </View>    
 )
};















export default App;
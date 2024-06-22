import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    Alert,
    TextInput,
} from 'react-native';


const App = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassWord] = useState("");
    const [display,setDisplay] = useState("false");
    const resetFormData =()=>{
        setDisplay(false)
        setName("")
        setEmail("")
        setPassWord("")


    }
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 20 }}> Simple Form in React </Text>

            <TextInput
                style={styles.textInput}
                placeholder='UserName: '
                onChangeText={(text)=>setName(text)}
                value={name}
            />
            <TextInput
                style={styles.textInput}
                placeholder='email: '
                onChangeText={(text)=>setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.textInput}
                placeholder='Password: '
                onChangeText={(text)=>setPassWord(text)}
                secureTextEntry={true}
                value={password}
            />
            

            <View style={{ marginBottom:5, marginHorizontal:100 }}>
            <Button color="green"  
            title = 'print Details'
            onPress={()=>setDisplay(true)}/>
            </View>

            <View style={{ marginBottom:5, marginHorizontal:100 }}>
            <Button title = 'Clear'onPress={resetFormData}/>
            </View>
                {
                    display ?
                    <View>
                            <Text style={{fontSize:10 }}> Username is: {name}     </Text>
                            <Text style={{fontSize:10 }}> email is: {email}       </Text>
                            <Text style={{fontSize:10 }}> Password is: {password} </Text>
                    </View>
                    : null
                }  

        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        fontSize: 18,
        color: "blue",
        borderWidth: 2,
        margin: 5,
        borderColor: "blue",
        padding: 5,
        borderRadius: 10
    }

});

export default App;
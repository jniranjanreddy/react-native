import React from "react";
import { Text, View, Button, FlatList, StyleSheet, ScrollView } from "react-native";

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

    ];

    return (
        <View>
            <Text style={{ fontSize: 30, margin: 20 }}> List With Map Function </Text>

            <ScrollView>
            {
                users.map((item)=><Text style={styles.TextInput}> {item.name} </Text>)
            }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    TextInput: {
        fontSize: 18,
        ontSize: 20,
        color: "black",
        borderWidth: 2,
        margin: 10,
        borderColor: "blue",
        padding: 5,
        backgroundColor:"green"
    }

})

export default App;

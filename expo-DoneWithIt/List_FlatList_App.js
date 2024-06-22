import React from "react";
import { Text, View, Button, FlatList, StyleSheet } from "react-native";

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
            <Text style={{ fontSize: 30, margin: 20 }}> List and FlatList </Text>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                <Text style={ styles.TextInput }> {item.name}</Text>
                )}
            //   renderItem={({item})=><Text> {item.id} </Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    TextInput: {
        fontSize: 18,
        ontSize: 20,
        color: "red",
        borderWidth: 2,
        margin: 10,
        borderColor: "blue",
        padding: 5,
        backgroundColor:"yellow"
    }

})

export default App;

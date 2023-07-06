import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import AddFriend from "../components/AddFriend";

export default function AddContacts() {
    return (
        <View>
            <ScrollView>
               <AddFriend
                    name="Lisa"
                    picture="https://wallpaperaccess.com/full/215732.jpg"

               />
               <AddFriend
                     name="Dorothy"
                    picture="https://wallpaperaccess.com/full/188156.jpg"
               />
               <AddFriend
                     name="Dora"
                    picture="https://wallpaperaccess.com/thumb/2168777.jpg"
               /> 
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container : {
        backgroundColor : "white"
    }
})
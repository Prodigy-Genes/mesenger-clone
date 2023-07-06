import React from "react";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { View, Text, StyleSheet } from "react-native";

const SendMessage = ({msg}) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.msgContainer}>
                <Text style = {styles.msg}>{msg}</Text>
            </Text>
        </View>
    )
}

export default SendMessage

const styles=StyleSheet.create({
    container : {
        paddingHorizontal : 10,
        marginVertical : 5,
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'flex-end'
    },
    msgContainer : {
        backgroundColor : "#006AFF",
        borderRadius : 20,
        padding : 10,
        maxWidth : '80%'
    },
    msg : {
        color : "white",
        fontWeight : '500',
        fontSize : responsiveFontSize(1.9)
    }
})
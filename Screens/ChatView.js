import { AntDesign, FontAwesome, FontAwesome5, Entypo } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import RecievedMessage from "../components/RecievedMessage";
import SendMessage from "../components/SendMessage";

const ChatView = () => {
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow : 1 }} style={StyleSheet.chatView}>
                <View style={{flex : 1}}>
                    <RecievedMessage
                        msg="Hello There "
                        picture="https://images.hdqwalls.com/wallpapers/2023-the-little-mermaid-4k-ir.jpg"
                    />
                    <SendMessage
                        msg="Hi There"
                    />
                    <RecievedMessage
                        msg="Go chase your dreams! "
                        picture="https://images.hdqwalls.com/wallpapers/2023-the-little-mermaid-4k-ir.jpg"
                    />
                    <SendMessage
                        msg="Say no more "
                    />
                </View>
            </ScrollView>
            <View style={styles.inputContainer}>

                <TouchableOpacity style={styles.icon}>
                    <Entypo name="grid" size={responsiveFontSize(3.5)} color="#006AFF" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>
                    <FontAwesome5 name="camera" size={responsiveFontSize(3.5)} color="#006AFF" /> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>
                    <AntDesign name='picture' size={responsiveFontSize(3.5)} colors="#006AFF" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>
                    <FontAwesome name="microphone" size={responsiveFontSize(3.5)} color="#006AFF" />
                </TouchableOpacity>

                <View style={styles.sendMsgContainer}>
                    <TextInput placeholder="Aa" style={styles.Input} />
                    <Entypo name="emoji-happy" size={responsiveFontSize(2.5)} color="gray" />
                </View>

                <TouchableOpacity style={styles.icon}>
                    <AntDesign name="like1" size={responsiveFontSize(3.5)} colors="#006AFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatView

const styles=StyleSheet.create({
    container : { 
        backgroundColor : 'white',
        flex : 1
    },
    chatContainer : {

    },
    inputContainer : {
        height : responsiveHeight(7),
        flexDirection : 'row',
        alignItems : 'center',
        shadowOffset : {width : 2, height : 2},
        shadowColor : 'black',
        shadowOpacity : 0.5,
        shadowRadius : 20,
        elevation : 3
    },
    Input : {
        flex : 1,
        fontSize : responsiveFontSize(1.8)
    },
    sendMsgContainer : {
        width : '40%',
        backgroundColor : 'rgba(211,211,211,0.5)',
        borderRadius : 20,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 10,
        height : '70%'
    },
    icon : {
        padding : 5,
        width : '12%',
        justifyContent : 'center',
        alignItems : 'center'
    }
})
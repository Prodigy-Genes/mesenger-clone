import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity , Image} from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";

export default function AddFriend({name, picture}) {
    return (
        <View style ={styles.container}>
            <Image style={styles.image} source={{uri : picture}}/>
            <View style={styles.detailcontainer}>
                <Text style={styles.name}>{name}</Text>
                <Text styele={styles.mutual}>1 mutual</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.addBtnText}>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <AntDesign style={styles.icon} name="close" size={responsiveFontSize(2.5)} color="black"/>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container : {
        alignItems : 'center',
        flexDirection : 'row',
        padding : 10
    },
    image : {
        width : responsiveHeight(6),
        height : responsiveHeight(6),
        borderRadius : 200
    },
    name : {
        fontSize : responsiveFontSize(1.6)
    },
    addBtnText : {
        paddingVertical : 5,
        fontSize : responsiveFontSize(1.6)
    },
    button : {
        backgroundColor : 'rgba(211,211,211,0.5)',
        paddingHorizontal : 10,
        marginHorizontal : 5,
        borderRadius : 20
    },
    mutual : {
        fontSize : responsiveFontSize(1.5),
        color: 'gray'
    },
    detailcontainer: {
        paddingHorizontal : 10,
        flex : 1
    },
    icon : {
        paddingVertical : 5
    }
})
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const Story = ({pictures, profilePicture}) => {
    return (
        <View style={Styles.container}>
            <TouchableOpacity activeOpacity={0.7} style={Styles.content}>
                <Image style={Styles.image} source={{uri : pictures}}/>
                <View style={Styles.proPicContainer}>
                    <Image source ={{uri : profilePicture}} style={Styles.proPic}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Story 

const Styles = StyleSheet.create({
    container : {
        flex : 1,
        height : responsiveHeight(30),
        padding : 5,
        maxWidth : responsiveWidth(100) / 3
    },
    content : {
        flex : 1,
        borderRadius : 10,
        position : 'relative',
        overflow : "hidden"
    },
    proPicContainer : {
        position : 'absolute',
        width : responsiveHeight(6),
        height : responsiveHeight(6),
        background : 'transparent',
        borderColor : 'blue',
        borderWidth : 2,
        borderRadius : 'blue',
        borderWidth : 2,
        borderRadius : 200,
        top : 3,
        left : 3,
        justifyContent : 'center',
        alignItems : 'center'
    },
    proPic : {
        width : responsiveHeight(5),
        height : responsiveHeight(5),
        borderRadius : 200
    },
    image : {
        width : '100%',
        height : '100%'
    }

})
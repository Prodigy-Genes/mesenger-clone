import React from 'react';
import {View, StyleSheet, Text, ScrollView, TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import ActiveUserOnHome from '../components/ActiveUserOnHome';
import CreateRoom from '../components/CreateRoom';
import Chat from './Chat';

const Home = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={{alignItems : 'center'}} style = {styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchIconContainer}>
                    <Ionicons name="ios-search" size={responsiveFontSize(3)} color="gray"/>
                </View>
                <TextInput style={styles.search} placeholder="Search"/>
            </View>
            <View style={styles.activeUsersContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginVertical : 10 }}>
                    <CreateRoom/>
                    <ActiveUserOnHome
                        name="GeniusAwakened"
                        picture="https://images.unsplash.com/photo-1629019725048-75f3fd5edd1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                    />
                    <ActiveUserOnHome
                        name="Yves"
                        picture="https://images.unsplash.com/photo-1592547097938-7942b22df3db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    />
                    <ActiveUserOnHome
                        name="Claver"
                        picture="https://images.unsplash.com/photo-1629019725486-955dba6e4e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                    />
                    <ActiveUserOnHome
                        name="Nana Mbeah"
                        picture="https://images.unsplash.com/photo-1629019725313-d4362a90c173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                    />
                    <ActiveUserOnHome
                        name="Owuraku"
                        picture="https://plus.unsplash.com/premium_photo-1686149833505-0fe209f61a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    />
                    <ActiveUserOnHome
                        name="Osei Tutu"
                        picture="https://images.unsplash.com/photo-1672864825929-6c623785c5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                    />
                    <ActiveUserOnHome
                        name="Mike"
                        picture="https://images.unsplash.com/photo-1629019936194-f8ddb8b21b51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
                    />
                    <ActiveUserOnHome
                        name="KillCode"
                        picture="https://images.unsplash.com/photo-1629019724041-60b3fb70dde6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
                    />
                </ScrollView>
            </View>
            <Chat navigation={navigation}
                  profilePicture='https://images.unsplash.com/photo-1629019725048-75f3fd5edd1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
                  seenPicture='https://images.unsplash.com/photo-1629019725048-75f3fd5edd1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
                  name="GeniusAwakened"
                  isLastMessageYours={true}
                  hasSeen={false}
                  time="19.55"
                  message="Be Great! "
            />
            <Chat navigation={navigation}
                  profilePicture='https://images.unsplash.com/photo-1592547097938-7942b22df3db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
                  seenPicture='https://images.unsplash.com/photo-1592547097938-7942b22df3db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
                  name="Yves"
                  isLastMessageYours={true}
                  hasSeen={true}
                  time="12.59"
                  message="yh sure"
                  />
            <Chat navigation={navigation}
                  profilePicture='https://images.unsplash.com/photo-1629019725486-955dba6e4e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
                  seenPicture='https://images.unsplash.com/photo-1629019725486-955dba6e4e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
                  name="Claver"
                  isLastMessageYours={true}
                  hasSeen={false}
                  time="3.05"
                  message="Bibinii.. lol" 
            />
            <Chat navigation={navigation}
                  profilePicture='https://images.unsplash.com/photo-1629019725313-d4362a90c173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
                  seenPicture='https://images.unsplash.com/photo-1629019725313-d4362a90c173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
                  name="Nana Mbeah"
                  isLastMessageYours={true}
                  hasSeen={false}
                  time="1.05"
                  message="chale na lyy ben "
            />
            <Chat navigation={navigation}
                  profilePicture='https://images.unsplash.com/photo-1629019723620-660c8a4e50e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80'
                  seenPicture='https://images.unsplash.com/photo-1629019723620-660c8a4e50e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80'
                  name="Owuaraku"
                  isLastMessageYours={false}
                  hasSeen={true}
                  time="23.09"
                  message="ah"
            />
            <Chat navigation={navigation}
                  profilePicture='https://images.unsplash.com/photo-1672864825929-6c623785c5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
                  seenPicture='https://images.unsplash.com/photo-1672864825929-6c623785c5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
                  name="Osei Tutu"
                  isLastMessageYours={false}
                  hasSeen={true}
                  time="4.55"
                  message="Please help me share"
            />
            <Chat navigation={navigation}
                  profilePicture='https://images.unsplash.com/photo-1629019936194-f8ddb8b21b51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80'
                  seenPicture='https://images.unsplash.com/photo-1629019936194-f8ddb8b21b51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80'
                  name="Mike"
                  isLastMessageYours={false}
                  hasSeen={true}
                  time="1.40"
                  message="i've muted whatsapp ooo, dats why"
            />
            <Chat navigation={navigation}
                  profilePicture='https://images.unsplash.com/photo-1629019724041-60b3fb70dde6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80'
                  seenPicture='https://images.unsplash.com/photo-1629019724041-60b3fb70dde6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80'
                  name="KillCode"
                  isLastMessageYours={false}
                  hasSeen={true}
                  time="5.05"
                  message="I made it myself "
            />
            <Chat navigation={navigation}
                  profilePicture='https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                  seenPicture='https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                  name="Silas"
                  isLastMessageYours={false}
                  hasSeen={true}
                  time="2.45"
                  message="Chale cho nodey"
            />
            <Chat navigation={navigation}
                  profilePicture="https://images.unsplash.com/photo-1658233427916-2351b655618f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  seenPicture="https://images.unsplash.com/photo-1658233427916-2351b655618f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  name="Me"
                  isLastMessageYours={true}
                  hasSeen={true}
                  time="6.55"
                  message="I am Awesome! "
            />
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        paddingTop : 10 
    },
    searchContainer : {
        width : responsiveWidth(90),
        height : responsiveHeight(5),
        backgroundColor : 'rgba(211, 211, 211, 0.2',
        borderRadius : 30,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'rgb(211, 211,211)'
    },
    search : {
        flex : 1
    },
    searchIconContainer : {
        paddingHorizontal : 10
    },
    activeUsersContainer : {
        height : responsiveHeight(13),
        width : responsiveWidth(100),
        marginVertical : 5
    }
})
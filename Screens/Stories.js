import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Story from "../components/Story";
import CreateStory from "../components/CreateStory";

const Stories = () => {
    
    const data = [
    <CreateStory 
        picture='https://images.pexels.com/photos/8184000/pexels-photo-8184000.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' 
        key={0}
    />, 
    <Story 
        key={1}
        pictures="https://images.pexels.com/photos/3526067/pexels-photo-3526067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        profilePicture="https://images.pexels.com/photos/9785199/pexels-photo-9785199.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    />, 
    <Story
        key={2}
        pictures="https://images.pexels.com/photos/10211277/pexels-photo-10211277.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        profilePicture="https://images.pexels.com/photos/1130178/pexels-photo-1130178.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    />, 
    <Story 
        key={3}
        pictures="https://images.pexels.com/photos/12984962/pexels-photo-12984962.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        profilePicture="https://images.pexels.com/photos/12807187/pexels-photo-12807187.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    />, 
    <Story 
        key={4}
        pictures="https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        profilePicture="https://images.pexels.com/photos/15878816/pexels-photo-15878816/free-photo-of-boy-wearing-overalls-posing-in-lush-foliage.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    />, 
    <Story 
        key={5}
        pictures="https://images.pexels.com/photos/13553595/pexels-photo-13553595.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        profilePicture="https://images.pexels.com/photos/3318754/pexels-photo-3318754.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    />,
    <Story 
        key={6}
        pictures="https://images.pexels.com/photos/7846705/pexels-photo-7846705.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        profilePicture="https://images.pexels.com/photos/15474628/pexels-photo-15474628/free-photo-of-person-in-costume-of-a-genie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />]

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => item}
                numColumns={3}
            />

            
        </View>
    )
}
export default Stories

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: 'white',
        
    }
    
})
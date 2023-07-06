import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import ActiveUsers from '../components/ActiveUsers';

const Users = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ActiveUsers
                    name="Spider Man"
                    profile = "https://images.hdqwalls.com/wallpapers/bthumb/spider-man-no-way-home-movie-poster-5k-3a.jpg"
                />
                <ActiveUsers
                    name="Bat Man"
                    profile = "https://images.hdqwalls.com/wallpapers/thumb/batman-gotham-4k-7r.jpg"
                />
                <ActiveUsers
                    name="Super Man"
                    profile = "https://images.hdqwalls.com/wallpapers/thumb/superman-legacy-8k-ip.jpg"
                />
            </ScrollView>
        </View>
    )
}

export default Users

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    }
})
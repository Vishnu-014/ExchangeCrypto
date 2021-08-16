import React, { useState } from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
const image = require('../../assets/images/Saly-16.png')


const ProfileScreen =  () => {
    const [user, setUser] = useState({
        id: '1',
        name: 'Vishnu',
        email: 'vishnu@gmail.com',
        image: 'https://picsum.photos/id/237/200/300',
        netWorth: 121212,
    })

const signOut = () => {
    console.warn("signOut");
}

    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image} />
            <View>
            <View style={styles.userContainer}>
                <View style={styles.left}>
                    <Image style={styles.userImage} source={{uri: user.image}} />
                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
                </View>
                
                <View style={{alignItems: 'flex-end'}}>
                    <Text style={styles.value}>${user.netWorth}</Text>
                </View>
            </View>
            </View>
            <Pressable onPress= {signOut} style={{marginTop: 'auto'}}>
                <Text>Sign out</Text>
            </Pressable>

        </View>

    );
};


export default ProfileScreen;
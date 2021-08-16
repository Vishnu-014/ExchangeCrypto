import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./styles";
import image from "../../assets/images/Saly-1.png"

const HomeScreen =  (props) => {
    return (
        <View style={styles.root}>
            <Image style = {styles.image} source = {image} />
            <Text style= {{fontSize:24, fontWeight:'bold', marginTop:50, marginBottom:15}}>
                Welcome to ExchangeCrypto
            </Text>
            <Text style={{fontSize:20, textAlign: 'center', color:'#707070'}}>
                Inverst your virtual $100.000 and compete with others
            </Text>
        </View>

    );
};


export default HomeScreen;
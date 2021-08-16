import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";
const image = require('../../assets/images/Saly-31.png')
import styles from './styles';


const CoinExchangeScreen = () => {


    const route = useRoute();

    const isBuy = route?.params?.isBuy;
    const coinData = route?.params?.coinData;


    return(
        <View style={styles.root}>
            <Text style={styles.title}>
                {isBuy ? 'Buy' : 'Sell'}
                {coinData?.name}
                </Text>
            <Text style={styles.subtitle}>
                1 {coinData?.symbol}
                {' = '}
                ${coinData?.currentPrice}
                </Text>
                <Image style = {styles.image} source={image}/>


                <View style={{flexDirection: 'row', justifyContent: 'space-between', width:'100%', alignItems:'center'}}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='0'/>
                        <Text>{coinData?.symbol}</Text>
                    </View>
                    <Text style={{fontSize: 30}}>=</Text>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='0'/>
                        <Text>{coinData?.symbol}</Text>
                    </View>
                </View>



        </View>
    );
};


export default CoinExchangeScreen;
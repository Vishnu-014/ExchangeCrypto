import React from "react";
import {View, Text, Image, FlatList} from "react-native";
import styles from "./styles";
import PortfolioCoin from "../../components/PortfolioCoin";
const image = require('../../assets/images/Saly-10.png')
// import image from "../../assets/images/Saly-10.png"
// import PortfolioCoinProps from "../../components/PortfolioCoin";


const portfolioCoins = [{
    id: '1',
    name: 'Virtual Dollars',
    image: 'https://picsum.photos/id/237/200/300',
    symbol: 'USD',
    amount: '69420',
    valueUSD: '69420',
},{
    id: '2',
    name: 'Bitcoin',
    image: 'https://picsum.photos/id/237/200/300',
    symbol: 'USD',
    amount: '1.12',
    valueUSD: '69420',
},{
    id: '3',
    name: 'Ethereum',
    image: 'https://picsum.photos/id/237/200/300',
    symbol: 'ETH',
    amount: '30',
    valueUSD: '30120',
},{
    id: '2',
    name: 'Bitcoin',
    image: 'https://picsum.photos/id/237/200/300',
    symbol: 'USD',
    amount: '1.12',
    valueUSD: '69420',
},{
    id: '2',
    name: 'Bitcoin',
    image: 'https://picsum.photos/id/237/200/300',
    symbol: 'USD',
    amount: '112',
    valueUSD: '69420',
},{
    id: '2',
    name: 'Bitcoin',
    image: 'https://picsum.photos/id/237/200/300',
    symbol: 'USD',
    amount: '1.12',
    valueUSD: '69420',
},{
    id: '2',
    name: 'Bitcoin',
    image: 'https://picsum.photos/id/237/200/300',
    symbol: 'USD',
    amount: '1.12',
    valueUSD: '69420',
},{
    id: '2',
    name: 'Bitcoin',
    image: 'https://picsum.photos/id/237/200/300',
    symbol: 'USD',
    amount: '1.12',
    valueUSD: '69420',
},{
    id: '2',
    name: 'Bitcoin',
    image: 'https://picsum.photos/id/237/200/300',
    symbol: 'USD',
    amount: '1.12',
    valueUSD: '69420',
},{
    id: '2',
    name: 'Bitcoin',
    image: 'https://picsum.photos/id/237/200/300',
    symbol: 'USD',
    amount: '1.12',
    valueUSD: '69420',
}]


const PortfolioScreen =  () => {
    return (
        <View style= {styles.root}>
            <FlatList 
                style={{width: '100%'}}
                data={portfolioCoins}
                renderItem={({item}) => <PortfolioCoin portfolioCoin={item} />} 
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle = {{alignItems: 'center'}}
                ListHeaderComponent={() => (
                    <>
                    <Image style={styles.image} source={image}/>
                    <View style={styles.balanceContainer}>
                    <Text style={styles.label}>Portfolio balance</Text>
                    <Text style={styles.balance}>69420</Text>
                    </View>
                    </>
                )}   
            />
        </View>
    
    );
};


export default PortfolioScreen;




//{{flex: 1, justifyContent: 'center', alignItems: 'center'}}
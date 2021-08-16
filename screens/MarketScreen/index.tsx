import React from "react";
import {View, Text, Image, FlatList} from "react-native";
import styles from "./styles";
import MarketCoin from "../../components/MarketCoin";
const image = require('../../assets/images/Saly-17.png')
// import image from "../../assets/images/Saly-10.png"
// import PortfolioCoinProps from "../../components/PortfolioCoin";


const portfolioCoins = [{
    id: '1',
    name: 'Virtual Dollars',
    image: 'https://picsum.photos/id/237/200/300',
    symbol: 'USD',
    valueChange24H: -1.12,
    valueUSD: 59420,
},{
    id: '2',
    name: 'Bitcoin',
    image: 'https://picsum.photos/id/237/200/300',
    symbol: 'USD',
    valueChange24H: 3.54,
    valueUSD: 30120,
}]


const PortfolioScreen =  () => {
    return (
        <View style= {styles.root}>
            <FlatList 
                style={{width: '100%'}}
                data={portfolioCoins}
                renderItem={({item}) => <MarketCoin marketCoin={item} />} 
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle = {{alignItems: 'center'}}
                ListHeaderComponent={() => (
                    <>
                    <Image style={styles.image} source={image}/>
                    <Text style={styles.label}>Market</Text>
                    </>
                )}   
            />
        </View>
    
    );
};


export default PortfolioScreen;




//{{flex: 1, justifyContent: 'center', alignItems: 'center'}}
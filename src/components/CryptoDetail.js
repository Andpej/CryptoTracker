import React from 'react';
import { Text, View, Image } from 'react-native';
import CryptoCard from './CryptoCard';
import CryptoCardSection from './CryptoCardSection';
import { logos } from '../utils/CryptoLogos';


const CryptoDetail = ( {crypto} ) => {
const { nameStyle, symbolStyle, imageStyle, changeMinusStyle, changePlusStyle, priceStyle, upperSectionStyle } = styles;
const { name, symbol, price_usd, percent_change_1h, percent_change_24h, percent_change_7d } = crypto; 

return (

<CryptoCard>
    <CryptoCardSection>  
    <View style={upperSectionStyle}>
    <Image style={imageStyle} source={{ uri: logos[symbol]}}/>
    <Text style={symbolStyle}>{symbol} - </Text>
    <Text style={nameStyle}>{name}</Text>
    <Text style={priceStyle}>{price_usd} $</Text>
    </View>
    </CryptoCardSection>
    
    <CryptoCardSection>
        <View>
       <Text>1h change: <Text style={percent_change_1h < 0 ? changeMinusStyle : changePlusStyle}> {percent_change_1h} % </Text></Text>
       <Text>24h change: <Text style={percent_change_24h < 0 ? changeMinusStyle : changePlusStyle}> {percent_change_24h } % </Text></Text>
       <Text>7 days change: <Text style={percent_change_7d < 0 ? changeMinusStyle : changePlusStyle}> {percent_change_7d} % </Text></Text>
            </View>
        </CryptoCardSection>
    </CryptoCard>
);
};

const styles = {
    nameStyle: {
        fontSize: 15,
        marginTop: 8,
        marginRight: 10
    },
    symbolStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 8
    },
    priceStyle: {
        fontWeight: 'bold',
        marginTop: 9,
    },
    imageStyle: {
        width: 35,
        height: 35,  
        marginRight: 10   
    },
    changePlusStyle: {
        color: 'green',
        fontWeight: 'bold'
    },
    changeMinusStyle: {
        color: 'red',
        fontWeight: 'bold'
    },
    upperSectionStyle: {
        flexDirection: 'row',
        display: 'flex'
    }
}

export default CryptoDetail;
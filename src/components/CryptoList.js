import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import CryptoDetail from './CryptoDetail';

// Klasskomponent som sköter request för att hämta en lista av valutor och properties på dem.
// Är en klasskomponent eftersom den sköter states och inte bara visar någon statisk info.

 class CryptoList extends Component {
    
    state = { cryptos: [] };

     componentWillMount() {
         axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
        .then(response => this.setState({ cryptos : response.data }));
        }
             
        renderCryptos() {  
        return this.state.cryptos.map(crypto => 
        <CryptoDetail key={crypto.id} crypto={crypto}/>
        );
        }
        render() {
            return (
                <ScrollView>
                {this.renderCryptos()}  
                </ScrollView>
            );
        }
 }
 export default CryptoList;
import React from 'react';
import { View } from 'react-native';

// Komponent som representerar en mindre sektion av CryptoCard. 

const CryptoCardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export default CryptoCardSection;
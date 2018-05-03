import React from 'react';
<<<<<<< HEAD
import { View } from 'react-native'; 
=======
import { View } from 'react-native';
>>>>>>> e53452bc6d907a73959009740b37f3445b63b8fe

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

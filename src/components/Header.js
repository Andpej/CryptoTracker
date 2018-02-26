import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>CryptoTracker</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 55,
        marginBottom: 25,
        alignItems: "center",
    },
    header: {
        fontWeight: "bold",
        fontFamily: "futura",
        fontSize: 32,
        textDecorationLine: "underline"
    }
})

const { header, headerContainer } = styles;


export default Header;
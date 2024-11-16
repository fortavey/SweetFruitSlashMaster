import { observer } from "mobx-react-lite";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import points from "../mobx/points";

const CoinCount = () => {
    return <View style={styles.cont}>
        <Text style={styles.text}>{points.value}</Text>
        <Image style={styles.coin} source={require('../assets/coin.png')} />
    </View>
}

const styles = StyleSheet.create({
    cont: {
        position:'absolute',
        top: 60,
        right:20,
        alignItems:'center',
        justifyContent:'center'
    },
    coin: {
        width:30,
        height:30
    },
    text: {
        textAlign:'center',
        fontWeight:'700',
        fontSize:25,
        color:'#995E0F'
    }
})

export default observer(CoinCount)
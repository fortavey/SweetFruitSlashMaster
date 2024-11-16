import React from "react";
import { StyleSheet, Dimensions, View, Image, Text, TouchableOpacity  } from "react-native";
import pause from "../mobx/pause";
import { observer } from "mobx-react-lite";
import points from "../mobx/points";
import coins from "../mobx/coins";

const YouWin = ({setCurrentScreen}) => {
    return <View style={styles.rgba}>
            <Image source={require('../assets/youwin.png')} style={styles.pauseText} />
            <View style={styles.coins}>
                <Text style={styles.coinsText}>+{points.value}</Text>
                <Image source={require('../assets/coin.png')} />
            </View>
            <TouchableOpacity onPress={() => {
                coins.inc(points.value)
                setCurrentScreen('home')
            }} style={{marginBottom:20}}>
                <Image source={require('../assets/restart.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                coins.inc(points.value)
                setCurrentScreen('home')
            }}>
                <Image source={require('../assets/home.png')} />
            </TouchableOpacity>
        </View>
}

const styles = StyleSheet.create({
    rgba: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position:'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex:200,
        height: Dimensions.get('window').height,
        alignItems:'center',
        justifyContent:'center'
    },
    pauseText: {
        marginBottom: 50
    },
    coins: {
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    coinsText: {
        fontSize:50, 
        fontWeight:'700',
        color:'#995E0F',
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        marginRight:10,
    }
})

export default observer(YouWin)
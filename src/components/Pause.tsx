import React from "react";
import { StyleSheet, Dimensions, View, Image, TouchableOpacity  } from "react-native";
import pause from "../mobx/pause";
import { observer } from "mobx-react-lite";
import points from "../mobx/points";

const Pause = ({setCurrentScreen}) => {
    return <View style={styles.rgba}>
            <Image source={require('../assets/pauseText.png')} style={styles.pauseText} />
            <TouchableOpacity onPress={() => pause.change(false)} style={{marginBottom:20}}>
                <Image source={require('../assets/playBtn.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                pause.change(false)
                points.reset()
                setCurrentScreen('home')
            }}>
                <Image source={require('../assets/menuBtn.png')} />
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
    }
})

export default observer(Pause)
import React, { useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import Knife from "../components/Knife";
import music from "../mobx/music";
import { observer } from "mobx-react-lite";
import shop from "../mobx/shop";
import Shop from "../components/Shop";

const Home = ({whoosh, setCurrentScreen}) => {
    
    useEffect(() => {        
        if(music.value === null && whoosh) {
            music.change(true)
            whoosh.play()
            return
        }
        if(music.value && whoosh) whoosh.play()
        else {
            whoosh && whoosh.pause()
        }
    }, [music.value, whoosh])

    const renderMUsicBtn = () => {
        if(music.value || music.value == null) return <Image source={require('../assets/musicBtn.png')} style={styles.muzItem} />
        return <Image source={require('../assets/musicOffBtn.png')} style={styles.muzItem} />
    }

    return <><View style={styles.cont}>
        <ImageBackground source={require('../assets/board.png')} style={styles.board}>
        <TouchableOpacity style={styles.playBtnBox}  onPress={() => setCurrentScreen('game')}>
            <Image source={require('../assets/playBtn.png')} style={styles.playBtn} />
        </TouchableOpacity>
        </ImageBackground>
        <View style={styles.muzBtns}>

            <TouchableOpacity onPress={() => music.change(!music.value)}>
                {renderMUsicBtn()}
            </TouchableOpacity>

        </View>
        <Knife />
        
    </View>
    {shop.show && <Shop />}
    </>
}

const width = 220
const height = 868
const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    cont: {
        flex:1,
    },
    board: {
        width,
        height,
        position:'absolute',
        left: screenWidth / 2 - width / 2,
        bottom: 200
    },
    playBtn: {
        width:100,
        height:100
    },
    playBtnBox: {
        width:100,
        height:100,
        position:'absolute',
        bottom: -45,
        left: width/2 - 50
    },
    muzBtns:{
        marginTop:'auto',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:30,
        marginBottom:50
    },
    muzItem: {
        width:70,
        height:70
    }
})

export default observer(Home)
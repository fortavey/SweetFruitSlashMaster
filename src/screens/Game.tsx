import React, { useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import GameConveer from "../components/GameConveer";
import Knife from "../components/Knife";
import { observer } from "mobx-react-lite";
import pause from "../mobx/pause";
import Pause from "../components/Pause";
import CoinCount from "../components/CoinCount";
import YouWin from "../components/YouWin";
import shop from "../mobx/shop";
import Shop from "../components/Shop";

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

function playKnifeSound() {
    var whoosh = new Sound('knife.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          return;
        }
        whoosh.play((success) => {
        });
      });
      
      whoosh.setVolume(0.5);
      whoosh.setPan(1);
      whoosh.setNumberOfLoops(-1);
      whoosh.setCurrentTime(2.5);
      whoosh.pause();
      whoosh.stop(() => {
        whoosh.play();
      });
      
      whoosh.release();
}





const Game = ({setCurrentScreen}) => {
    const [click, setClick] = useState(true)
    const [win, setWin] = useState(false)

    const hitKnife = () => {
        setClick(!click)
        playKnifeSound()
    }

    return <>
        <Pressable style={styles.cont} onPress={() => hitKnife()}>
            <CoinCount />
            <ImageBackground source={require('../assets/board.png')} style={styles.board}>
                <GameConveer setWin={setWin} click={click} />
            </ImageBackground>
            <Knife />
        </Pressable>
        { pause.value && <Pause setCurrentScreen={setCurrentScreen} />}
        {win && <YouWin setCurrentScreen={setCurrentScreen} />}
        { shop.show && <Shop /> }
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
        bottom: -30
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
    },
    
})

export default observer(Game)
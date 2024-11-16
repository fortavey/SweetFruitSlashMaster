import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import Home from "./src/screens/Home";
import Game from "./src/screens/Game";
import getData from "./src/functions/getData";

var Sound = require('react-native-sound');
Sound.setCategory('Playback');



    



const Start = () => {
  const [currentScreen, setCurrentScreen] = useState('home')
  const [whoosh, setWhoosh] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if(whoosh === null) {
        setWhoosh(new Sound('Correle Carna - Cumbia Deli.mp3', Sound.MAIN_BUNDLE, (error) => {
            console.log("VKL");
            
          if (error) {
            return;
          }
          
        }))
    }
    if(whoosh) {
        whoosh.play((success) => {});
        whoosh.setVolume(0.5);
        whoosh.setPan(1);
        whoosh.setNumberOfLoops(10);
        whoosh.setCurrentTime(2.5);
        whoosh.pause();
        whoosh.stop(() => {
          whoosh.play();
        });
        
        whoosh.release();
    }
  }, [whoosh])

  const returnScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home setCurrentScreen={setCurrentScreen} whoosh={whoosh} />
      case 'game':
        return <Game setCurrentScreen={setCurrentScreen} />
    }
  }

  return (
    <>
      <ImageBackground source={require('./src/assets/bg.png')} style={styles.cont}>
        <Header currentScreen={currentScreen}/>
      {returnScreen()}
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  cont: {
    flex:1
  }
})

export default Start
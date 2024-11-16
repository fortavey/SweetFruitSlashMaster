import React from "react";
import { View, ImageBackground, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";
import pause from "../mobx/pause";
import shop from "../mobx/shop";

const Header = ({currentScreen}) => {
    return <ImageBackground source={require('../assets/headerBox.png')} style={styles.cont}>
    <View style={styles.levelRing}>
        <Text style={styles.levelText}>1</Text>
    </View>
    { currentScreen !== 'home' &&
    <TouchableOpacity style={styles.pauseBtn} onPress={() => pause.change(true)}>
      <Image source={require('../assets/pauseBtn.png')} style={styles.headerBtn} />
    </TouchableOpacity>
    }
    <TouchableOpacity style={styles.cartBtn} onPress={() => shop.change()}>
      <Image source={require('../assets/shopBtn.png')} style={styles.headerBtn} />
    </TouchableOpacity>
  </ImageBackground>
}

const ringDiametr = 100
const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  cont: {
    width: screenWidth,
    height: screenWidth / 3.35,
    zIndex:100
  },
  levelRing: {
    width:ringDiametr,
    height:ringDiametr,
    position:'absolute',
    bottom: -ringDiametr/2 + 4,
    left:screenWidth/2 - ringDiametr/2,
    borderWidth: 7,
    borderColor:'#995E0F',
    borderRadius: ringDiametr/2,
    backgroundColor: '#FFB26A',
    alignItems:'center',
    justifyContent:'center'
  },
  levelText: {
    fontSize:50,
    color: '#995E0F',
    fontWeight:'700'
  },
  headerBtn: {
    width: 70,
    height:70
  },
  pauseBtn: {
    position:'absolute',
    bottom: -35,
    left: 10
  },
  cartBtn: {
    position:'absolute',
    bottom: -35,
    right: 10
  }
})

export default Header
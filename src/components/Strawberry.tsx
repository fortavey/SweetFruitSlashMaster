import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import points from "../mobx/points";
import { observer } from "mobx-react-lite";

const imageItems = [
    require('../assets/strawberry/1.png'),
    require('../assets/strawberry/2.png'),
    require('../assets/strawberry/3.png'),
    require('../assets/strawberry/4.png'),
    require('../assets/strawberry/5.png'),
    require('../assets/strawberry/6.png'),
    require('../assets/strawberry/7.png'),
    require('../assets/strawberry/8.png'),
    require('../assets/strawberry/9.png'),
    require('../assets/strawberry/10.png'),
]

const centerPoint = Dimensions.get('window').height / 2

const Strawberry = ({position, click, parentY}) => {
    const [margins, setMargint] = useState([0,0,0,0,0,0,0,0,0,0])
    
    

    useEffect(() => {
        checkPosition()
    }, [click])

    

    const checkPosition = () => {
        const parentYPos = parentY+100000
        const childPos = parentYPos - position

        function isPosition(a, b) {
            return childPos > centerPoint+a && childPos < centerPoint+b
        }

        if(childPos > centerPoint && childPos < centerPoint+100) {
            points.add()
            if(isPosition(0, 10)) {
                setMargint([...margins].map((el, idx) => idx === 9 ? 10 : el))
            }
            if(isPosition(10, 20)) {
                setMargint([...margins].map((el, idx) => idx === 8 ? 10 : el))
            }
            if(isPosition(20, 30)) {
                setMargint([...margins].map((el, idx) => idx === 7 ? 10 : el))
            }
            if(isPosition(30, 40)) {
                setMargint([...margins].map((el, idx) => idx === 6 ? 10 : el))
            }
            if(isPosition(40, 50)) {
                setMargint([...margins].map((el, idx) => idx === 5 ? 10 : el))
            }
            if(isPosition(50, 60)) {
                setMargint([...margins].map((el, idx) => idx === 4 ? 10 : el))
            }
            if(isPosition(60, 70)) {
                setMargint([...margins].map((el, idx) => idx === 3 ? 10 : el))
            }
            if(isPosition(70, 80)) {
                setMargint([...margins].map((el, idx) => idx === 2 ? 10 : el))
            }
            if(isPosition(80, 90)) {
                setMargint([...margins].map((el, idx) => idx === 1 ? 10 : el))
            }
            if(isPosition(90, 100)) {
                setMargint([...margins].map((el, idx) => idx === 0 ? 10 : el))
            }
        }
    }

    

    return <View style={{...styles.cont, bottom: position}}>
        <View><Image source={imageItems[0]} style={{...styles.imageItem, marginTop: margins[0]}} /></View>
        <View><Image source={imageItems[1]} style={{...styles.imageItem, marginTop: margins[1]}} /></View>
        <View><Image source={imageItems[2]} style={{...styles.imageItem, marginTop: margins[2]}} /></View>
        <View><Image source={imageItems[3]} style={{...styles.imageItem, marginTop: margins[3]}} /></View>
        <View><Image source={imageItems[4]} style={{...styles.imageItem, marginTop: margins[4]}} /></View>
        <View><Image source={imageItems[5]} style={{...styles.imageItem, marginTop: margins[5]}} /></View>
        <View><Image source={imageItems[6]} style={{...styles.imageItem, marginTop: margins[6]}} /></View>
        <View><Image source={imageItems[7]} style={{...styles.imageItem, marginTop: margins[7]}} /></View>
        <View><Image source={imageItems[8]} style={{...styles.imageItem, marginTop: margins[8]}} /></View>
        <View><Image source={imageItems[9]} style={{...styles.imageItem, marginTop: margins[9]}} /></View>
    </View>
}

const styles = StyleSheet.create({
    cont: {
        position:'absolute',
        left: 50 - 63.39/2,
        width: 63.39,
        minHeight: 100
    },
    imageItem: {
        width: 63.39,
        minHeight: 10,
    }
})

export default observer(Strawberry)
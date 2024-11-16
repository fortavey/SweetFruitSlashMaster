import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Strawberry from "./Strawberry";
import pause from "../mobx/pause";

const screenHeight = Dimensions.get('window').height

const GameConveer = ({click, setWin}) => {
    const [blockPosition, setBlockPosition] = useState(screenHeight)
    const [parentY, setParentY] = useState(-99999)
    const [stopPoint, setStopPoint] = useState(5500)

    const handleLayout = (event) => {
        const {y} = event.nativeEvent.layout
        setParentY(y);
    }


    useEffect(() => {
        if((parentY+100000) > stopPoint) {
            setWin(true)
            return
        }
        
       requestAnimationFrame(() => {
            if(!pause.value) setBlockPosition(blockPosition-3)
        })
    }, [blockPosition, pause.value])


    return <View style={{...styles.cont, bottom: blockPosition}} onLayout={handleLayout}>
        <Strawberry parentY={parentY} click={click} position={100} />
        <Strawberry parentY={parentY} click={click} position={400} />
        <Strawberry parentY={parentY} click={click} position={700} />
        <Strawberry parentY={parentY} click={click} position={1000} />
        <Strawberry parentY={parentY} click={click} position={1400} />
        <Strawberry parentY={parentY} click={click} position={1700} />
        <Strawberry parentY={parentY} click={click} position={2000} />
        <Strawberry parentY={parentY} click={click} position={2400} />
        <Strawberry parentY={parentY} click={click} position={2800} />
        <Strawberry parentY={parentY} click={click} position={3200} />
        <Strawberry parentY={parentY} click={click} position={3700} />
        <Strawberry parentY={parentY} click={click} position={4100} />
        <Strawberry parentY={parentY} click={click} position={4500} />
        </View>
}

const styles = StyleSheet.create({
    cont: {
        width: 100,
        height: 100000,
        position:'absolute',
        left: 110 - 50,
    }
})

export default GameConveer
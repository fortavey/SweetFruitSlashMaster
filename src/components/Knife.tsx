import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const knifes = [
    require('../assets/knifes/1.png'),
    require('../assets/knifes/2.png'),
    require('../assets/knifes/3.png'),
    require('../assets/knifes/4.png'),
    require('../assets/knifes/5.png'),
]

const Knife = () => {
const [currentKnife, setCurrentKnife] = useState(0)


    return <View style={styles.cont}>
        <Image source={knifes[currentKnife]} />
    </View>
}

const styles = StyleSheet.create({
    cont: {
        width:275,
        height:70,
        position:'absolute',
        bottom: Dimensions.get('window').height / 2 - 35,
        right:5
    }
})

export default Knife
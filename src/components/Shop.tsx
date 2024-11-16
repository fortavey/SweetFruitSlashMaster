import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, View, ImageBackground, Text, TouchableOpacity, Image  } from "react-native";
import { observer } from "mobx-react-lite";
import shop from "../mobx/shop";
import coins from "../mobx/coins";
import knifes from "../mobx/knifes";

const knifesList = [
    {img: require('../assets/knifeShop/1.png'), price: 0},
    {img: require('../assets/knifeShop/2.png'), price: 700},
    {img: require('../assets/knifeShop/3.png'), price: 1500},
    {img: require('../assets/knifeShop/4.png'), price: 3000},
    {img: require('../assets/knifeShop/5.png'), price: 5000},
]

const fruitsList = [
    {img: require('../assets/fruitsShop/1.png'), price: 0},
    {img: require('../assets/fruitsShop/2.png'), price: 1000},
    {img: require('../assets/fruitsShop/3.png'), price: 2000},
    {img: require('../assets/fruitsShop/4.png'), price: 3000},
    {img: require('../assets/fruitsShop/5.png'), price: 4000},
]
const Shop = () => {
const [type, setType] = useState('knife')
const [prodArr, setProdArr] = useState([])
const [index, setIndex] = useState(0)

useEffect(() => {
    if(type === 'knife') setProdArr(knifesList)
    if(type === 'fruits') setProdArr(fruitsList)
}, [type])

const renderProd = () => {
    return <Image source={prodArr[index]?.img} />
}

const changeIndex = (bool) => {
    if(bool){
        index === 4 ? setIndex(0) : setIndex(index+1)
    }else {
        index === 0 ? setIndex(4) : setIndex(index-1)
    }
}

const renderBuyOrUse = () => {
    if(knifes.value >= index) return (
        <TouchableOpacity onPress={() => knifes.setCurrent(index)}>
            <Image source={require('../assets/use.png')} />
        </TouchableOpacity>
    )
    else return (
        <TouchableOpacity>
            <Image source={require('../assets/buy.png')} />
        </TouchableOpacity>
    )
}

    return <View style={styles.rgba}>
            <View style={{...styles.coins, position: 'absolute', top: 60, width: '100%', justifyContent:'center', backgroundColor:'rgba(255,255,255,0.3)', paddingVertical:5}}>
                <Text style={styles.coinsText}>{coins.value}</Text>
                <Image source={require('../assets/coin.png')} style={{width:40, height:40}} />
            </View>
            <ImageBackground style={styles.cont} source={require('../assets/boardShop.png')}>
            <Image source={require('../assets/shopText.png')} style={styles.shopText} />
                <TouchableOpacity style={styles.close} onPress={() => shop.change()}>
                    <Image source={require('../assets/close.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.left} onPress={() => changeIndex(false)}>
                    <Image source={require('../assets/left.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.right} onPress={() => changeIndex(true)}>
                    <Image source={require('../assets/right.png')} />
                </TouchableOpacity>
                <View style={styles.categories}>
                    <TouchableOpacity onPress={() => setType('knife')}>
                        <Image source={require('../assets/knifesShop.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setType('fruits')}>
                        <Image source={require('../assets/fruitsShop.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.productBlock}>
                    {renderProd()}
                </View>
                <View style={styles.buyBlock}>
                    <View style={styles.coins}>
                        <Text style={styles.coinsText}>{prodArr[index]?.price}</Text>
                        <Image source={require('../assets/coin.png')} style={{width:40, height:40}} />
                    </View>
                    {renderBuyOrUse()}
                </View>
            </ImageBackground>
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
    cont: {
        width: 355,
        height: 548
    },
    close: {
        position:'absolute',
        top: -30,
        right:-30
    },
    shopText: {
        position:'absolute',
        top:-50,
        right: 355/2 - 80
    },
    categories: {
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:60
    }, 
    left: {
        position:'absolute',
        top: 275,
        left:-20
    },
    right: {
        position:'absolute',
        top: 275,
        right:-20
    }, 
    productBlock: {
        alignItems:'center'
    },
    buyBlock: {
        marginHorizontal:'auto',
        marginTop:10,
        alignItems:'center'
    },
    coins: {
        flexDirection:'row',
        alignItems:'center',
    },
    coinsText: {
        fontSize:30, 
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

export default observer(Shop)
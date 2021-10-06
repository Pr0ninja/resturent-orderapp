import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, FlatList, ImageBackground, Platform, TouchableOpacity } from 'react-native'
import { dimensionsCheck, height, width } from '../../contant/Constant';
import { TableData } from '../../contant/FakeData';

const TableBookingPage = () => {
    const [check, setCheck] = useState("")
    const navigation = useNavigation()

    useEffect(() => {
        setCheck(dimensionsCheck())
           }, [])


    const renderItem2 = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} onPress={() =>navigation.navigate("FoodSection")} style={{ height: width * 0.26, width: width * 0.26, backgroundColor: "skyblue", margin: width * 0.02, elevation: 2, borderRadius: width * 0.02, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>{item.status}</Text>
            </TouchableOpacity>)
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/image/background.jpg')} style={{ width: '100%', resizeMode: 'cover', height: height * 0.33 }} blurRadius={2}>
                {/* <Text style={{ fontSize: 20, color: "white" }} > width {width} {"\n"} height {height}</Text> */}
            </ImageBackground>
            <View style={{ margin: width * 0.05, flex: 1 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={TableData}
                    renderItem={renderItem2}
                    numColumns={3}
                />
            </View>
        </View>
    )
}

export default TableBookingPage;

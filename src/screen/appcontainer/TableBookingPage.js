import React, { useState } from 'react'
import { View, Text, Image, ScrollView, FlatList, ImageBackground, Platform, TouchableOpacity } from 'react-native'
import { height, width } from '../../contant/Constant';
import { TableData } from '../../contant/FakeData';

const TableBookingPage = () => {
    const [check, setCheck] = useState(false)
    const [isactive, setIsactive] = useState(false)
    const CustomBox = (props) => {

        const handlePress = () => {
            setIsactive(!isactive);
            props.onPress(!isactive);
        }
        return (
            <TouchableOpacity onPress={handlePress} style={{ height: width * 0.26, width: width * 0.26, backgroundColor: props.text == "ready" ? "pink" : "skyblue", margin: width * 0.02, elevation: 2, borderRadius: width * 0.02, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>{props.text}</Text>
            </TouchableOpacity>
        )
    }

    const renderItem2 = (item, index) => {
        return <CustomBox text={item.item.status} onPress={(val) => {
            console.log(val)
        }} />
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/image/background.jpg')} style={{ width: '100%', resizeMode: 'cover', height: height * 0.3 }} blurRadius={2}>

            </ImageBackground>
            {/* <View style={{flex:1,backgroundColor:"blue",borderTopRightRadius:50,borderTopLeftRadius:50}}> */}
            <View style={{ margin: width * 0.05, flex: 1 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={TableData}
                    renderItem={renderItem2}
                    numColumns={3}
                />
            </View>
            {/* </View> */}


        </View>
    )
}

export default TableBookingPage;

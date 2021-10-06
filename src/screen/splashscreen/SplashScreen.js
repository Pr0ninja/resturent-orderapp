import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import Video from 'react-native-video'
import { useNavigation } from '@react-navigation/core'

import { dimensionsCheck, height, width } from "../../contant/Constant"

export default function SplashScreen() {
    const navigation = useNavigation()
    const [check, setCheck] = useState("")
    useEffect(() => {
        setCheck(dimensionsCheck())
        setTimeout(() => {
            navigation.navigate("Login")
        }, 8000);
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor='rgba(52, 52, 52, 1)' />
            <Video source={require("../../assets/video/splash.mp4")} style={{ height: height, width: width, opacity: 0.6 }} resizeMode="cover" />
            <View style={{ width: width, height: height, position: "absolute", justifyContent: "center", alignItems: "center" }}>
                <View style={{ marginHorizontal: width * 0.02, marginTop: width * 0.3 }}>
                    <Text style={{ color: check == "mobile" ? "white" : "#f5f5f5", fontSize: width * 0.08, fontWeight: "bold", textAlign: "center" }}>Resturent Order App</Text>
                    <Text style={{ color: check == "mobile" ? "white" : "white", fontSize: width * 0.02, fontWeight: "bold", textAlign: "right" }}>{check}</Text>
                </View>
            </View>
        </View>

    )
}

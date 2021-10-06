import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Colors } from "../../contant/colors"
import { borderradious, dimensionsCheck, elevation, height, width } from '../../contant/Constant'
import { useNavigation } from '@react-navigation/core'
import Toast from "react-native-simple-toast"
export default function Login() {
    const navigation = useNavigation()
    const [check, setCheck] = useState("")
  

    useEffect(() => {
        setCheck(dimensionsCheck())
        setTimeout(() => {
            navigation.navigate("Login")
        }, 10000);
    }, [])



    const styles = StyleSheet.create({

        inputbox: { height: check == "mobile" ? height * 0.07 : height * 0.077, width: width * 0.7, borderRadius: width * 0.02, borderColor: Colors.blue, borderWidth: 1, paddingLeft: width * 0.03, justifyContent: "center" },
        loginButton: { height: check == "mobile" ? height * 0.07 : height * 0.077, width: width * 0.7, borderRadius: width * 0.02, justifyContent: "center", alignItems: "center" }

    })

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ height: check == "mobile" ? height * 0.5 : height * 0.6, width: width * 0.8, backgroundColor: Colors.white, borderRadius: borderradious, elevation: elevation }}>
                <View style={{ flex: 0.8, justifyContent: "flex-end", alignItems: "center" }}>
                    <View style={{ height: "80%", width: "85%" }}>
                        <Image source={require("../../assets/icon/Welcome.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                    </View>
                </View>
                <View style={{ flex: 2.5, justifyContent: "space-evenly", alignItems: "center" }}>
                    <View style={{}} >
                        <View style={[styles.inputbox]}>
                            <TextInput placeholder="Enter Email" style={{ fontSize: width * 0.035 }} />
                        </View>
                        <View style={[styles.inputbox, { marginTop: width * 0.03 }]}>
                            <TextInput placeholder="Enter Password" style={{ fontSize: width * 0.035 }} />
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("TableBookingPage")} style={[styles.loginButton, { backgroundColor: Colors.blue }]}>
                        <Text style={{ color: Colors.white, fontWeight: "bold", letterSpacing: 1, fontSize: height * 0.03 }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.5, flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ fontSize: height * 0.02, color: Colors.greyText, fontWeight: "bold", }}>Don't have an Account?</Text>
                    <Text onPress={() => Toast.show("Contact Your Manager", Toast.LONG)} style={{ fontSize: height * 0.022, marginLeft: width * 0.01, color: Colors.blue, fontWeight: "bold", textDecorationLine: 'underline' }}>Resister</Text>
                </View>

            </View>
        </View>
    )
}


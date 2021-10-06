import React from 'react'
import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import { Colors } from "../../contant/colors"
import { borderradious, elevation, height, width } from '../../contant/Constant'
import { useNavigation } from '@react-navigation/core'

export default function SignUp() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ height: height * 0.6, width: width * 0.85, backgroundColor: Colors.white, borderRadius: borderradious, elevation: elevation }}>
                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ height: "80%", width: "85%" }}>
                        <Image source={require("../../assets/icon/Register.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                    </View>
                </View>
                <View style={{ flex: 2.5, justifyContent: "space-evenly", alignItems: "center" }}>
                    <View style={{}} >
                        <View style={[styles.inputbox]}>
                            <TextInput placeholder="Enter Email" />
                        </View>
                        <View style={[styles.inputbox, { marginTop: width * 0.03 }]}>
                            <TextInput placeholder="Enter Password" />
                        </View>
                        <View style={[styles.inputbox, { marginTop: width * 0.03 }]}>
                            <TextInput placeholder="Enter Password" />
                        </View>
                    </View>
                    <View style={[styles.loginButton, { backgroundColor: Colors.blue }]}>
                        <Text style={{ color: Colors.white, fontWeight: "bold", letterSpacing: 1, fontSize: width * 0.05 }}>Register</Text>
                    </View>
                </View>
                <View style={{ flex: 0.5, flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ fontSize: width * 0.038, color: Colors.greyText, fontWeight: "bold", }}>You have an Account?</Text>
                    <Text onPress={() => navigation.navigate("Login")} style={{ fontSize: width * 0.04, marginLeft: width * 0.01, color: Colors.blue, fontWeight: "bold", textDecorationLine: 'underline' }}>Login</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    inputbox: { height: width * 0.13, width: width * 0.7, borderRadius: width * 0.02, borderColor: Colors.blue, borderWidth: 1, paddingLeft: width * 0.03, justifyContent: "center" },
    loginButton: { height: width * 0.13, width: width * 0.7, borderRadius: width * 0.02, justifyContent: "center", alignItems: "center" }

})

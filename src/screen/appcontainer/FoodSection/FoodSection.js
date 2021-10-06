import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, FlatList, ImageBackground, Platform, TouchableOpacity, StyleSheet } from 'react-native'
import { height } from '../../../contant/Constant';
import TopTab from './toptab/TopTab';

export default function FoodSection() {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../../assets/banner/b10.jpg')} style={{ width: '100%', resizeMode:"cover", height: height * 0.33 }} blurRadius={1.4}>
                {/* <Text style={{ fontSize: 20, color: "white" }} > width {width} {"\n"} height {height}</Text> */}
            </ImageBackground>
            <View style={{ flex: 1 }}>
                <TopTab />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})

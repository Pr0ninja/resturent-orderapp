import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Desert from './Desert';
import Main_course from './Main_course';
import Starter from './Starter';
import Drinks from './Drinks';
import { height, width } from '../../../../contant/Constant';
import {Colors} from "../../../../contant/colors"
const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: height*0.017,fontWeight:"bold" },
                tabBarStyle: { backgroundColor:Colors.black,opacity:0.9 },
                tabBarActiveTintColor:Colors.white,
                tabBarIndicatorStyle:{backgroundColor:"gray",height:height*0.005}
            }}
        >
            <Tab.Screen name="Starter" component={Starter} />
            <Tab.Screen name="Main course" component={Main_course} />
            <Tab.Screen name="Desert" component={Desert} />
            <Tab.Screen name="Drinks" component={Drinks} />
        </Tab.Navigator>
    )
}

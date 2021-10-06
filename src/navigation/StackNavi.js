import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/splashscreen/SplashScreen';
import TableBookingPage from '../screen/appcontainer/TableBookingPage';
import Login from '../screen/authPages/Login';
import SignUp from '../screen/authPages/SignUp';
import FoodSection from '../screen/appcontainer/FoodSection/FoodSection';


const Stack = createNativeStackNavigator();

export default function StackNavi() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="TableBookingPage" component={TableBookingPage} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="FoodSection" component={FoodSection} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import ScreenPath from "../common/ScreenPath";
import HomeScreen from "../screens/main/home/HomeScreen";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = ({ navigation }) => {
    return (
        <HomeStack.Navigator
            initialRouteName={ScreenPath.Home.Dashboard}
            screenOptions={{
                headerShown: false,
            }}>
            <HomeStack.Screen
                name={ScreenPath.Home.Dashboard}
                component={HomeScreen}
            />
        </HomeStack.Navigator>
    );
};

export default HomeStackNavigator;

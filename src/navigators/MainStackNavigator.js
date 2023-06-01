import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import ScreenPath from "../common/ScreenPath";
import HomeScreen from "../screens/main/home/HomeScreen";

const AuthStack = createNativeStackNavigator();

const MainStackNavigator = ({ navigation }) => {
    return (
        <AuthStack.Navigator
            initialRouteName={ScreenPath.Auth.Login}
            screenOptions={{
                headerShown: false,
            }}>
            <AuthStack.Screen
                name={ScreenPath.Auth.Login}
                component={HomeScreen}
            />
        </AuthStack.Navigator>
    );
};

export default MainStackNavigator;

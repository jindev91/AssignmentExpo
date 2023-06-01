import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import ScreenPath from "../common/ScreenPath";
import LoginScreen from "../screens/auth/login/LoginScreen";

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = ({ navigation }) => {
    return (
        <AuthStack.Navigator
            initialRouteName={ScreenPath.Auth.Login}
            screenOptions={{
                headerShown: false,
            }}>
            <AuthStack.Screen
                name={ScreenPath.Auth.Login}
                component={LoginScreen}
            />
        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;

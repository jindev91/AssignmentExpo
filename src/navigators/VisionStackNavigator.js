import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import ScreenPath from "../common/ScreenPath";
import VisionScreen from "../screens/main/vision/VisionScreen";

const VisionStack = createNativeStackNavigator();

const VisionStackNavigator = ({ navigation }) => {
    return (
        <VisionStack.Navigator
            initialRouteName={ScreenPath.Vision.Dashboard}
            screenOptions={{
                headerShown: false,
            }}>
            <VisionStack.Screen
                name={ScreenPath.Vision.Dashboard}
                component={VisionScreen}
            />
        </VisionStack.Navigator>
    );
};

export default VisionStackNavigator;

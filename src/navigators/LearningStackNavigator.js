import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import ScreenPath from "../common/ScreenPath";
import LearningScreen from "../screens/main/learning/LearningScreen";

const LearningStack = createNativeStackNavigator();

const LearningStackNavigator = ({ navigation }) => {
    return (
        <LearningStack.Navigator
            initialRouteName={ScreenPath.Learning.Dashboard}
            screenOptions={{
                headerShown: false,
            }}>
            <LearningStack.Screen
                name={ScreenPath.Learning.Dashboard}
                component={LearningScreen}
            />
        </LearningStack.Navigator>
    );
};

export default LearningStackNavigator;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import ScreenPath from "../common/ScreenPath";
import HomeScreen from "../screens/main/home/HomeScreen";
import ChatScreen from "../screens/main/chat/ChatScreen";

const ChatStack = createNativeStackNavigator();

const ChatStackNavigator = ({ navigation }) => {
    return (
        <ChatStack.Navigator
            initialRouteName={ScreenPath.Chat.Dashboard}
            screenOptions={{
                headerShown: false,
            }}>
            <ChatStack.Screen
                name={ScreenPath.Chat.Dashboard}
                component={ChatScreen}
            />
        </ChatStack.Navigator>
    );
};

export default ChatStackNavigator;

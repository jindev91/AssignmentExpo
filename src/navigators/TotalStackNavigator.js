import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStyle from "../common/AppStyle";
import ScreenPath from "../common/ScreenPath";
import AppSplashScreen from "../screens/splashes/AppSplashScreen";
import AuthStackNavigator from "./AuthStackNavigator";
import MainTabNavigator from "./MainTabNavigator";

const TotalStack = createNativeStackNavigator();

const TotalStackNavigator = (props) => {
    return (
        <GestureHandlerRootView style={[AppStyle.container]}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <TotalStack.Navigator
                        initialRouteName={ScreenPath.Total.Splash}
                        screenOptions={{
                            headerShown: false,
                        }}>
                        <TotalStack.Screen
                            name={ScreenPath.Total.Splash}
                            component={AppSplashScreen}
                        />
                        <TotalStack.Screen
                            name={ScreenPath.Total.Auth}
                            component={AuthStackNavigator}
                        />
                        <TotalStack.Screen
                            name={ScreenPath.Total.Main}
                            component={MainTabNavigator}
                        />
                    </TotalStack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
};

export default TotalStackNavigator;

import React from "react";
import { View, Text } from "react-native";
import MainLayout from "../../../layouts/MainLayout";
import { Button } from "@react-native-material/core";
import AppStyle from "../../../common/AppStyle";
import Global from "../../../common/Global";
import ScreenPath from "../../../common/ScreenPath";
import { saveUserInfo } from "../../../common/StorageControl";

const LoginScreen = (props) => {
    const onTapLogin = async () => {
        Global.userInfo = {
            id: 1,
            name: 'tester'
        };

        await saveUserInfo(Global.userInfo);
        Global.totalNavigator?.navigate(ScreenPath.Total.Main, {
            screen: ScreenPath.Main.Home
        });
    }

    return (
        <MainLayout>
            <View style={[AppStyle.center, { flex: 1 }]}>
                <Text style={{marginBottom: 10}}>Login screen</Text>
                <Button title="Login" onPress={() => onTapLogin()} />
            </View>
        </MainLayout>
    )
};

export default LoginScreen;
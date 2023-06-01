import React from "react";
import { View, Text } from "react-native";
import MainLayout from "../../../layouts/MainLayout";
import { Button } from "@react-native-material/core";
import AppStyle from "../../../common/AppStyle";
import { removeUserInfo } from "../../../common/StorageControl";
import Global from "../../../common/Global";
import ScreenPath from "../../../common/ScreenPath";

const LearningScreen = (props) => {
    const onTapLogout = async () => {
        await removeUserInfo();
        Global.userInfo = null;
        
        Global.totalNavigator?.navigate(ScreenPath.Total.Auth, {
            screen: ScreenPath.Auth.Login
        });
    }

    return (
        <MainLayout avoid={true}>
            <View style={[AppStyle.center, { flex: 1 }]}>
                <Button title="Logout" onPress={() => onTapLogout()}/>
            </View>
        </MainLayout>
    )
};

export default LearningScreen;
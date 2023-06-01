import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ColorInfo from '../../common/ColorInfo';
import AppStyle from '../../common/AppStyle';
import Global from '../../common/Global';
import ScreenPath from '../../common/ScreenPath';
import { getUserInfo } from '../../common/StorageControl';

const AppSplashScreen = (props) => {
    const { navigation } = props;

    const onLoadInitData = async () => {
        Global.userInfo = await getUserInfo();
        if (Global.userInfo) {
            setTimeout(() => {
                Global.totalNavigator?.navigate(ScreenPath.Total.Main, {
                    screen: ScreenPath.Main.Home
                });
            }, 200);
        } else {
            setTimeout(() => {
                Global.totalNavigator?.navigate(ScreenPath.Total.Auth, {
                    screen: ScreenPath.Auth.Login
                });
            }, 200);
        }
    };

    useEffect(() => {
        Global.totalNavigator = navigation;
        onLoadInitData();
    }, []);

    return (
        <View style={[styles.container, AppStyle.center]}>
            <Text>this is splash screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroudColor: ColorInfo.white,
    },
});

export default AppSplashScreen;

import AsyncStorage from "@react-native-async-storage/async-storage"
import StorageKeys from "./StorageKeys";

export const removeUserInfo = async() => {
    await AsyncStorage.removeItem(StorageKeys.UseInfo);
}

export const getUserInfo = async () => {
    let userInfo = null;
    let temp = await AsyncStorage.getItem(StorageKeys.UseInfo);
    if (temp) {
        userInfo = JSON.parse(temp);
    }

    return userInfo;
}

export const saveUserInfo = async (userInfo) => {
    await AsyncStorage.setItem(StorageKeys.UseInfo, JSON.stringify(userInfo));
}
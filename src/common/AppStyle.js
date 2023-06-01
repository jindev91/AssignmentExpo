import { StyleSheet } from "react-native";
import ColorInfo from "./ColorInfo";

const AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorInfo.white,
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    flex_row: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    flex_row_start: {
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    paddingHorizontal: {
        paddingHorizontal: 16
    },
    
});

export default AppStyle;

import {StyleSheet} from "react-native";

const colors = {
    blue: "blue",
    green: "green",
    black: "black",
    gray: "gray",
    white: "white",
    purple: "purple",
}

export const allScreenStyles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: colors.gray,
    },

    card:{
        margin: 4,
        padding: 16,
        borderRadius: 12,
        backgroundColor: colors.white,
        shadowColor: colors.black,
    }
});

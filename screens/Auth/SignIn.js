import { View, Text, StyleSheet } from "react-native"
import {LinearGradient } from "expo-linear-gradient"

import IconAuth from "../../components/UI/IconAuth"

function SignIn() {
    return(
        <View style={styles.root}>
            <LinearGradient colors={['#5121b3', '#b61c76']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.gradient}>
                <IconAuth>SIGN IN</IconAuth>
            </LinearGradient>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    gradient: {
        height:"25%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
})

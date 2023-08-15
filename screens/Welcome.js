import { View, Text, StyleSheet, Image} from "react-native"
import {LinearGradient } from "expo-linear-gradient"

import Button from "../components/UI/Button"

function Welcome()  {

    function signUpHandler(){
        console.log("sign up")
    }

    return (
        <LinearGradient colors={['#5121b3', '#b61c76']} style={styles.root}>
            <Image source={ require("../assets/Red-truck.png") } style={styles.image} />
            <View>
                <Text style={styles.text}>WELCOME BACK!</Text>
                <Button style={styles.signIn} onPress={signUpHandler}>SIGN IN</Button>
                <Button style={styles.signUp} onPress={signUpHandler}>SIGN UP</Button>
            </View>
        </LinearGradient>
    )
}

export default Welcome

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 200, 
        height: 200
    },
    text: {
        color: "white",
        fontSize: 34,
        marginBottom: 30,
        textAlign: "center",
    },
    signIn: {
        backgroundColor: "red",
        width: 350,
    },
    signUp: {
        borderColor: "white",
        borderWidth: 1,
    }
})

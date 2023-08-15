import { StyleSheet, View, Text, Pressable } from "react-native"
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

function IconAuth({children}) {

    const navigation = useNavigation()

    function pressHandler() {
        navigation.goBack()
    }

    return(
        <View style={styles.view}>
            <Pressable style={({ pressed }) => [ styles.icon, pressed && styles.pressed]} onPress={pressHandler} >
                <Ionicons name="arrow-back" size={32} color="black" />
            </Pressable>
            <Text style={styles.Text} >{children}</Text>
        </View>
    )
}

export default IconAuth

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 50,
    },
    icon: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    Text:{
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
        marginLeft: 15,
    },
    pressed: {
        opacity: 0.7,
    },
})
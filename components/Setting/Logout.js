import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons';

function Logout() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Log Out</Text>
            <Ionicons name="log-out-outline" size={40} color="red" />
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    text: {
        color: "red",
        fontSize: 24,
        fontWeight: "bolc"
    }
})
import { View, Text, StyleSheet } from "react-native"

function WelcomeName() {
    return(
        <View>
            <Text style={styles.welcome}>Welcome,</Text>
            <Text style={styles.name}>Abebe Kebede</Text>
        </View>
    )
}

export default WelcomeName

const styles = StyleSheet.create({
    welcome: {
        fontSize: 24
    },
    name: {
        fontSize: 30,
        fontWeight: "bold"
    }
})
import { View, Text, StyleSheet } from "react-native"

function SettingCon() {
    return(
        <View style={styles.center}>
            <Text>HOME</Text>
        </View>
    )
}

export default SettingCon

const styles = StyleSheet.create({
    center: {
        flex: 1,
         justifyContent: "center",
         alignItems: "center"
    }
})
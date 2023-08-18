import { View, Text, StyleSheet } from "react-native"

function HistoryCon() {
    return(
        <View style={styles.center}>
            <Text>HISTORY</Text>
        </View>
    )
}

export default HistoryCon

const styles = StyleSheet.create({
    center: {
        flex: 1,
         justifyContent: "center",
         alignItems: "center"
    }
})
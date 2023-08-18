import { View, Text, StyleSheet } from "react-native"

function HomeCon() {
    return(
        <View style={styles.center}>
            <Text>HOME</Text>
        </View>
    )
}

export default HomeCon

const styles = StyleSheet.create({
    center: {
        flex: 1,
         justifyContent: "center",
         alignItems: "center"
    }
})
import { View, Text, StyleSheet } from "react-native"

function RewardCon() {
    return(
        <View style={styles.center}>
            <Text>REWARD</Text>
        </View>
    )
}

export default RewardCon

const styles = StyleSheet.create({
    center: {
        flex: 1,
         justifyContent: "center",
         alignItems: "center"
    }
})
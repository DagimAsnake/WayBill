import { View, Text, StyleSheet } from "react-native"

import HistoryLists from "../../components/History/HistoryLists"

function HistoryCon() {
    return(
        <View style={styles.center}>
            <HistoryLists />
        </View>
    )
}

export default HistoryCon

const styles = StyleSheet.create({
    center: {
        flex: 1,
        margin: 20,
    }
})
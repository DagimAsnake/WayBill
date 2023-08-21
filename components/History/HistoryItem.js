import { View, StyleSheet, Text } from "react-native"

function HistoryItem({Bol, Status, Date}) {
    return (
        <View style={styles.container}>
             <View style={styles.view}>
                <Text style={styles.text}>{Bol}</Text>
                <Text style={styles.text}>{Date}</Text>
                <Text style={[styles.text, Status === "Accepted" ? styles.green : styles.red  ]}>{Status}</Text>
            </View>
        </View>
    )
}

export default HistoryItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
    },
    view: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#909090",
        paddingHorizontal: 10,
    },
    text: {
      paddingVertical: 10,
      textAlign: "center",
    },
    green: {
        color: "green"
    },
    red: {
        color: "red"
    }
})
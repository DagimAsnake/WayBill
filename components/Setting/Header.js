import { View, Image, StyleSheet, Text } from "react-native"

function Header() {
    return(
        <View style={styles.container}>
            <Image source={require("../../assets/user-icon.png")} style={styles.image} />
            <View>
                <Text style={styles.name}>Abebe Kebede</Text>
                <Text style={styles.phone}>0911223344</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: "center",
        borderColor: "#909090",
        borderBottomWidth: 1,
        margin: 20,
        paddingBottom: 40
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    name: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        padding: 8,
    },
    phone: {
        textAlign: "center",
        color: "#909090"
    }
  });
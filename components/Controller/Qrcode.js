import { Image, StyleSheet, View, Text } from "react-native"

function Qrcode() {
    return(
        <View style={styles.container}>
            <View style={styles.view}>
                <View style={styles.imageContainer}>
                    <Image source={require("../../assets/qr-code.png")} style={styles.image} />
                </View>
                <Text style={styles.text}>Scan the QR Code</Text>
            </View>
        </View> 
    )
}

export default Qrcode

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    view: {
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 10,
        padding: 50,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
      },
    image: {
      width: 100,
      height: 100,
    },
    text:{
        fontSize: 24,
        marginTop: 10,
        color: "blue",
        textAlign: "center"
    }
  });
import { View, StyleSheet } from "react-native"

import WelcomeName from "../../components/Controller/WelcomName"
import Qrcode from "../../components/Controller/Qrcode"
import VideoFrame from "../../components/Controller/VideoFrame"

function HomeCon() {
    return(
        <View style={styles.center}>
            <WelcomeName />
            <Qrcode />
            <VideoFrame />
        </View>
    )
}

export default HomeCon

const styles = StyleSheet.create({
    center: {
        flex: 1,
        margin: 10,
        marginHorizontal: 20,
    }
})
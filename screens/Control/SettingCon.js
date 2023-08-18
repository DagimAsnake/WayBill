import { View, Text, StyleSheet } from "react-native"

import Header from "../../components/Setting/Header"
import SettingLists from "../../components/Setting/SettingLists"
import Logout from "../../components/Setting/Logout"

function SettingCon() {
    return(
        <View style={styles.center}>
            <Header />
            <SettingLists />
            <Logout />
        </View>
    )
}

export default SettingCon

const styles = StyleSheet.create({
    center: {
        flex: 1,
        margin: 10,
        marginTop: 50,
    }
})
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function SettingIcon({icon, text, nextIcon}) {
    const navigation = useNavigation();

    const [isToggled, setIsToggled] = useState(false);

    const handlePress = () => {
        if (text === 'GPS') {
            setIsToggled(!isToggled);
        } 
      };

    return(
        <Pressable onPress={handlePress} style={styles.pressable}>
            <View style={styles.container}>
                    <View style={styles.view}>
                        <Ionicons name={icon} size={40} color="blue" />
                        <Text style={styles.text}>{text}</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.textLanguage}>{text === "Language" ? "Amharic" : ""}</Text>
                        <Ionicons name={nextIcon} size={40} color="blue" />
                    </View>
            </View>
        </Pressable>
    )
}

export default SettingIcon

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginBottom: 5
    },
    view: {
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: "bold"
    },
    textLanguage: {
        marginLeft: 5,
        fontSize: 16,
    },
    pressable: {
        flex: 1
      }
})
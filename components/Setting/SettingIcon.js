import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function SettingIcon({icon, text, nextIcon}) {
    const navigation = useNavigation();

    const [isGpsToggled, setIsGpsToggled] = useState(false);
    const [isAuthToggled, setIsAuthToggled] = useState(false)

    const handlePress = () => {
        if (text === 'GPS') {
            setIsGpsToggled(!isGpsToggled);
        } else if(text === "Two-Step Authentication") {
            setIsAuthToggled(!isAuthToggled)
        } else if(text === "Edit Profile") {
            navigation.navigate("EditProfile")
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
                        <Ionicons 
                                name={
                                        (text === "GPS" && isGpsToggled) ||
                                        (text === "Two-Step Authentication" && isAuthToggled)
                                            ? "md-toggle"
                                            : nextIcon
                                    } 
                                    size={40} 
                                    color="blue" 
                        />
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
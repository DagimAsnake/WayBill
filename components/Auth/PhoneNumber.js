import PhoneInput from "react-native-phone-number-input";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

function PhoneNumber() {
    const [phone, setPhone] = useState("");

    return(
        <>
        <View style={styles.container}>
            <Text style={styles.label}>
                Phone
            </Text>
          <PhoneInput
            defaultValue={phone}
            defaultCode="ET"
            layout="first"
            onChangeFormattedText={(text) => {
                setPhone(text);
            }}
            containerStyle={styles.containerPhone}
            textContainerStyle={styles.text}
            withShadow
            autoFocus
          />
          </View>
        </>
    )
}

export default PhoneNumber

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
        },
      label: {
        fontSize: 16,
        color: "#909090",
        marginBottom: 8,
      },
    containerPhone: {
        borderColor: "#6559d4",
        borderWidth: 1,
        borderRadius: 4,
        width: 350,
    },
    text: {

    }
})
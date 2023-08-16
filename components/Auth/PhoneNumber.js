import PhoneInput from "react-native-phone-number-input";
import { StyleSheet, View, Text } from "react-native";

function PhoneNumber({ phone, onUpdateValue }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Phone</Text>
        <View style={styles.containerPhone}>
          <PhoneInput
            defaultValue={phone}
            defaultCode="ET"
            layout="first"
            onChangeFormattedText={onUpdateValue}
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.text}
            withShadow
          />
        </View>
      </View>
    </>
  );
}

export default PhoneNumber;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
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
    overflow: "hidden",
  },
  phoneInputContainer: {
    flex: 1,
  },
  text: {
    backgroundColor: "#E3E3E3",
    
  },
});
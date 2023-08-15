import { View, Text, TextInput, StyleSheet } from 'react-native';

function Input({label, keyboardType, secure, onUpdateValue, value, placeholder}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
container: {
    marginVertical: 10
    },
  label: {
    fontSize: 16,
    color: "#909090",
    marginBottom: 8,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderColor: "#6559d4",
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    width: 350,
  },
});
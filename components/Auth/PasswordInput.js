import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function PasswordInput({ label, keyboardType, onUpdateValue, value, placeholder }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#909090" style={styles.icon} />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={onUpdateValue}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#909090"
        />
        <TouchableOpacity onPress={toggleSecureTextEntry}>
          <Ionicons
            name={secureTextEntry ? 'eye-off' : 'eye'}
            size={20}
            color="#909090"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: "#909090",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#6559d4",
    borderWidth: 1,
    borderRadius: 4,
    width: 350,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 6,
    fontSize: 16,
    color: "#909090",
  },
  icon: {
    marginHorizontal: 10,
  },
});
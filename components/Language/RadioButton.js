import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function RadioButton({ label, isSelected, onSelect }) {
  const handleSelection = () => {
    onSelect(label);
  };

  return (
    <TouchableOpacity style={styles.radioButtonContainer} onPress={handleSelection}>
      {isSelected ? (
        <Ionicons name="radio-button-on" size={20} color="#6559d4" />
      ) : (
        <Ionicons name="radio-button-off" size={20} color="#909090" />
      )}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

export default RadioButton;

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginLeft: 8,
  },
});
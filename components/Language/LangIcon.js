import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import CountryFlag from "react-native-country-flag-icon";

import RadioButton from "./RadioButton";

function LangIcon({ icon, text, selectedLanguage, handleLanguageSelection }) {
  const handlePress = () => {
    handleLanguageSelection(text);
  };

  return (
    <Pressable onPress={handlePress} style={styles.pressable}>
      <View style={styles.container}>
        <View style={styles.view}>
            <CountryFlag isoCode={icon} size={25} />
            <Text style={styles.text}>{text}</Text>
        </View>
        <RadioButton
          isSelected={selectedLanguage === text}
          onSelect={() => handleLanguageSelection(text)}
        />
      </View>
    </Pressable>
  );
}

export default LangIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 5,
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
});
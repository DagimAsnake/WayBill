import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchInput from "../../../components/Language/SearchInput";
import LangLists from "../../../components/Language/LangLists";

function Language() {
  const [search, setSearch] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Amharic");

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "search":
        setSearch(enteredValue);
        break;
    }
  }

  function handleLanguageSelection(label) {
    setSelectedLanguage(label);
  }

  return (
    <View style={styles.contentContainer}>
      <SearchInput
        onUpdateValue={updateInputValueHandler.bind(this, "search")}
        value={search}
        keyboardType="default"
        placeholder="Search For Language"
      />
     <LangLists
        selectedLanguage={selectedLanguage}
        handleLanguageSelection={handleLanguageSelection}
      />
    </View>
  );
}

export default Language;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    paddingBottom: 50,
  },
});
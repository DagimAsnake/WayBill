import React from "react";
import { View, FlatList } from "react-native";
import LangIcon from "./LangIcon";

const LanguageLists = [
  {
    icon: "ET",
    text: "Amharic",
    id: "1"
  },
  {
    icon: "GB",
    text: "English",
    id: "2"
  },
  {
    icon: "SA",
    text: "Arabic",
    id: "3"
  },
  {
    icon: "FR",
    text: "France",
    id: "4"
  },
];

function LangLists({ selectedLanguage, handleLanguageSelection }) {
  const renderIconListItem = ({ item }) => {
    return (
      <LangIcon
        icon={item.icon}
        text={item.text}
        selectedLanguage={selectedLanguage}
        handleLanguageSelection={handleLanguageSelection}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={LanguageLists}
        renderItem={renderIconListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default LangLists;
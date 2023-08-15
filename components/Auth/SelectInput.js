import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import {Ionicons} from "@expo/vector-icons"

function SelectInput({options, handleOptionChange}) {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Type of Account</Text>
      <SelectDropdown
        data={options}
        onSelect={handleOptionChange}
        defaultButtonText="Select"
        buttonTextAfterSelection={(selectedItem) => {
          // Display the selected option
          return selectedItem;
        }}
        rowTextForSelection={(item) => {
          // Customize the option text if needed
          return item;
        }}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        renderDropdownIcon={() => {
          // Optionally customize the dropdown icon
          return <Ionicons name="chevron-down" size={26} color="black" />;
        }}
      />
    </View>
  );
}

export default SelectInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    color: "#909090",
    marginBottom: 8,
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: "#6559d4",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 6,
    width: 350
  },
  buttonTextStyle: {
    fontSize: 16,
    color: "#909090",
    textAlign: "left",
  },
});

import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Ionicons } from "@expo/vector-icons";

function SelectInput({ options, handleOptionChange, label, width }) {
  const buttonStyle = {
    borderWidth: 1,
    borderColor: "#6559d4",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 6,
    width: width ? width : 350, // Use the width prop if provided, otherwise use a default width of 350
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
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
        buttonStyle={buttonStyle}
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
    marginTop: 20,
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    color: "#909090",
    marginBottom: 8,
  },
  buttonTextStyle: {
    fontSize: 16,
    color: "#909090",
    textAlign: "left",
  },
});
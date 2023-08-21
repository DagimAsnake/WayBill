import { View, Text, StyleSheet } from "react-native"
import { useState } from "react"

import SelectInput from "../Auth/SelectInput";

function HistoryFilter({ handleStatusChange }) {
    const [selectedOption, setSelectedOption] = useState("All"); 

    const options = ["All", "Accepted", "Declined"];

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'select':
                setSelectedOption(enteredValue);
                handleStatusChange(enteredValue);
                break;
        }
      }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Filter</Text>
            <SelectInput width={150} options={options} handleOptionChange={updateInputValueHandler.bind(this, "select")} />
        </View>
    )
}

export default HistoryFilter

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    }, 
    text: {
        fontSize: 20,
        marginRight: 10,
    }
})
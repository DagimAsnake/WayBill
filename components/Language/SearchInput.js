import { View, Text, StyleSheet, TextInput } from "react-native"
import { Ionicons } from '@expo/vector-icons';

function SearchInput({label, keyboardType, secure, onUpdateValue, value, placeholder}) {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>
            {label}
            </Text>
            <View style={styles.inputContainer}>
                <Ionicons name="search-outline" size={20} color="#909090" style={styles.icon} />
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
        </View>
    )
}

export default SearchInput


const styles = StyleSheet.create({
    container: {
        marginVertical: 1,
      },
      label: {
        fontSize: 16,
        color: "#909090",
        marginBottom: 8,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#909090",
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
import { Pressable, StyleSheet, Text, View } from 'react-native';

function Button({ children, onPress, style }) {
  return (
    <Pressable
      style={({ pressed }) => [style, styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
});
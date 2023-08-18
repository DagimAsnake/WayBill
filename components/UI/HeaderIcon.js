import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function HeaderIcon() {
  return (
    <View style={styles.root}>
      <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
      <Ionicons name="search-outline" size={24} color="black" style={styles.icon} />
      <Image source={require("../../assets/user-icon.png")} style={styles.image} />
    </View>
  );
}

export default HeaderIcon;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10, 
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
});
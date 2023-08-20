import React from "react";
import { View, StyleSheet, Modal, Text, TouchableWithoutFeedback, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function EditModal({ modalVisible, closeModal }) {
  function handleOverlayPress() {
    closeModal();
  }

  return (
    <Modal visible={modalVisible} animationType="fade" transparent>
      <TouchableWithoutFeedback onPress={handleOverlayPress}>
        <View style={styles.modalContainer}>
        <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0.5)" />
          <View style={styles.modalContent}>
            <View style={styles.icon}>
                <Ionicons name="checkmark-circle-outline" size={40} color="green" />
            </View>
            <Text style={styles.modalText}>Profile Saved</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default EditModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 75,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  icon: {
    marginBottom: 20,
  }
});
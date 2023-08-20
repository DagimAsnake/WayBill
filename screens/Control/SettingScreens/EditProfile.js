import React, { useState } from "react";
import { View, ScrollView, Image, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import Input from "../../../components/Auth/Input";
import PhoneNumber from "../../../components/Auth/PhoneNumber";
import Button from "../../../components/UI/Button";
import EditModal from "../../../components/Modal/EditModal";

function EditProfile() {
  const [name, setName] = useState('Abebe Kebede');
  const [phone, setPhone] = useState('911223344');
  const [modalVisible, setModalVisible] = useState(false);

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'name':
        setName(enteredValue);
        break;
      case 'phone':
        setPhone(enteredValue);
        break;
    }
  }

  function submitHandler() {
    console.log(name, phone)
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.contentContainer}>
            <Image
              source={require("../../../assets/user-icon.png")}
              style={styles.image}
            />
            <Input
              label="Name"
              onUpdateValue={updateInputValueHandler.bind(this, "name")}
              value={name}
              keyboardType="default"
              placeholder="Full Name"
            />
            <PhoneNumber
              phone={phone}
              label="Phone Number"
              onUpdateValue={updateInputValueHandler.bind(this, "phone")}
            />
            <Button style={styles.saveButton} onPress={submitHandler}>
              SAVE
            </Button>
          </View>
        </ScrollView>
        <EditModal modalVisible={modalVisible} closeModal={closeModal} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    paddingBottom: 50,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  saveButton: {
    backgroundColor: "red",
    width: 350,
  },
});
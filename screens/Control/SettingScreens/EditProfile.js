import { View, ScrollView, Image, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useState } from "react";

import Input from "../../../components/Auth/Input";
import PhoneNumber from "../../../components/Auth/PhoneNumber";
import Button from "../../../components/UI/Button";

function EditProfile() {
  const [name, setName] = useState('Abebe Kebede');
  const [phone, setPhone] = useState('911223344');

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
    console.log(name, phone);
  }

  return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
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
  );
}

export default EditProfile;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    margin: 20,
    marginTop: 50,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  saveButton: {
    marginTop: 30,
    backgroundColor: "red",
    width: 350,
  },
});
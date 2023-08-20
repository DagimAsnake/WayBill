import { useState } from "react";
import { View, ScrollView, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";

import PasswordInput from "../../../components/Auth/PasswordInput";
import Button from "../../../components/UI/Button";
import EditModal from "../../../components/Modal/EditModal";

function ChangePassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
          case "new password":
            setNewPassword(enteredValue);
            break;
          case "confirm password":
            setConfirmPassword(enteredValue);
            break;
        }
      }
    
      function submitHandler() {
        console.log(newPassword, confirmPassword);
        setModalVisible(true);
      }

      function closeModal() {
        setModalVisible(false);
      }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.contentContainer}>
                        <PasswordInput
                            label="New Password"
                            onUpdateValue={updateInputValueHandler.bind(this, "new password")}
                            value={newPassword}
                            keyboardType="default"
                            placeholder="New Password"
                            secure
                        />
                        <PasswordInput
                            label="Confirm New Password"
                            onUpdateValue={updateInputValueHandler.bind(this, "confirm password")}
                            value={confirmPassword}
                            keyboardType="default"
                            placeholder="Confirm New Password"
                            secure
                        />
                        <Button style={styles.saveButton} onPress={submitHandler}>
                        SAVE
                        </Button>
                    </View>
                </ScrollView>
                <EditModal label={"New Password Saved"} modalVisible={modalVisible} closeModal={closeModal} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ChangePassword

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
      margin: 20,
      paddingBottom: 50,
    },
    saveButton: {
      backgroundColor: "red",
      width: 350,
    },
  });
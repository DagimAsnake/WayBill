import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import IconAuth from "../../components/UI/IconAuth";
import PhoneNumber from "../../components/Auth/PhoneNumber";
import PasswordInput from "../../components/Auth/PasswordInput";
import Button from "../../components/UI/Button";
import LinkScreen from "../../components/Auth/LinkScreen";

function SignIn({ navigation }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function pressHandler() {
    navigation.navigate("SignUp");
  }

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "phone":
        setPhone(enteredValue);
        break;
      case "password":
        setPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    console.log(phone, password);
  }

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#5121b3", "#b61c76"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.gradient}
      >
        <IconAuth>SIGN IN</IconAuth>
      </LinearGradient>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.view}>
          <PhoneNumber
            phone={phone}
            onUpdateValue={updateInputValueHandler.bind(this, "phone")}
          />
          <PasswordInput
            label="Password"
            onUpdateValue={updateInputValueHandler.bind(this, "password")}
            value={password}
            keyboardType="default"
            placeholder="Password"
            secure
          />
          <View style={styles.linkScreenContainer}>
            <LinkScreen onPress={pressHandler}>Forget Password?</LinkScreen>
          </View>
          <Button style={styles.signIn} onPress={submitHandler}>
            SIGN IN
          </Button>
        </View>
        <View style={styles.lastView}>
            <LinkScreen onPress={pressHandler}><Text style={{color: "black"}}>Don't have an account? </Text>SIGN UP</LinkScreen>
        </View>
      </ScrollView>
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  gradient: {
    height: "25%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  linkScreenContainer: {
    alignSelf: "flex-end", 
    paddingRight: 20, 
  },
  signIn: {
    backgroundColor: "red",
    width: 350,
  },
  lastView: {
    marginBottom: 20
  }
});
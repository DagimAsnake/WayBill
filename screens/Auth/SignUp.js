import { View, StyleSheet, ScrollView, Text } from "react-native"
import {LinearGradient } from "expo-linear-gradient"
import { useState } from "react"


import IconAuth from "../../components/UI/IconAuth"
import Input from "../../components/Auth/Input"
import SelectInput from "../../components/Auth/SelectInput"
import Button from "../../components/UI/Button"
import PhoneNumber from "../../components/Auth/PhoneNumber"
import PasswordInput from "../../components/Auth/PasswordInput"
import LinkScreen from "../../components/Auth/LinkScreen"

function SignUp({navigation}) {
    const [name, setName] = useState('')
    const [selectedOption, setSelectedOption] = useState(null); 
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const options = ["Option 1", "Option 2", "Option 3"];

    function pressHandler() {
        navigation.navigate("SignIn")
    }

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'name':
                setName(enteredValue);
                break;
            case 'select':
                setSelectedOption(enteredValue);
                break;
            case 'phone':
                setPhone(enteredValue);
                break;
            case 'password':
                setPassword(enteredValue);
                break; 
        }
      }

      function submitHandler() {
        console.log(selectedOption, name, phone, password)
      }

    return(
            <View style={styles.root}>
                <LinearGradient colors={['#5121b3', '#b61c76']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.gradient}>
                    <IconAuth>SIGN UP</IconAuth>
                </LinearGradient>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.view}>
                    <SelectInput options={options} handleOptionChange={updateInputValueHandler.bind(this, "select")} />
                    <Input 
                        label="Name"
                        onUpdateValue={updateInputValueHandler.bind(this, "name")}
                        value={name}
                        keyboardType="default"
                        placeholder="Full Name"
                    />
                    <PhoneNumber phone={phone} onUpdateValue={updateInputValueHandler.bind(this, "phone")} />
                    <PasswordInput 
                        label="Password"
                        onUpdateValue={updateInputValueHandler.bind(this, "password")}
                        value={password}
                        keyboardType="default"
                        placeholder="Password"
                        secure
                    />
                    <Button style={styles.signUp} onPress={submitHandler}>SIGN UP</Button>
                </View>
                <LinkScreen onPress={pressHandler}><Text style={{color: "black"}}>Have an account? </Text>SIGN IN</LinkScreen>
                </ScrollView>
            </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
      },
    root: {
        flex: 1,
    },
    gradient: {
        height:"25%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    view: {
        justifyContent: "center",
        alignItems: "center",
    },
    signUp: {
        backgroundColor: "red",
        width: 350,
    },
})
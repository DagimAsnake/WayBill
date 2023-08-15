import { View, StyleSheet, ScrollView } from "react-native"
import {LinearGradient } from "expo-linear-gradient"
import { useState } from "react"


import IconAuth from "../../components/UI/IconAuth"
import Input from "../../components/Auth/Input"
import SelectInput from "../../components/Auth/SelectInput"
import Button from "../../components/UI/Button"
import PhoneInput from "../../components/Auth/PhoneInput"

function SignUp() {
    const [name, setName] = useState('')
    const [selectedOption, setSelectedOption] = useState(null); 
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const options = ["Option 1", "Option 2", "Option 3"];

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
            <View style={styles.view}>
                <SelectInput options={options} handleOptionChange={updateInputValueHandler.bind(this, "select")} />
                <Input 
                    label="Name"
                    onUpdateValue={updateInputValueHandler.bind(this, "name")}
                    value={name}
                    keyboardType="default"
                    placeholder="Full Name"
                />
                 <Input 
                    label="Phone Number"
                    onUpdateValue={updateInputValueHandler.bind(this, "phone")}
                    value={phone}
                    keyboardType="phone-pad"
                    placeholder="Phone"
                />
                <Input 
                    label="Password"
                    onUpdateValue={updateInputValueHandler.bind(this, "password")}
                    value={password}
                    keyboardType="default"
                    placeholder="Password"
                    secure
                />
                <Button style={styles.signUp} onPress={submitHandler}>SIGN UP</Button>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
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
import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { registerUser } from "../../api/FirebaseApi";
import DatePicker from "react-native-datepicker";

export default function RegisterScreen({ navigation }) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.entryField}
        placeholder="First Name"
        textContentType="name"
        autoCompleteType="name"
        onChangeText={(fName) => setFName(fName)}
      />
      <TextInput
        style={styles.entryField}
        placeholder="Last Name"
        textContentType="familyName"
        autoCompleteType="name"
        onChangeText={(lName) => setLName(lName)}
      />
      <TextInput
        style={styles.entryField}
        placeholder="Email"
        autoCompleteType="email"
        textContentType="emailAddress"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.entryField}
        placeholder="Phone"
        autoCompleteType="tel"
        textContentType="telephoneNumber"
        onChangeText={(phone) => setPhone(phone)}
      />
      {/* <TextInput
        style={styles.entryField}
        placeholder="Birthdate"
        onChangeText={(birthDate) => setBirthDate(birthDate)}
      /> */}
      <DatePicker
        style={styles.dateEntry}
        showIcon={false}
        date={birthDate}
        placeholder="Date of Birth"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => setBirthDate(date)}
        format="MM/DD/YY"
        customStyles={{
          dateInput: {
            position: "absolute",
            left: 10,
            borderWidth: 0,
          },
        }}
      />
      <TextInput
        style={styles.entryField}
        placeholder="Password"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity
        style={styles.touchable}
        onPress={() =>
          registerUser(email, password, fName, lName, phone, birthDate)
        }
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "dodgerblue",
  },
  dateEntry: {
    width: "70%",
    margin: 10,
    borderColor: "grey",
    borderWidth: 1,
  },
  entryField: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    width: "70%",
    margin: 10,
  },
  touchable: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
  },
});

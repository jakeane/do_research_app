import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { authenticateUser } from "../../api/FirebaseApi";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/dr_logo.jpeg")}
      />

      <View style={styles.entryView}>
        <TextInput
          style={styles.entryField}
          placeholder="Email"
          autoCompleteType="email"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.entryField}
          placeholder="Password"
          autoCompleteType="password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => authenticateUser(email, password)}
      >
        <Text>Log In</Text>
      </TouchableOpacity>
      <Button
        style={styles.button}
        title="Go to RegisterScreen"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: "dodgerblue",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  entryField: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
  },
  entryView: {
    width: "70%",
    height: "15%",
    justifyContent: "space-evenly",
  },
  logo: {
    height: "25%",
    resizeMode: "contain",
    position: "absolute",
    top: 75,
  },
  touchable: {
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

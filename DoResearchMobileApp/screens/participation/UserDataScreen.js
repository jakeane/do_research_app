import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { logOut } from "../../api/FirebaseApi";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function UserDataScreen() {
  return (
    <View style={styles.container}>
      <Text>User Data Screen</Text>
      <Button title="Log out" onPress={() => logOut()} />
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
});

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

const ScreenStack = createStackNavigator();

export default function ContactScreen({ navigation }) {
  return (
    <ScreenStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "dodgerblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
        },
      }}
    >
      <ScreenStack.Screen
        name="Contact Us"
        component={ContactComponent}
        options={{
          headerLeft: () => (
            <Ionicons.Button
              name="ios-menu"
              size={25}
              backgroundColor="dodgerblue"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </ScreenStack.Navigator>
  );
}

function ContactComponent() {
  return (
    <View style={styles.container}>
      <Text>ContactScreen</Text>
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

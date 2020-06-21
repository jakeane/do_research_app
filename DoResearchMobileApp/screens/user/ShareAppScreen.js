import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

const ScreenStack = createStackNavigator();

export default function ShareAppScreen({ navigation }) {
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
        name="Share App"
        component={ShareAppComponent}
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

function ShareAppComponent() {
  return (
    <View style={styles.container}>
      <Text>ShareAppScreen</Text>
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

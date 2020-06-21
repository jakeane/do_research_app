import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import StudiesScreen from "../participation/StudiesScreen";
import TasksScreen from "../participation/TasksScreen";
import UserDataScreen from "../participation/UserDataScreen";
import { createStackNavigator } from "@react-navigation/stack";
import StudyEnrollScreen from "../participation/StudyEnrollScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function ParticipationStack({ navigation }) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
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
        <Stack.Screen
          name="Participation Tabs"
          component={ParticipationScreen}
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
        <Stack.Screen name="Enroll" component={StudyEnrollScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function ParticipationScreen({ navigation }) {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // if (route.name === "Studies") {
            //   iconName = focused
            //     ? "ios-information-circle"
            //     : "ios-information-circle-outline";
            // } else if (route.name === "Tasks") {
            //   iconName = focused ? "ios-list-box" : "ios-list";
            // }
            if (route.name === "Studies") {
              iconName = "ios-book";
            } else if (route.name === "Tasks") {
              iconName = "ios-list-box";
            } else if (route.name === "User Data") {
              iconName = "ios-information-circle";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "dodgerblue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Studies" component={StudiesScreen} />
        <Tab.Screen name="Tasks" component={TasksScreen} />
        <Tab.Screen name="User Data" component={UserDataScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
});

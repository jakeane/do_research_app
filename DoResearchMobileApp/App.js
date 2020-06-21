import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";

import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import ParticipationScreen from "./screens/user/ParticipationScreen";
import StudyEnrollScreen from "./screens/participation/StudyEnrollScreen";
import { initializeFirebase, logOut } from "./api/FirebaseApi";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import PaypalScreen from "./screens/user/PaypalScreen";
import ContactScreen from "./screens/user/ContactScreen";
import NotificationsScreen from "./screens/user/NotificationsScreen";
import ShareAppScreen from "./screens/user/ShareAppScreen";
import TermsOfServiceScreen from "./screens/user/TermsOfServiceScreen";
import ParticipantDrawer from "./components/DrawerComponents/ParticipantDrawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ScreenStack = createStackNavigator();

export default function App() {
  initializeFirebase();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Participation"
        drawerContent={(props) => <ParticipantDrawer {...props} />}
      >
        <Drawer.Screen name="Participation" component={ParticipationScreen} />
        <Drawer.Screen
          name="Paypal"
          component={PaypalScreen}
          options={{
            headerLeft: () => (
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="dodgerblue"
                onPress={() => navigation.openDrawer()}
              />
            ),
          }}
        />
        <Drawer.Screen name="Contact Us" component={ContactScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen
          name="Terms of Service"
          component={TermsOfServiceScreen}
        />
        <Drawer.Screen name="Share App" component={ShareAppScreen} />
      </Drawer.Navigator>
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
  input: {
    color: "gold",
  },
});

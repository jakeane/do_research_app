import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import { logOut } from "../../api/FirebaseApi";

export default function ParticipantDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{ uri: "https://picsum.photos/200/200" }}
                size={50}
              />
              <View style={{ marginLeft: 15 }}>
                <Title style={styles.title}>User's Name Here</Title>
                <Caption style={styles.caption}>more user stuff</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  3
                </Paragraph>
                <Caption style={styles.caption}>Enrolled</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  10
                </Paragraph>
                <Caption style={styles.caption}>Completed</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-group" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate("Participation");
              }}
              label="Participation"
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="paypal" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate("Paypal");
              }}
              label="Paypal"
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="email" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate("Contact Us");
              }}
              label="Contact Us"
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bell" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate("Notifications");
              }}
              label="Notifications"
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="book" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate("Terms of Service");
              }}
              label="Terms of Service"
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="share-variant" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate("Share App");
              }}
              label="Share App"
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
              onPress={() => logOut()}
            />
          )}
          label="Sign out"
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

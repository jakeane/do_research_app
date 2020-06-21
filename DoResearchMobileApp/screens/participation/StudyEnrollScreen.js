import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { enrollUserToStudy, studyToUserProfile } from "../../api/FirebaseApi";

export default function StudyEnrollScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.affiliation}>Affiliation: {item.affiliation}</Text>
      <Text style={styles.subheader}>Payment: ${item.payment}</Text>
      <Text style={styles.subheader}>Time: {item.time} minutes</Text>
      <Text style={styles.textbox}>{item.description}</Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => enrollUser(item, navigation)}
      >
        <Text>Enroll</Text>
      </TouchableOpacity>
    </View>
  );
}

async function enrollUser(item, navigation) {
  studyToUserProfile(item);
  enrollUserToStudy(item.key);
  navigation.navigate("Participation Tabs", { screen: "Tasks" });
}

const styles = StyleSheet.create({
  affiliation: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subheader: {
    fontStyle: "italic",
  },
  textbox: {
    padding: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  touchable: {
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

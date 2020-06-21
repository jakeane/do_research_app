import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ActivityIndicator,
} from "react-native";
import * as firebase from "firebase";
import { getStudies } from "../../api/FirebaseApi";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export default function StudiesScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [studyList, setStudyList] = useState([]);

  useEffect(() => {
    getStudies(onStudiesRecieved);
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  function onStudiesRecieved(studyList) {
    setStudyList(studyList);
    setLoading(false);
  }

  return (
    <FlatList
      data={studyList}
      renderItem={({ item }) => (
        <TouchableWithoutFeedback
          onPress={() => navigation.push("Enroll", { item: item })}
        >
          <View style={styles.listItem}>
            <Text>Study: {item.title}</Text>
            <Text>Affiliation: {item.affiliation}</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    height: 50,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10,
  },
});

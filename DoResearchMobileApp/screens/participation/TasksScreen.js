import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { getTasks } from "../../api/FirebaseApi";
import * as firebase from "firebase";

export default function TasksScreen() {
  const [loading, setLoading] = useState(true);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTasks(onTasksRecieved);
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  function onTasksRecieved(taskList) {
    setTaskList(taskList);
    setLoading(false);
  }

  return (
    // <View style={styles.container}>
    //   <Text>Studies Screen</Text>
    // </View>
    <FlatList
      data={taskList}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text>Study: {item.title}</Text>
          <Text>Type: {item.type}</Text>
        </View>
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

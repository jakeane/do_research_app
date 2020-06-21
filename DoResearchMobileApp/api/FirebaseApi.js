import * as firebase from "firebase";
import "firebase/firestore";

import ApiKeys from "../constants/ApiKeys";
import { useEffect } from "react";

export function initializeFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(ApiKeys.FirebaseConfig);
  }
}

export async function authenticateUser(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}

export async function registerUser(
  email,
  password,
  fName,
  lName,
  phone,
  birthDate
) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      firebase.firestore().collection("users").doc(email).set({
        firstName: fName,
        lastName: lName,
        phoneNumber: phone,
        birthDate: birthDate,
        balance: 0,
        type: "participant",
      });
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}

export async function logOut() {
  firebase.auth().signOut();
}

export async function getStudies(studiesRecieved) {
  firebase
    .firestore()
    .collection("studies")
    .get()
    .then((querySnapshot) => {
      const studyList = [];
      querySnapshot.forEach((documentSnapshot) => {
        studyList.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      studiesRecieved(studyList);
    });
}

export async function getTasks(tasksRecieved) {
  const userEmail = firebase.auth().currentUser.email;

  firebase
    .firestore()
    .collection("users")
    .doc(userEmail)
    .collection("participation")
    .get()
    .then((querySnapshot) => {
      const taskList = [];
      querySnapshot.forEach((documentSnapshot) => {
        taskList.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      tasksRecieved(taskList);
    });
}

export async function studyToUserProfile(item) {
  const userEmail = firebase.auth().currentUser.email;

  firebase
    .firestore()
    .collection("users")
    .doc(userEmail)
    .collection("participation")
    .doc(item.key)
    .set({
      completed: false,
      key: item.key,
      payment: item.payment,
      time: item.time,
      title: item.title,
      type: item.type,
    });
}

export async function enrollUserToStudy(key) {
  const uid = firebase.auth().currentUser.uid;

  firebase
    .firestore()
    .collection("studies")
    .doc(key)
    .collection("participation list")
    .doc(uid)
    .set({
      completed: false,
      uid: uid,
    });
}

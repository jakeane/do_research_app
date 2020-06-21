const functions = require("firebase-functions");
const express = require("express");
const app = express();

const fbAuth = require("./util/fbAuth");

const { getStudies } = require("./handlers/studies");
const { signUp, logIn } = require("./handlers/users");

app.get("/studies", getStudies);

app.post("/signup", signUp);

app.post("/login", logIn);

exports.api = functions.https.onRequest(app);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello World");
// });

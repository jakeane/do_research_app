const functions = require("firebase-functions");
const express = require("express");
const app = express();

const fbAuth = require("./util/fbAuth");

const { getStudies } = require("./handlers/studies");
const { signUp, logIn } = require("./handlers/users");
//const { getAuthUrl, next } = require("./handlers/google");
const { openGFAuth, getAuthCode } = require("./handlers/google");

const port = 3000;
app.listen(port, () => console.log(`Functions listening to port ${port}`));

app.get("/studies", getStudies);

app.post("/signup", signUp);

app.post("/login", logIn);

app.get("/openGFAuth", openGFAuth);
app.get("/oauthcallback", getAuthCode);

// exports.api = functions.https.onRequest(app);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello World");
// });

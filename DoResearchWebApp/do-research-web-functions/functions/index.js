const functions = require("firebase-functions");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const fbAuth = require("./util/fbAuth");

const { getStudies } = require("./handlers/studies");
const { signUp, logIn } = require("./handlers/users");
// const {
//   checkGoogleOAuth,
//   handleGoogleOAuthCode,
// } = require("./util/googleAuth");
// const { convertGF } = require("./handlers/googleForm");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/studies", getStudies);

app.post("/signup", signUp);

app.post("/login", logIn);

// app.get("/openGFAuth", checkGoogleOAuth, convertGF);
// app.get("/oauthcallback", handleGoogleOAuthCode);

const port = 3000;
app.listen(port, () => console.log(`Functions listening to port ${port}`));

// exports.api = functions.https.onRequest(app);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello World");
// });

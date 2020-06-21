const { db } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");
const { validateSignUpData, validateLogInData } = require("../util/validators");
firebase.initializeApp(config);

exports.signUp = (request, response) => {
  const newUser = {
    email: request.body.email,
    fName: request.body.fName,
    lName: request.body.lName,
    type: request.body.type,
    birthdate: request.body.birthdate,
    password: request.body.password,
    confirmPassword: request.body.confirmPassword,
  };

  const { errors, valid } = validateSignUpData(newUser);

  if (!valid) return response.status(400).json(errors);

  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, request.body.password)
    .then((data) => {
      db.doc(`/users/${newUser.email}`).set(newUser);
      return response
        .status(201)
        .json({ message: `user ${data.user.uid} signed up successfully` });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.logIn = (request, response) => {
  const user = {
    email: request.body.email,
    password: request.body.password,
  };

  const { errors, valid } = validateLogInData(user);

  if (!valid) return response.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return response.json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/wrong-password") {
        return response
          .status(403)
          .json({ general: "Wrong credentials. Please try again." });
      } else return response.status(500).json({ error: err.code });
    });
};

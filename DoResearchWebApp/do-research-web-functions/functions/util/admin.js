var admin = require("firebase-admin");

var serviceAccount = require("../../key/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://doresearch-8f881.firebaseio.com",
});

const db = admin.firestore();

module.exports = { admin, db };

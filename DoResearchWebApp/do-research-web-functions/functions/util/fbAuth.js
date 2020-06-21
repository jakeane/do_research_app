const admin = require("./admin");

module.exports = (request, response, next) => {
  let idToken;
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = request.headers.authorization.split("Bearer ")[1];
  } else {
    console.error("No token found");
    return response.status(403).json({ error: "Unauthorized" });
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      request.user = decodedToken;
      return admin
        .firestore()
        .collection("users")
        .where("userID", "==", request.user.uid)
        .limit(1)
        .get();
    })
    .then((data) => {
      req.user.email = data.docs[0].data().email;
      return next();
    })
    .catch((err) => {
      console.error("Error in token verification");
      return response.status(400).json(err);
    });
};

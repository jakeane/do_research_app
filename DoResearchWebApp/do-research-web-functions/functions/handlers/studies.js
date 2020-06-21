const { db } = require("../util/admin");

exports.getStudies = (request, response) => {
  db.collection("studies")
    .get()
    .then((data) => {
      let studies = [];
      data.forEach((doc) => {
        studies.push(doc.data());
      });
      return response.json(studies);
    })
    .catch((err) => console.error(err));
};

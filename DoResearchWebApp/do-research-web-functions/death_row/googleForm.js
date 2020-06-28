const { google } = require("googleapis");

exports.convertGF = async (req, res) => {
  console.log("starting convertGF");
  const auth = req.auth;

  // Make the API request. The request object is included here as 'resource'.
  const formUrl = req.body.formUrl;
  const script = google.script({ version: "v1", auth });
  const scriptId = "1Jw1cq_dQVdHKCRgpjyz3gzBT63J1OFQN5_FaO-u-8R_eJqtSHtzz_6W-";
  script.scripts.run(
    {
      auth: auth,
      resource: {
        function: "main",
        parameters: [formUrl],
        devMode: true,
      },
      scriptId: scriptId,
    },
    function (err, resp) {
      if (err) {
        // The API encountered a problem before the script started executing.
        console.log("The API returned an error: " + err);
        return;
      }
      if (resp.data.error) {
        // The API executed, but the script returned an error.

        // Extract the first (and only) set of error details. The values of this
        // object are the script's 'errorMessage' and 'errorType', and an array
        // of stack trace elements.
        const error = resp.error.details[0];
        console.log("Script error message: " + error.errorMessage);
        console.log("Script error stacktrace:");

        if (error.scriptStackTraceElements) {
          // There may not be a stacktrace if the script didn't start executing.
          for (let i = 0; i < error.scriptStackTraceElements.length; i++) {
            const trace = error.scriptStackTraceElements[i];
            console.log("\t%s: %s", trace.function, trace.lineNumber);
          }
        }
      } else {
        const form = resp.data.response.result;
        res.send(form);
      }
    }
  );

  // console.log("Response:", resp);

  // if (resp.error) {
  //   // The API executed, but the script returned an error.

  //   // Extract the first (and only) set of error details. The values of this
  //   // object are the script's 'errorMessage' and 'errorType', and an array
  //   // of stack trace elements.
  //   const error = resp.error.details[0];
  //   console.log("Script error message: " + error.errorMessage);
  //   console.log("Script error stacktrace:");

  //   if (error.scriptStackTraceElements) {
  //     // There may not be a stacktrace if the script didn't start executing.
  //     for (let i = 0; i < error.scriptStackTraceElements.length; i++) {
  //       const trace = error.scriptStackTraceElements[i];
  //       console.log("\t%s: %s", trace.function, trace.lineNumber);
  //     }
  //   }
  // } else {
  //   const form = resp.data.response.result;
  //   res.send(form);
  // }
};

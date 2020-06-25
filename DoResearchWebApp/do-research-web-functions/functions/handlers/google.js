const fs = require("fs");
const { google } = require("googleapis");

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/forms"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = "token.json";

exports.getAuthCode = (req, res) => {
  console.log("Code is:", req.query.code);
  const code = req.query.code;
  fs.readFile("credentials.json", (err, content) => {
    if (err) return console.log("Error loading client secret file:", err);
    // Authorize a client with credentials, then call the Google Apps Script API.
    const credentials = JSON.parse(content);
    const { client_secret, client_id, redirect_uris } = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );
    oAuth2Client.getToken(code, async (err, token) => {
      if (err) return console.error("Error retrieving access token", err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log("Token stored to", TOKEN_PATH);
      });
      let json = await convertGF(oAuth2Client);
      res.send(json);
    });
  });
};

exports.openGFAuth = (req, res) => {
  const formUrl = req.body.formUrl;
  fs.readFile("credentials.json", (err, content) => {
    if (err) return console.log("Error loading client secret file:", err);
    // Authorize a client with credentials, then call the Google Apps Script API.
    //const jsonOrUrl = authorize(JSON.parse(content), convertGF);
    const credentials = JSON.parse(content);

    const { client_secret, client_id, redirect_uris } = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, async (err, token) => {
      if (err) {
        const authUrl = await getAccessToken(oAuth2Client);
        res.send({ authUrl });
        return;
      }
      oAuth2Client.setCredentials(JSON.parse(token));
      const form = await convertGF(oAuth2Client, formUrl);
      res.send(form);
    });
    // console.log("okie", jsonOrUrl, "dokie");
    // res.send(jsonOrUrl);
  });
};
// Load client secrets from a local file.

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  // open(authUrl);
  return authUrl;
}

async function convertGF(auth, formUrl) {
  // Make the API request. The request object is included here as 'resource'.
  const script = google.script({ version: "v1", auth });
  const scriptId = "1Jw1cq_dQVdHKCRgpjyz3gzBT63J1OFQN5_FaO-u-8R_eJqtSHtzz_6W-";
  const resp = await script.scripts.run({
    auth: auth,
    resource: {
      function: "main",
      parameters: [formUrl],
      devMode: true,
    },
    scriptId: scriptId,
  });

  if (resp.error) {
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
    const json = resp.data.response.result;
    return json;
  }
}

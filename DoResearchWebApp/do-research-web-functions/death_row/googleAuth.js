const { google } = require("googleapis");
const fs = require("fs").promises;
const SCOPES = ["https://www.googleapis.com/auth/forms"];

const TOKEN_PATH = "token.json";

exports.checkGoogleOAuth = async (req, res, next) => {
  const oAuth2Client = await getOAuth2Client();

  try {
    const token = await fs.readFile(TOKEN_PATH);
    oAuth2Client.setCredentials(JSON.parse(token));

    req.auth = oAuth2Client;
    return next();
  } catch {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });
    return res.json({ authUrl });
  }
};

exports.handleGoogleOAuthCode = async (req, res) => {
  const code = req.query.code;
  const oAuth2Client = await getOAuth2Client();
  oAuth2Client.getToken(code, async (err, token) => {
    if (err) return console.error("Error retrieving access token", err);
    oAuth2Client.setCredentials(token);
    // Store the token to disk for later program executions

    try {
      await fs.writeFile(TOKEN_PATH, JSON.stringify(token));
      res.send("User Authenticated");
    } catch {
      return console.error("Error writing token file");
    }
  });
};

async function getOAuth2Client() {
  const content = await fs.readFile("credentials.json");
  const credentials = JSON.parse(content);
  const { client_secret, client_id, redirect_uris } = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  return oAuth2Client;
}

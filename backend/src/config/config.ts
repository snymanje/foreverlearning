export default {
  tokenSecret: process.env.TOKENSECRET,
  refreshTokenSecret: process.env.REFRESHTOKENSECRET,
  serverPort: process.env.SERVERPORT,
  mongooseConnection: process.env.MONGOOSE_CONNECTION,
  emailFromAddress: process.env.EMAILFROMADDRESS,
  emailHost: process.env.EMAILHOST,
  emailPort: process.env.EMAILPORT,
  emailUser: process.env.EMAILUSER,
  emailPassword: process.env.EMAILPASSWORD,
  clientUrl: process.env.CLIENTURL,
  tokenExpiresIn: process.env.TOKENEXPIRES,
  refreshTokenExpiresIn: process.env.REFRESHTOKENEXPIRES,
  // 24days * 60sec * 60min * 1000 milliseconds
  cookieExpires: process.env.COOKIEEXPIRES,
  refreshCookieExpires: process.env.REFRESHCOOKIEEXPIRES,
  googleClientId: process.env.GOOGLECLIENTID,
  googleClientSecret: process.env.GOOGLECLIENTSECRET
};

import { MsalAuthProvider, LoginType } from "react-aad-msal";
const tenant = "salmantest2forpbs.onmicrosoft.com";
const signInPolicy = "B2C_1_react_sign_in";
const applicationID = "154dda85-27ca-4efc-bb67-97a2a327bba4";
const reactRedirectUri = "http://localhost:3000";
const tenantSubdomain = tenant.split(".")[0];
const instance = `https://${tenantSubdomain}.b2clogin.com/tfp/`;
const signInAuthority = `${instance}${tenant}/${signInPolicy}`;
// Msal Configurations
const signInConfig = {
  auth: {
    authority: signInAuthority,
    clientId: applicationID,
    redirectUri: reactRedirectUri,
    validateAuthority: false
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true
  }
};
// Authentication Parameters
const authenticationParameters = {
  scopes: [
    "https://graph.microsoft.com/Directory.Read.All",
    // "https://salmantest2forpbs.onmicrosoft.com/api-1/user_impersonation"
  ]
};
// Options
const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin + "/auth.html"
};
export const signInAuthProvider = new MsalAuthProvider(
  signInConfig,
  authenticationParameters,
  options
);
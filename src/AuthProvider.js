//import React from "react";
//import { AuthProvider, AuthService } from "react-oidc-context";

//const oidcConfig = {
  //authority: "https://eu-north-1imkpoe97i.auth.eu-north-1.amazoncognito.com",
  //client_id: "3jk0r0mrt0d52d2f0oodrk5ks2",
  //redirect_uri: "https://main.d2edpj14zktqpx.amplifyapp.com/callback", // DEVE ESSERE UGUALE A QUELLO IN COGNITO
  //response_type: "code",
  //scope: "openid profile email",
//};

//export function AuthWrapper({ children }) {
  //return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
//}

import React, { useEffect } from "react";
import { AuthProvider, useAuth } from "react-oidc-context";

const oidcConfig = {
  authority: "https://eu-north-1imkpoe97i.auth.eu-north-1.amazoncognito.com", // dominio Cognito
  client_id: "3jk0r0mrt0d52d2f0oodrk5ks2", // Client ID
  redirect_uri: "https://main.d2edpj14zktqpx.amplifyapp.com/callback", // redirect URI
  response_type: "code",
  scope: "openid profile email",
  extraQueryParams: { prompt: "login" }, // Forza il login ogni volta
};

const CustomAuthProvider = ({ children }) => {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
};

export default CustomAuthProvider;


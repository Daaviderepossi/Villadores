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
  authority: "https://tuo-cognito-domain.auth.region.amazoncognito.com", // Modifica con il tuo dominio Cognito
  client_id: "tuo-client-id", // Modifica con il tuo Client ID
  redirect_uri: "https://tuo-dominio.amplifyapp.com", // Modifica con il tuo redirect URI
  response_type: "code",
  scope: "openid profile email",
  extraQueryParams: { prompt: "login" }, // Forza il login ogni volta
};

const CustomAuthProvider = ({ children }) => {
  const auth = useAuth();

  useEffect(() => {
    auth.removeUser(); // Rimuove i dati della sessione locale ogni volta che l'app viene caricata
  }, [auth]);

  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
};

export default CustomAuthProvider;

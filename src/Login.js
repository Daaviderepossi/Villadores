// src/components/Login.js
import React from "react";
import { useAuth } from "react-oidc-context";

const Login = () => {
  const auth = useAuth();

  const handleLogin = () => {
    auth.signinRedirect(); // Reindirizza l'utente alla pagina di login di Cognito
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-6">Benvenuto!</h2>
        <p className="mb-6">Accedi per continuare.</p>
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Accedi con Cognito
        </button>
      </div>
    </div>
  );
};

export default Login;
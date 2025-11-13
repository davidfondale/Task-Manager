import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
type Auth0ProviderWithNavigateProps = {
  children: any;
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const domain = "dev-v6p3vmfjze2tro22.us.auth0.com";
  const clientId = "uhjFEA7yCyj2p88g718BdNlcA6NrzhMQ" ;
  const redirectUri = "http://localhost:5173/callback"; // make sure the port matches your server

  const onRedirectCallback = (appState: any) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };
  
  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        scope: "openid profile email",
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
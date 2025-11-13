import { StrictMode } from 'react';
import ReactDOM from "react-dom/client"; 
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./Auth0Provider";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </StrictMode>  
);

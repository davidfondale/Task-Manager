import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage"; 
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Details from "./components/Details";
import CallbackPage from "./CallbackPage";
//import ProtectedPage from "./ProtectedPage";
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationGuard from "./AuthenticationGuard";
import { TaskProvider } from './models/Context';

const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
  <TaskProvider>
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/dashboard"
        element={<AuthenticationGuard component={Dashboard} />}
      />
      <Route 
        path="/tasks/new"
        element={<AuthenticationGuard component={Create} />}
      />
      <Route 
        path="/tasks/edit"
        element={<AuthenticationGuard component={Edit} />}
      />
      <Route 
        path="/tasks/details"
        element={<AuthenticationGuard component={Details} />}
      />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  </TaskProvider>
  );
};

export default App;
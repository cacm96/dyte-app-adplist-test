import React from "react";
import "./App.css";
import Login from "../src/components/Login";
import { Container } from "@cacm96/react-component-library";
import Dashboard from "../src/components/Dashboard";
import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";
import {
  Auth0Provider,
  withAuthenticationRequired,
  //useAuth0,
} from "@auth0/auth0-react";
import { MeetingComponent } from "./components/Dyte/client";
import { CustomLayoutButton } from "./components/Dyte/layoutButton";

const ProtectedRoute = ({ component, ...args }: any) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const Auth0ProviderWithRedirectCallback = ({ children, ...props }: any) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState: any) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

function App() {
  /*const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const checkSession = async () => {
    if (!isAuthenticated) {
      loginWithRedirect({ redirectUri: `${window.location.origin}/main` });
    } else {
      logout({ returnTo: window.location.origin });
    }
  };

  const initInterval = () => {
    setInterval(() => {
      checkSession();
    }, 30000);
  };
  initInterval();*/

  return (
    <Container>
      <BrowserRouter>
        <Auth0ProviderWithRedirectCallback
          domain={process.env.REACT_APP_AUTH0_DOMAIN}
          clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
          redirectUri={window.location.origin}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/main"
              element={<ProtectedRoute component={Dashboard} />}
            />
            <Route
              path="/simple-dyte-client/meeting/:room/:id"
              element={<ProtectedRoute component={MeetingComponent} />}
            />
            <Route
              path="/custom-layout-button/meeting/:room/:id"
              element={<ProtectedRoute component={CustomLayoutButton} />}
            />
          </Routes>
        </Auth0ProviderWithRedirectCallback>
      </BrowserRouter>
    </Container>
  );
}

export default App;

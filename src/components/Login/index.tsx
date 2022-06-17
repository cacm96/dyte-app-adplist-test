import React from "react";
import { ContentBox, Title } from "@cacm96/react-component-library";

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./styles";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <ContentBox>
      <Title label="Login on Dyte" />

      <Button
        onClick={() =>
          loginWithRedirect({ redirectUri: `${window.location.origin}/main` })
        }
      >
        Click to Login
      </Button>
    </ContentBox>
  );
}

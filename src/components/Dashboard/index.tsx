import { Main } from "../Dyte/main";
import Logout from "../Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "./styles";

function Dashboard() {
  const { getAccessTokenSilently, logout } = useAuth0();

  const checkSession = async () => {
    const token = await getAccessTokenSilently();
    if (!token) logout({ returnTo: window.location.origin });
  };

  const initInterval = () => {
    setInterval(() => {
      checkSession();
    }, 30000);
  };
  initInterval();

  return (
    <Container>
      <Logout />
      <Main />
    </Container>
  );
}

export default Dashboard;

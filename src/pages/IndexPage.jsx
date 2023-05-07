import { useGoogleLogin } from "@react-oauth/google";
import { Button, Container } from "react-bootstrap";
import { getGoogleData } from "../data/api";
import { useUserStore } from "../Hooks/UseUserStore";
import { useLoggedInStore } from "../Hooks/UseLoggedInStore";
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  const loginUser = useLoggedInStore((state) => state.login)
  const createUser = useUserStore((state) => state.createUser);

  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const data = await getGoogleData(response.access_token);
        window.localStorage.setItem("user_token", response.access_token);
        createUser(
          data.sub,
          data.name,
          data.given_name,
          data.family_name,
          data.picture,
          data.email,
          data.email_verified,
          data.locale
        );
        loginUser()
        navigate("/overblik")
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <>
      <Container>
        <div className="index-page">
          <h1>TempSal</h1>
          <Button type="primary" size="lg" onClick={() => login()}>
            Log ind med Google
          </Button>
        </div>
      </Container>
    </>
  );
}

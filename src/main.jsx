import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import DashboardPage from "./pages/DashboardPage";
import ShiftsPage from "./pages/ShiftsPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import IndexPage from "./pages/IndexPage";
import { useLayoutEffect } from "react";
import Protected from "./components/Protected";
import { getGoogleData } from "./data/api";
import { useUserStore } from "./Hooks/UseUserStore";
import { useLoggedInStore } from "./Hooks/UseLoggedInStore";
import SalaryAndBonusPage from "./pages/SalaryAndBonusPage";

export default function App() {
  // User data hooks.
  const createUser = useUserStore(state => state.createUser);

  // Is user logged in hooks.
  const loginUser = useLoggedInStore(state => state.login);
  const logoutUser = useLoggedInStore(state => state.logout);

  const IsUserLoggedIn = async () => {
    const user_token = window.localStorage.getItem("user_token");

    if (user_token === null) {
      console.log("User not logged in...");
      logoutUser();
    } else {
      try {
        const data = await getGoogleData(user_token);
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
        loginUser();
      } catch {
        logoutUser();
        console.log("Error");
      }
    }
  };

  useLayoutEffect(() => {
    IsUserLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        <Route path="/overblik" element={<DefaultLayout />}>
          <Route
            index
            element={
              <Protected>
                <DashboardPage />
              </Protected>
            }
          />
        </Route>
        <Route path="/vagter" element={<DefaultLayout />}>
          <Route
            index
            element={
              <Protected>
                <ShiftsPage />
              </Protected>
            }
          />
        </Route>
        <Route path="/løn-og-tillæg" element={<DefaultLayout />}>
          <Route
            index
            element={
              <Protected>
                <SalaryAndBonusPage />
              </Protected>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider
    clientId={
      "794942807677-ak391qk98t4d7kcfp4hfv3vmg5g0ejgt.apps.googleusercontent.com"
    }
  >
    <App />
  </GoogleOAuthProvider>
);

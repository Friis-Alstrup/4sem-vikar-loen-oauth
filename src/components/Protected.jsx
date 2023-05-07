import { Navigate } from "react-router-dom";
import { useLoggedInStore } from "../Hooks/UseLoggedInStore";

// eslint-disable-next-line react/prop-types
export default function Protected({ children }) {
  const isLoggedIn = useLoggedInStore((state) => state.isLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to="/" replace={true} />
  }
  return children;
}

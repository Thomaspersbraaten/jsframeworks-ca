import { createContext, React } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext([null, () => {}]);
export const AuthProvider = (props) => {
  const [auth, setAuth] = useLocalStorage("auth", null);
  return <AuthContext.Provider value={[auth, setAuth]}>{props.children}</AuthContext.Provider>;
};

import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext([null, () => {}]);
export const AuthProvider: React.FunctionComponent<any> = (props: any) => {
  const [auth, setAuth]: any = useLocalStorage("auth", null);
  return <AuthContext.Provider value={[auth, setAuth]}>{props.children}</AuthContext.Provider>;
};

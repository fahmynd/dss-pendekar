import { createContext } from "react";

const AuthContext = createContext({
  isLogged: false,
  handleLogin: (token) => {},
  doLogout: () => {},
});

export default AuthContext;

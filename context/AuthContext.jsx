import { createContext, useState } from "react";
import { login } from "../utils/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = async ({ email, password }) => {
    setIsLoading(true);
    const { error, message, tokenAccess } = await login({ email, password });
    if (!error) {
      setUserToken(tokenAccess);
    }
    setIsLoading(false);
    return { error, message };
  };

  const onLogout = () => {
    setIsLoading(true);
    setUserToken(null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ onLogin, onLogout, userToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

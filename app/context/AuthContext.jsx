import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = () => {
    setIsLoading(true);
    setUserToken("fdsafsdfa");
    setIsLoading(false);
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

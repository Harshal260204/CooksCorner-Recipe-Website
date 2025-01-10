import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Initially set to null
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Save Token and User to LocalStorage
  const saveToken = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
    setIsLoggedIn(true);
  };

  // Set User Data
  const setUserDetails = (userData) => {
    setUser(userData);
  };

  // Remove Token and User
  const removeToken = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ saveToken, setUserDetails, removeToken, isLoggedIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const contextValue = useContext(AuthContext);

  if (!contextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return contextValue;
};

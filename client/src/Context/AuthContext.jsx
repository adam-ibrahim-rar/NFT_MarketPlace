import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [Login, setLogin] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
      setLogin(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        Login,
        setLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
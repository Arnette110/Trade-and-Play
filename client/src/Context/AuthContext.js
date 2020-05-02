import React, {
  createContext,
  useState,
  useEffect
} from "react";

import AuthService from "../Services/AuthService";

export const AuthContext = createContext({user: {}, setUser: () => {}, isAuthenticated: {}, setIsAuthenticated: () => {}});

export default ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AuthService.isAuthenticated().then(data => {
      setUser(data.user);
      setIsAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div>
     
        <AuthContext.Provider
          value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
        >
          {children}
        </AuthContext.Provider>     
    </div>
  );
};

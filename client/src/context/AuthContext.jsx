// client/src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);    // { id, email, role, ... }
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // try restore from localStorage on first mount
  useEffect(() => {
    const stored = localStorage.getItem("amsa_auth");
    if (!stored) {
      setLoading(false);
      return;
    }
    try {
      const { token, user } = JSON.parse(stored);
      setToken(token);
      setUser(user);
    } catch {
      localStorage.removeItem("amsa_auth");
    } finally {
      setLoading(false);
    }
  }, []);

  const saveAuth = (token, user) => {
    setToken(token);
    setUser(user);
    localStorage.setItem("amsa_auth", JSON.stringify({ token, user }));
  };

  const clearAuth = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("amsa_auth");
  };

  const login = async (email, password) => {
    const data = await api("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    saveAuth(data.token, data.user);
    return data.user;
  };

  const signup = async ({
    email,
    eduEmail,
    personalEmail,
    password,
    firstName,
    lastName
  }) => {
    const emailToSend = (email || eduEmail || "").trim();
    const data = await api("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email: emailToSend,
        personalEmail,
        password,
        firstName,
        lastName
      })
    });

    saveAuth(data.token, data.user);
    return data.user;
  };


  const logout = () => {
    clearAuth();
  };

  const authFetch = (path, opts = {}) => {
    if (!token) {
      return Promise.reject({ message: "Not authenticated" });
    }
    return api(path, {
      ...opts,
      headers: {
        ...(opts.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, signup, logout, authFetch, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

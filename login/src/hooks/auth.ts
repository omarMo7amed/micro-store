// login/src/hooks/auth.ts
import { useEffect, useState } from "react";
import { publish } from "home/eventBus";
const API_SERVER = "http://localhost:8000";

export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    credentials: "include", // Ensure cookies are included
  });

  if (!response.ok) throw new Error("Login failed");

  const data = await response.json();
  const token = data.access_token; // Now this will not be undefined

  // ✅ Publish the token globally
  publish("auth:login", token);

  // Optional: persist in localStorage for reloads
  localStorage.setItem("jwt", token);

  return token;
};

export const logout = () => {
  localStorage.removeItem("jwt");
  publish("auth:logout", null);
};

// Hook that reads login state from localStorage and reacts to events
// ... (login and logout functions are fine) ...

// Hook that reads login state from localStorage and reacts to events
export function useAuth() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("jwt")
  );

  console.log("useAuth token:", token);

  useEffect(() => {
    // ✅ Define the listener function so it can be referenced
    const handleAuthEvents = (e: any) => {
      const { topic, data } = e.detail;
      if (topic === "auth:login") setToken(data);
      if (topic === "auth:logout") setToken(null);
    };

    // ✅ Add the specific listener
    window.addEventListener("pubsub", handleAuthEvents);

    // ✅ Return a cleanup function that removes the *exact same* listener
    return () => {
      window.removeEventListener("pubsub", handleAuthEvents);
    };
  }, []); // Empty dependency array is correct

  return !!token; // Returns true if logged in, false if not
}

import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8000";

export const jwt = new BehaviorSubject<string | null>(
  localStorage.getItem("jwt")
);

export const auth$ = jwt.asObservable();

export const authChannel = new BroadcastChannel("auth-channel");

export const notifyAuthChange = (event: string, data: any) => {
  console.log("Broadcasting auth change:", event, data);
  authChannel.postMessage({ event, data });
};

authChannel.onmessage = (message) => {
  const { event, data } = message.data;
  console.log("Received auth broadcast:", event, data);

  if (event === "login" && data) {
    jwt.next(data);
    localStorage.setItem("jwt", data);
  }

  if (event === "logout") {
    jwt.next(null);
    localStorage.removeItem("jwt");
  }
};

export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) throw new Error("Login failed");

  const data = await response.json();
  const token = data.access_token;

  jwt.next(token);

  localStorage.setItem("jwt", token);

  notifyAuthChange("login", token);

  return token;
};

export const logout = () => {
  jwt.next(null);
  localStorage.removeItem("jwt");

  // Broadcast to other apps/tabs
  notifyAuthChange("logout", null);
};

export function useAuth() {
  const [token, setToken] = useState<string | null>(jwt.value);

  useEffect(() => {
    const sub = auth$.subscribe((value) => setToken(value));
    return () => sub.unsubscribe();
  }, []);

  return !!token;
}

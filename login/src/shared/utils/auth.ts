// login/src/auth.js
export const authChannel = new BroadcastChannel("auth-channel");

// Notify other micro frontends about login/logout
export const notifyAuthChange = (event: any, data = null) => {
  console.log("Notifying auth change:", event, data);
  authChannel.postMessage({ event, data });
};

// Listen for auth changes
export const listenAuthChange = (callback: any) => {
  authChannel.onmessage = (message) => {
    callback(message.data);
  };
};

// Get user state from the cookie
export const getUserState = () => {
  const cookies = document.cookie.split("; ");
  const jwtCookie = cookies.find((row) => row.startsWith("jwt="));
  console.log("Cookies:", cookies); // Debugging output
  console.log("JWT Cookie:", jwtCookie); // Debugging output
  return jwtCookie ? jwtCookie.split("=")[1] : null;
};

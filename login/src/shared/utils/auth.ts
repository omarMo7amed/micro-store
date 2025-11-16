// login/src/auth.js
export const authChannel = new BroadcastChannel("auth-channel");

// Notify other micro frontends about login/logout
export const notifyAuthChange = (event: any, data: any) => {
  authChannel.postMessage({ event, data });
  console.log("Notified auth change:", { event, data });
};

// Listen for auth changes
export const listenAuthChange = (callback: any) => {
  authChannel.onmessage = (message) => {
    console.log("Received auth change message:", message.data);
    callback(message.data);
  };
};

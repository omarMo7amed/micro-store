export const mfConfig = {
  name: "login",
  filename: "remoteEntry.js",
  remotes: {
    pdp: "pdp@http://localhost:3001/remoteEntry.js",
    home: "home@http://localhost:3000/remoteEntry.js",
    cart: "cart@http://localhost:3002/remoteEntry.js",
  },
  exposes: {
    "./auth": "./src/hooks/auth.ts",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    rxjs: { singleton: true, eager: true },
  },
};

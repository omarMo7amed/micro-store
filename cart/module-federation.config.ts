export const mfConfig = {
  name: "cart",
  filename: "remoteEntry.js",
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
    login: "login@http://localhost:3005/remoteEntry.js",
  },
  exposes: {
    "./MiniCart": "./src/components/MiniCart.tsx",
    "./styles": "./src/index.css",
  },
  shared: {
    react: { singleton: true, requiredVersion: undefined },
    "react-dom": { singleton: true, requiredVersion: undefined },
  },
};

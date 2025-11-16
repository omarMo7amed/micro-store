export const mfConfig = {
  name: "cart",
  filename: "remoteEntry.js",
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
    x: "login@http://localhost:3005/remoteEntry.js",
  },
  exposes: {
    "./MiniCart": "./src/components/MiniCart.tsx",
    "./styles": "./src/index.css",
    "./Cart": "./src/components/Layout.tsx",
    "./cart": "./src/hooks/cart.ts",
  },
  typescript: {
    type: "none",
  },

  shared: {
    react: { singleton: true, requiredVersion: undefined },
    "react-dom": { singleton: true, requiredVersion: undefined },
    rxjs: { singleton: true, eager: true },
  },
};

export const mfConfig = {
  name: "home",

  filename: "remoteEntry.js",

  remotes: {
    cart: "cart@http://localhost:3002/remoteEntry.js",
    x: "login@http://localhost:3005/remoteEntry.js",
  },

  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./products": "./src/products.ts",
    "./Footer": "./src/components/Footer.tsx",
    "./styles": "./src/index.css",
    "./eventBus": "./src/eventBus.ts",
  },

  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    rxjs: { singleton: true, eager: true },
  },
};

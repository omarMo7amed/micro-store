export const mfConfig = {
  name: "pdp",
  filename: "remoteEntry.js",

  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
  },
  exposes: { "./Product": "./src/components/ProductContent" },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    rxjs: { singleton: true, eager: true },
  },
};

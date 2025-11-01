export const mfConfig = {
  name: "pdp",
  filename: "remoteEntry.js",

  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
  },
  exposes: {},
  shared: {
    react: { singleton: true, requiredVersion: undefined },
    "react-dom": { singleton: true, requiredVersion: undefined },
  },
};

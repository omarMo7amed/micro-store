export const mfConfig = {
  name: "login",
  filename: "remoteEntry.js",
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
  },
  exposes: {
    "./auth": "./src/hooks/auth.ts",
    "./sharedState": "./src/shared/utils/auth.ts",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    rxjs: { singleton: true, eager: true },
  },
};

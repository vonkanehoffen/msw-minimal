import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";

export const App = () => {
  const ctx = require.context("./app");

  return <ExpoRoot context={ctx} />;
};

async function enableMocking() {
  if (!__DEV__) {
    return;
  }

  await import("./msw.polyfills");
  const { server } = await import("./mocks/server");

  server.listen();
}

enableMocking().then(() => {
  registerRootComponent(App);
});

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("package exposes Expo scripts and cross-platform dependencies", async () => {
  const packageJson = JSON.parse(await readFile("package.json", "utf8"));

  assert.equal(packageJson.main, "index.js");
  assert.deepEqual(packageJson.scripts, {
    start: "expo start",
    android: "expo start --android",
    ios: "expo start --ios",
    web: "expo start --web",
    test: "node --test"
  });

  for (const dependency of [
    "@expo/metro-runtime",
    "expo",
    "react",
    "react-dom",
    "react-native",
    "react-native-web"
  ]) {
    assert.ok(
      packageJson.dependencies?.[dependency],
      `Expected ${dependency} to be installed`
    );
  }
});

test("Expo app config targets native and web platforms", async () => {
  const appJson = JSON.parse(await readFile("app.json", "utf8"));

  assert.deepEqual(appJson.expo.platforms, ["ios", "android", "web"]);
  assert.equal(appJson.expo.orientation, "default");
  assert.equal(appJson.expo.web.bundler, "metro");
});

test("device profile maps common screen widths to responsive app modes", async () => {
  const { getDeviceProfile } = await import("../src/deviceProfile.js");

  assert.deepEqual(getDeviceProfile({ width: 390, platform: "ios" }), {
    platform: "ios",
    formFactor: "phone",
    isNative: true,
    maxContentWidth: 390
  });

  assert.deepEqual(getDeviceProfile({ width: 834, platform: "android" }), {
    platform: "android",
    formFactor: "tablet",
    isNative: true,
    maxContentWidth: 760
  });

  assert.deepEqual(getDeviceProfile({ width: 1280, platform: "web" }), {
    platform: "web",
    formFactor: "desktop",
    isNative: false,
    maxContentWidth: 960
  });
});
